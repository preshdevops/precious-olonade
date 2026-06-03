"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
          // Keep old data or show offline
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
      <div className="glass border-l-2 border-l-[#C8A96E] rounded-2xl p-4 max-w-sm w-full animate-pulse flex items-center gap-4">
        <div className="w-11 h-11 bg-[rgba(255,255,255,0.06)] rounded-full"></div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-2.5 w-16 bg-[rgba(255,255,255,0.06)] rounded-full"></div>
          <div className="h-3.5 w-28 bg-[rgba(255,255,255,0.06)] rounded-full"></div>
        </div>
      </div>
    );
  }

  const isPlaying = data?.isPlaying || false;
  const hasTrack = !!data?.title;
  const trackUrl = data?.url || "https://open.spotify.com";
  const albumArt = data?.albumArt || "/spotify-placeholder.png";
  const title = data?.title || "Not Listening";
  const artist = data?.artist || "Spotify";

  return (
    <a
      href={trackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block glass glass-hover border-l-2 border-l-[#C8A96E] rounded-2xl p-4 max-w-sm w-full shadow-sm hover:scale-[1.01]"
    >
      <div className="flex items-center gap-4">
        {/* Album Art / Spin */}
        <div className="relative w-11 h-11 flex-shrink-0 rounded-full overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[#111210]">
          <img
            src={albumArt}
            alt={data?.album || "Spotify album art"}
            width={44}
            height={44}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isPlaying ? "origin-center" : ""
            }`}
            style={
              isPlaying
                ? { animation: "spin 8s linear infinite" }
                : undefined
            }
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-1.5 mb-0.5">
            {isPlaying && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A96E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C8A96E]"></span>
              </span>
            )}
            <span
              className={`font-mono text-[9px] uppercase tracking-wider font-semibold ${
                isPlaying ? "text-[#C8A96E]" : "text-[#8A8880]"
              }`}
            >
              {isPlaying ? "Now Playing" : hasTrack ? "Recently Played" : "Offline"}
            </span>
          </div>

          <h4 className="text-sm font-semibold text-[#E8E4DC] truncate group-hover:text-[#C8A96E] transition-colors duration-300">
            {title}
          </h4>
          <p className="text-xs text-[#8A8880] truncate mt-0.5">{artist}</p>
        </div>

        {/* Equalizer */}
        {isPlaying && (
          <div className="flex items-end gap-[3px] h-4 pb-0.5 flex-shrink-0">
            <span className="eq-bar" style={{ animation: "eq-bounce 1.0s 0.1s ease-in-out infinite" }}></span>
            <span className="eq-bar" style={{ animation: "eq-bounce 1.4s 0.4s ease-in-out infinite" }}></span>
            <span className="eq-bar" style={{ animation: "eq-bounce 1.2s 0.2s ease-in-out infinite" }}></span>
            <span className="eq-bar" style={{ animation: "eq-bounce 0.8s 0.6s ease-in-out infinite" }}></span>
          </div>
        )}
      </div>
    </a>
  );
}
