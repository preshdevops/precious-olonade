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
  const [progress, setProgress] = useState(42);

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

  useEffect(() => {
    if (!data?.isPlaying) return;
    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 5 : prev + 1));
    }, 1000);
    return () => clearInterval(progressTimer);
  }, [data?.isPlaying]);

  if (loading) {
    return (
      <div className="glass border-l-2 border-l-[#2563EB] rounded-2xl p-4 max-w-sm w-full animate-pulse flex items-center gap-4">
        <div className="w-11 h-11 bg-[rgba(255,255,255,0.06)] rounded-full"></div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-2.5 w-16 bg-[rgba(255,255,255,0.06)] rounded-full"></div>
          <div className="h-3.5 w-28 bg-[rgba(255,255,255,0.06)] rounded-full"></div>
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
      className="group flex items-center gap-2.5 bg-[#11141D] border border-rgba(248,250,252,0.15) hover:border-[#E8353E] px-3.5 py-2 rounded-lg text-xs font-mono transition-all"
      aria-label={`Spotify player: ${title} by ${artist}`}
    >
      <div className="relative w-4 h-4 shrink-0 rounded-full overflow-hidden border border-[#2563EB] bg-[#090A0F]">
        <img
          src={albumArt}
          alt={data?.album || "Spotify album art"}
          width={16}
          height={16}
          className={`w-full h-full object-cover ${isPlaying ? "animate-spin" : ""}`}
        />
      </div>

      <div className="flex items-center gap-1.5 truncate max-w-[220px]">
        {isPlaying && <span className="w-1.5 h-1.5 rounded-full bg-[#E8353E] shrink-0"></span>}
        <span className="text-[#F8FAFC] font-semibold truncate group-hover:text-[#E8353E] transition-colors">{title}</span>
        <span className="text-[#F8FAFC]/50">•</span>
        <span className="text-[#F8FAFC]/70 truncate">{artist}</span>
      </div>

      {isPlaying && (
        <div className="flex items-end gap-[2px] h-3 shrink-0" aria-hidden="true">
          <span className="eq-bar" style={{ animation: "eq-bounce 1.0s 0.1s ease-in-out infinite" }}></span>
          <span className="eq-bar" style={{ animation: "eq-bounce 1.4s 0.4s ease-in-out infinite" }}></span>
          <span className="eq-bar" style={{ animation: "eq-bounce 1.2s 0.2s ease-in-out infinite" }}></span>
        </div>
      )}
    </a>
  );
}
