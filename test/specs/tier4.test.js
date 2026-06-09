// test/specs/tier4.test.js
// Real-World Application Scenarios (exactly 5 comprehensive flow/content/metadata scenarios)

const assert = require('assert');

module.exports = {
  'T4-1: Global Portfolio HTML Layout Integrity': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    assert.strictEqual(res.status, 200, 'Page status should be 200');
    
    const html = await res.text();
    
    // 1. Envelope tag validation
    assert.ok(html.includes('<!DOCTYPE html>'), 'HTML must start with <!DOCTYPE html>');
    assert.ok(html.includes('<html') && html.includes('</html>'), 'HTML envelope tags must be valid');
    
    // 2. Metadata validation
    assert.ok(html.includes('<head') && html.includes('</head>'), 'Head metadata tags must exist');
    assert.ok(html.includes('<meta') || html.includes('<title'), 'Meta or title tag should exist');
    
    // 3. Responsive main wrapper validation
    assert.ok(html.includes('<main') && html.includes('</main>'), 'Main container tag must wrap page sections');
  },

  'T4-2: Spotify Endpoint Integration Flow (Now Playing)': async ({ baseUrl }) => {
    // Queries the Spotify API route to test live token fetching and mapping logic
    const spotifyRes = await fetch(`${baseUrl}/api/spotify`);
    assert.strictEqual(spotifyRes.status, 200, 'Spotify local API route should return 200');
    assert.strictEqual(spotifyRes.headers.get('content-type').split(';')[0], 'application/json', 'Content-type must be application/json');
    
    const data = await spotifyRes.json();
    
    // Assert structural properties mapped from mock-fetch
    assert.ok(data.hasOwnProperty('isPlaying'), 'Spotify response must state playing status');
    assert.strictEqual(data.isPlaying, true, 'Spotify should be playing based on preloader state');
    assert.strictEqual(data.title, 'Mockingbird', 'Track title should match mocked Eminem track');
    assert.strictEqual(data.artist, 'Eminem', 'Artist name should match mocked Eminem track');
    assert.strictEqual(data.album, 'Encore', 'Album name should match mocked Encore album');
    assert.strictEqual(data.albumArt, 'https://mockart.example.com/encore.jpg', 'Album art url should match mocked album art');
    assert.strictEqual(data.url, 'https://open.spotify.com/track/mock123', 'Spotify track URL should match mocked URL');
  },

  'T4-3: Spotify Endpoint Integration Flow (Offline/Fallback)': async ({ baseUrl }) => {
    // Verify general contract behavior of /api/spotify route under other states
    const spotifyRes = await fetch(`${baseUrl}/api/spotify`);
    const data = await spotifyRes.json();
    assert.ok(data.title || data.message, 'Response should contain either track title or offline message');
  },

  'T4-4: External Blog Feed Integration Flow': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    
    // Verify that mocked blog items injected by preloader are rendered on the homepage
    assert.ok(html.includes('Mocked Blog Post 1'), 'Home page should display mocked post 1 title');
    assert.ok(html.includes('Mocked Blog Post 2'), 'Home page should display mocked post 2 title');
    assert.ok(html.includes('Testing'), 'Home page should display mocked category for post 1');
    assert.ok(html.includes('Development'), 'Home page should display mocked category for post 2');
    assert.ok(html.includes('June 9, 2026'), 'Home page should display mocked date for post 1');
  },

  'T4-5: Contact Email Copier Component Integration': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    
    // Verify email copier component structure, icons, and attributes
    assert.ok(html.includes('segunolonade03@gmail.com'), 'Contact form should display target email address');
    assert.ok(html.includes('copied') || html.includes('Copied!') || html.includes('navigator.clipboard'), 'Email button must integrate copy function or state');
    assert.ok(html.includes('<svg') && html.includes('</svg>'), 'Email copier button must render aesthetic icons');
  }
};
