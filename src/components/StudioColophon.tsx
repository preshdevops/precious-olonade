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
    <footer id="contact" className="pt-20 pb-14 bg-[#08090B] text-[#F4F4F6] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Main Contact Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
              Contact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F6] font-normal tracking-tight">
              Let&rsquo;s talk.
            </h2>
            <p className="text-base sm:text-lg text-[#9DA1AA] leading-relaxed max-w-lg">
              I&rsquo;m currently looking for junior / early-career product engineering and developer opportunities, and I&rsquo;m always happy to connect with other builders.
            </p>

            {/* Email Copier */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="group px-4 py-2.5 rounded-lg bg-[#14161D] border border-white/[0.12] hover:border-white text-xs font-mono text-white flex items-center gap-3 transition-all"
              >
                <span>{copied ? "COPIED TO CLIPBOARD" : email}</span>
                <span className="text-[#9DA1AA] group-hover:text-white transition-colors">
                  {copied ? "✓" : "COPY EMAIL"}
                </span>
              </button>

              <a
                href={`mailto:${email}`}
                className="px-4 py-2.5 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                SEND EMAIL ↵
              </a>
            </div>
          </div>

          {/* Social Links & Spotify Widget */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-10 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Find me online
              </h3>
              <ul className="space-y-2.5 font-mono text-xs text-[#9DA1AA]">
                <li>
                  <a
                    href="https://github.com/preshdevops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between pb-1.5 border-b border-white/[0.04]"
                  >
                    <span>GitHub (@preshdevops)</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/precious-olonade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between pb-1.5 border-b border-white/[0.04]"
                  >
                    <span>LinkedIn (Precious Olonade)</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://preciouswrites.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between pb-1.5 border-b border-white/[0.04]"
                  >
                    <span>Blog (preciouswrites.vercel.app)</span>
                    <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Listening to
              </h3>
              <SpotifyWidget />
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#646974]">
          <p>Precious Oluwasegun Olonade © 2026</p>
          <div className="flex items-center gap-5">
            <span>Osun State, Nigeria</span>
            <span>•</span>
            <a href="#home" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
