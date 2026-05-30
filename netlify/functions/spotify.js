const https = require('https');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

// Load environment variables (either from Netlify process or local config)
let CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
let CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
let REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  try {
    const configPath = path.join(__dirname, '../../spotify-config.json');
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      CLIENT_ID = config.SPOTIFY_CLIENT_ID;
      CLIENT_SECRET = config.SPOTIFY_CLIENT_SECRET;
      REFRESH_TOKEN = config.SPOTIFY_REFRESH_TOKEN;
    }
  } catch (err) {
    console.error('Error reading local spotify-config.json:', err);
  }
}

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

// Helper to make HTTPS requests
function makeRequest(url, options = {}, postData = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: body ? JSON.parse(body) : null
        });
      });
    });
    req.on('error', (err) => reject(err));
    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function getAccessToken() {
  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  const postData = querystring.stringify({
    grant_type: 'refresh_token',
    refresh_token: REFRESH_TOKEN
  });

  const response = await makeRequest(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }, postData);

  if (!response.body || !response.body.access_token) {
    throw new Error('Failed to retrieve Spotify access token: ' + JSON.stringify(response.body));
  }

  return response.body.access_token;
}

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Spotify environment variables are not configured.' })
    };
  }

  try {
    const access_token = await getAccessToken();
    
    // Fetch currently playing
    const nowPlayingRes = await makeRequest(NOW_PLAYING_ENDPOINT, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });

    if (nowPlayingRes.statusCode === 204 || !nowPlayingRes.body || !nowPlayingRes.body.item) {
      // Nothing is playing. Get recently played track instead.
      const recentlyPlayedRes = await makeRequest(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });

      if (!recentlyPlayedRes.body || !recentlyPlayedRes.body.items || recentlyPlayedRes.body.items.length === 0) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ isPlaying: false, message: 'Offline' })
        };
      }

      const lastTrack = recentlyPlayedRes.body.items[0].track;
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          isPlaying: false,
          title: lastTrack.name,
          artist: lastTrack.artists.map(_ => _.name).join(', '),
          album: lastTrack.album.name,
          albumArt: lastTrack.album.images[0]?.url || '',
          url: lastTrack.external_urls.spotify
        })
      };
    }

    // A song is currently playing!
    const track = nowPlayingRes.body.item;
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        isPlaying: true,
        title: track.name,
        artist: track.artists.map(_ => _.name).join(', '),
        album: track.album.name,
        albumArt: track.album.images[0]?.url || '',
        url: track.external_urls.spotify
      })
    };
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
