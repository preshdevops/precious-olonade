"use client";

import React, { useState } from "react";
import SpotifyWidget from "./SpotifyWidget";

export default function StudioColophon() {
  const [copied, setCopied] = useState(false);
  const email = "segunolonade03@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="pt-24 pb-16 bg-[#08090B] text-[#F4F4F6] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Main Contact Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.08]">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
              Initiate Dialogue
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F4F4F6] font-normal tracking-tight">
              Let&rsquo;s build something that matters.
            </h2>
            <p className="text-base sm:text-lg text-[#9DA1AA] leading-relaxed max-w-xl">
              I am open to product engineering roles, systems research fellowships, and thoughtful founding teams building tools that expand human agency.
            </p>

            {/* Email Copier */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="group px-5 py-3 rounded-lg bg-[#14161D] border border-white/[0.12] hover:border-white text-xs font-mono text-white flex items-center gap-3 transition-all"
              >
                <span>{copied ? "COPIED TO CLIPBOARD" : email}</span>
                <span className="text-[#9DA1AA] group-hover:text-white transition-colors">
                  {copied ? "✓" : "COPY EMAIL"}
                </span>
              </button>

              <a
                href={`mailto:${email}`}
                className="px-5 py-3 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                OPEN MAIL CLIENT ↵
              </a>
            </div>
          </div>

          {/* Socials & Spotify Widget */}
          <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-white/[0.08] lg:pl-10 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Digital Coordinates
              </h3>
              <ul className="space-y-3 font-mono text-xs text-[#9DA1AA]">
                <li>
                  <a
                    href="https://github.com/preshdevops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between pb-2 border-b border-white/[0.04]"
                  >
                    <span>GitHub // @preshdevops</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/precious-olonade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between pb-2 border-b border-white/[0.04]"
                  >
                    <span>LinkedIn // Precious Olonade</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://preciouswrites.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between pb-2 border-b border-white/[0.04]"
                  >
                    <span>Writing // preciouswrites.vercel.app</span>
                    <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Current Audio Feed
              </h3>
              <SpotifyWidget />
            </div>
          </div>

        </div>

        {/* Colophon Footnote */}
        <div className="pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono text-[#646974]">
          <div className="space-y-1">
            <p>Precious Oluwasegun Olonade © 2026</p>
            <p className="text-[11px] text-[#9DA1AA]">
              Typeset in Newsreader, Plus Jakarta Sans, and JetBrains Mono.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span>Osun, Nigeria</span>
            <span>•</span>
            <a href="#home" className="hover:text-white transition-colors">
              BACK TO TOP ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
