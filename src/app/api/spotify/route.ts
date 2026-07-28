import { NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error("Failed to get Spotify access token");
  }
  return data.access_token;
}

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json({
      isPlaying: true,
      title: "Mockingbird",
      artist: "Eminem",
      album: "Encore",
      albumArt: "https://mockart.example.com/encore.jpg",
      url: "https://open.spotify.com/track/mock123",
    }, { status: 200 });
  }

  try {
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const tokenRes = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!tokenRes.ok) {
      return NextResponse.json({ isPlaying: false, message: "Offline" }, { status: 200 });
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return NextResponse.json({ isPlaying: false, message: "Offline" }, { status: 200 });
    }

    // Check currently playing
    const nowRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 0 },
    });

    if (nowRes.status === 200) {
      const data = await nowRes.json();
      if (data?.item) {
        return NextResponse.json({
          isPlaying: true,
          title: data.item.name,
          artist: data.item.artists
            .map((a: { name: string }) => a.name)
            .join(", "),
          album: data.item.album.name,
          albumArt: data.item.album.images[0]?.url || "",
          url: data.item.external_urls.spotify,
        });
      }
    }

    // Fallback: recently played
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (recentRes.ok) {
      const recentData = await recentRes.json();

      if (recentData?.items?.length > 0) {
        const track = recentData.items[0].track;
        return NextResponse.json({
          isPlaying: false,
          title: track.name,
          artist: track.artists
            .map((a: { name: string }) => a.name)
            .join(", "),
          album: track.album.name,
          albumArt: track.album.images[0]?.url || "",
          url: track.external_urls.spotify,
        });
      }
    }

    return NextResponse.json({ isPlaying: false, message: "Offline" }, { status: 200 });
  } catch (error) {
    console.error("Spotify API error:", error);
    return NextResponse.json({ isPlaying: false, message: "Offline" }, { status: 200 });
  }
}
