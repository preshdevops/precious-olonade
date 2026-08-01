"use client";

import { motion } from "framer-motion";
import SpotifyWidget from "./SpotifyWidget";
import RooftopScene from "./RooftopScene";

export default function PosterContact() {
  const email = "segunolonade03@gmail.com";

  return (
    <RooftopScene id="contact" rooftopNumber="ROOFTOP #05" rooftopTitle="CONTACT & HERO ENDPOINT" variant="contact">
      {/* Freestanding Splash Composition */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="space-y-12 py-6"
      >
        <div className="max-w-4xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="poster-stamp">OPEN FOR COLLAB &amp; ROLES</span>
            <span className="font-mono text-xs text-[#2563EB] font-bold bg-[#090A0F] px-2.5 py-1 rounded border border-[#2563EB]">
              DIRECT ENDPOINT
            </span>
          </div>

          <h2 className="font-heading text-5xl sm:text-7xl lg:text-9xl text-[#F8FAFC] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Let&apos;s build <span className="text-[#E8353E]">something.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-[#F8FAFC]/90 font-body max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Open to contracts, full-stack software development roles, and graphic design collaborations. Click below to launch your email client directly.
          </p>
        </div>

        {/* Direct Email Mailto Action Button (No Copy, Direct Mail Launch) */}
        <div className="space-y-3 max-w-xl">
          <div className="font-mono text-xs text-[#E8353E] uppercase font-bold tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E8353E] animate-ping" />
            <span>PRIMARY MAILTO ENDPOINT</span>
          </div>

          <a
            href={`mailto:${email}`}
            className="w-full font-mono font-bold text-base sm:text-xl bg-[#E8353E] hover:bg-[#2563EB] text-[#090A0F] hover:text-[#F8FAFC] py-5 px-8 rounded-xl border-2 border-[#090A0F] shadow-[6px_6px_0px_0px_#2563EB] transition-all flex items-center justify-between cursor-pointer spider-sense-pulse group"
            title="Launch email client to contact Precious Olonade"
          >
            <span className="truncate">{email}</span>
            <span className="group-hover:translate-x-1 transition-transform shrink-0 ml-4 font-black">
              LAUNCH MAIL &rarr;
            </span>
          </a>
        </div>

        {/* Direct Social & Professional Endpoints */}
        <div className="pt-8 border-t-2 border-[rgba(248,250,252,0.15)] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="https://github.com/preshdevops"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-bold text-[#F8FAFC] bg-[#090A0F]/90 border-2 border-[#2563EB] hover:border-[#E8353E] hover:text-[#E8353E] p-5 rounded-xl flex items-center justify-between transition-all shadow-[4px_4px_0px_0px_#2563EB] group"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-[#2563EB] group-hover:text-[#E8353E]">SOURCE CODE</span>
              <span>GITHUB</span>
            </div>
            <span className="text-[#E8353E] text-lg font-black group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>

          <a
            href="https://www.linkedin.com/in/precious-olonade/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-bold text-[#F8FAFC] bg-[#090A0F]/90 border-2 border-[#2563EB] hover:border-[#E8353E] hover:text-[#E8353E] p-5 rounded-xl flex items-center justify-between transition-all shadow-[4px_4px_0px_0px_#2563EB] group"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-[#2563EB] group-hover:text-[#E8353E]">NETWORK</span>
              <span>LINKEDIN</span>
            </div>
            <span className="text-[#E8353E] text-lg font-black group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>

          <a
            href="https://preciouswrites.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-bold text-[#F8FAFC] bg-[#090A0F]/90 border-2 border-[#2563EB] hover:border-[#E8353E] hover:text-[#E8353E] p-5 rounded-xl flex items-center justify-between transition-all shadow-[4px_4px_0px_0px_#2563EB] group"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-[#2563EB] group-hover:text-[#E8353E]">ESSAYS</span>
              <span>BLOG JOURNAL</span>
            </div>
            <span className="text-[#E8353E] text-lg font-black group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </motion.div>

      {/* Footer & Spotify Widget */}
      <footer className="pt-10 border-t border-[rgba(248,250,252,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#F8FAFC]/70">
        <div>
          &copy; {new Date().getFullYear()} Precious Olonade • Build with intention. Ship with purpose.
        </div>

        <div className="w-full md:w-auto">
          <SpotifyWidget />
        </div>
      </footer>
    </RooftopScene>
  );
}
