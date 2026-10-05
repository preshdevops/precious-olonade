"use client";

import { useEffect, useState } from "react";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumArt?: string;
  url?: string;
  message?: string;
}

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpotify() {
      try {
        const res = await fetch("/api/spotify");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        } else {
          setData({ isPlaying: false, message: "Offline" });
        }
      } catch (err) {
        console.warn("Failed to fetch Spotify status", err);
        setData({ isPlaying: false, message: "Offline" });
      } finally {
        setLoading(false);
      }
    }

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl bg-[#13151A] border border-white/[0.08] p-3 max-w-xs w-full flex items-center gap-3">
        <div className="w-8 h-8 bg-white/[0.06] rounded-lg"></div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="h-2 w-16 bg-white/[0.06] rounded"></div>
          <div className="h-3 w-28 bg-white/[0.06] rounded"></div>
        </div>
      </div>
    );
  }

  const isPlaying = data?.isPlaying || false;
  const trackUrl = data?.url || "https://open.spotify.com";
  const albumArt = data?.albumArt || "/spotify-placeholder.png";
  const title = data?.title || "Not Listening";
  const artist = data?.artist || "Spotify";

  return (
    <a
      href={trackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="tactile-press group flex items-center gap-3 bg-[#111318] border border-white/[0.08] hover:border-white/[0.22] px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all block w-full max-w-sm"
      aria-label={`Spotify player: ${title} by ${artist}`}
    >
      {/* Album Art with Mini Cassette Window */}
      <div className="relative w-8 h-8 shrink-0 rounded-lg overflow-hidden border border-white/[0.12] bg-[#0B0C0E]">
        <img
          src={albumArt}
          alt={data?.album || "Spotify album art"}
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
        {isPlaying && (
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full border border-white/80 border-t-transparent animate-reel" />
          </div>
        )}
      </div>

      <div className="flex flex-col truncate max-w-[190px]">
        <span className="text-[#F4F4F6] font-medium truncate group-hover:text-white transition-colors">
          {title}
        </span>
        <span className="text-[#9DA1AA] truncate text-[11px]">{artist}</span>
      </div>

      {isPlaying ? (
        <div className="flex items-end gap-[2px] h-3 ml-auto shrink-0" aria-hidden="true">
          <span className="w-0.5 bg-white/80 animate-[eq-bounce_1.0s_0.1s_ease-in-out_infinite] h-2"></span>
          <span className="w-0.5 bg-white/80 animate-[eq-bounce_1.4s_0.4s_ease-in-out_infinite] h-3"></span>
          <span className="w-0.5 bg-white/80 animate-[eq-bounce_1.2s_0.2s_ease-in-out_infinite] h-1.5"></span>
        </div>
      ) : (
        <span className="ml-auto text-[10px] font-mono text-[#646974] shrink-0">
          IDLE
        </span>
      )}
    </a>
  );
}
