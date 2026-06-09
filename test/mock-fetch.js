// test/mock-fetch.js
// This file is preloaded into the Next.js process using NODE_OPTIONS="--import file://..."
// It overrides the global fetch to mock external calls to Spotify API and the external blog posts endpoint.

if (typeof globalThis.fetch !== 'undefined') {
  const originalFetch = globalThis.fetch;
  
  globalThis.fetch = async function (input, init) {
    const url = typeof input === 'string' ? input : input.url;
    
    // 1. Mock Spotify token endpoint
    if (url.includes('accounts.spotify.com/api/token')) {
      return new Response(JSON.stringify({
        access_token: 'mock-access-token-12345',
        token_type: 'Bearer',
        expires_in: 3600
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 2. Mock Spotify currently playing endpoint
    if (url.includes('api.spotify.com/v1/me/player/currently-playing')) {
      const mockSpotifyPlaying = process.env.MOCK_SPOTIFY_STATUS === 'offline' 
        ? null 
        : {
            item: {
              name: 'Mockingbird',
              artists: [{ name: 'Eminem' }],
              album: {
                name: 'Encore',
                images: [{ url: 'https://mockart.example.com/encore.jpg' }]
              },
              external_urls: { spotify: 'https://open.spotify.com/track/mock123' }
            }
          };

      if (!mockSpotifyPlaying) {
        return new Response('', { status: 204 }); // 204 No Content
      }

      return new Response(JSON.stringify(mockSpotifyPlaying), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 3. Mock Spotify recently played endpoint
    if (url.includes('api.spotify.com/v1/me/player/recently-played')) {
      const mockSpotifyRecent = {
        items: [
          {
            track: {
              name: 'Lose Yourself',
              artists: [{ name: 'Eminem' }],
              album: {
                name: '8 Mile',
                images: [{ url: 'https://mockart.example.com/8mile.jpg' }]
              },
              external_urls: { spotify: 'https://open.spotify.com/track/mock456' }
            }
          }
        ]
      };
      return new Response(JSON.stringify(mockSpotifyRecent), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Mock Vercel Blog Posts API
    if (url.includes('preciouswrites.vercel.app/api/posts')) {
      const mockPosts = [
        {
          slug: 'mock-post-1',
          title: 'Mocked Blog Post 1',
          excerpt: 'This is an E2E mocked post for testing blog integration.',
          date: 'June 9, 2026',
          category: 'Testing',
          readingTime: '1 min read'
        },
        {
          slug: 'mock-post-2',
          title: 'Mocked Blog Post 2',
          excerpt: 'Another mocked post to check multiple items render.',
          date: 'June 8, 2026',
          category: 'Development',
          readingTime: '3 min read'
        }
      ];
      return new Response(JSON.stringify(mockPosts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Fallback to original fetch for local requests or other external requests
    return originalFetch(input, init);
  };
  
  console.log('E2E Mocks Loaded: Intercepting external Spotify & Blog fetch requests.');
}
