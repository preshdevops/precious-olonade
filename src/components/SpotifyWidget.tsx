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
      <div className="rounded-lg bg-[#13151A] border border-white/[0.08] p-3 max-w-xs w-full animate-pulse flex items-center gap-3">
        <div className="w-8 h-8 bg-white/[0.06] rounded"></div>
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
      className="group flex items-center gap-3 bg-[#111318] border border-white/[0.08] hover:border-white/[0.18] px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all"
      aria-label={`Spotify player: ${title} by ${artist}`}
    >
      <div className="relative w-7 h-7 shrink-0 rounded overflow-hidden border border-white/[0.1] bg-[#0B0C0E]">
        <img
          src={albumArt}
          alt={data?.album || "Spotify album art"}
          width={28}
          height={28}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col truncate max-w-[200px]">
        <div className="flex items-center gap-1.5">
          {isPlaying && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />}
          <span className="text-[#F4F4F6] font-medium truncate group-hover:text-white transition-colors">
            {title}
          </span>
        </div>
        <span className="text-[#9DA1AA] truncate text-[11px]">{artist}</span>
      </div>

      {isPlaying && (
        <div className="flex items-end gap-[2px] h-3 ml-auto shrink-0" aria-hidden="true">
          <span className="w-0.5 bg-white/70 animate-[eq-bounce_1.0s_0.1s_ease-in-out_infinite] h-2"></span>
          <span className="w-0.5 bg-white/70 animate-[eq-bounce_1.4s_0.4s_ease-in-out_infinite] h-3"></span>
          <span className="w-0.5 bg-white/70 animate-[eq-bounce_1.2s_0.2s_ease-in-out_infinite] h-1.5"></span>
        </div>
      )}
    </a>
  );
}
