"use client";

import { useState } from "react";
import SpotifyWidget from "./SpotifyWidget";

export default function PosterContact() {
  const [copied, setCopied] = useState(false);
  const email = "segunolonade03@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Copy email failed", err);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-12 space-y-12"
    >
      <div className="poster-card poster-card-flagship p-8 sm:p-12 rounded-2xl space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="poster-stamp">OPEN FOR COLLAB &amp; ROLES</span>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F8FAFC]">
            Let&apos;s build something.
          </h2>
          <p className="text-base sm:text-lg text-[#F8FAFC]/90">
            Open to contracts, full-stack software development roles, and graphic design collaborations. Send an email or connect below.
          </p>
        </div>

        {/* Email Copier Action */}
        <div className="space-y-2 max-w-xl">
          <label className="font-mono text-xs text-[#CCFF00] uppercase font-bold tracking-wider">
            PRIMARY EMAIL ENDPOINT
          </label>
          <button
            onClick={handleCopyEmail}
            className="w-full font-mono font-bold text-sm sm:text-base bg-[#CCFF00] hover:bg-[#2563EB] text-[#090A0F] hover:text-[#F8FAFC] py-4 px-6 rounded-xl border-2 border-[#090A0F] shadow-[5px_5px_0px_0px_#2563EB] transition-all flex items-center justify-between cursor-pointer"
          >
            <span>{copied ? "COPIED TO CLIPBOARD!" : email}</span>
            <span>{copied ? "✓" : "COPY EMAIL ↵"}</span>
          </button>
        </div>

        {/* Direct Links */}
        <div className="pt-4 border-t border-[rgba(248,250,252,0.15)] grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://github.com/preshdevops"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-[#F8FAFC] bg-[#090A0F] border border-rgba(248,250,252,0.2) hover:border-[#CCFF00] p-4 rounded-xl flex items-center justify-between transition-colors"
          >
            <span>GITHUB</span>
            <span className="text-[#CCFF00]">&rarr;</span>
          </a>

          <a
            href="https://www.linkedin.com/in/precious-olonade/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-[#F8FAFC] bg-[#090A0F] border border-rgba(248,250,252,0.2) hover:border-[#CCFF00] p-4 rounded-xl flex items-center justify-between transition-colors"
          >
            <span>LINKEDIN</span>
            <span className="text-[#CCFF00]">&rarr;</span>
          </a>

          <a
            href="https://preciouswrites.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold text-[#F8FAFC] bg-[#090A0F] border border-rgba(248,250,252,0.2) hover:border-[#CCFF00] p-4 rounded-xl flex items-center justify-between transition-colors"
          >
            <span>BLOG JOURNAL</span>
            <span className="text-[#CCFF00]">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Footer & Spotify Widget */}
      <footer className="pt-8 border-t border-[rgba(248,250,252,0.1)] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#F8FAFC]/60">
        <div>
          &copy; {new Date().getFullYear()} Precious Olonade • Build with intention. Ship with purpose.
        </div>

        <div className="w-full md:w-auto">
          <SpotifyWidget />
        </div>
      </footer>
    </section>
  );
}
