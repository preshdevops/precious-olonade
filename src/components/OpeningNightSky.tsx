"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function OpeningNightSky() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const moonY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="w-full h-screen relative flex flex-col justify-between items-center overflow-hidden bg-[#070911] text-[#F8FAFC] z-20 border-b-4 border-[#E8353E]"
    >
      {/* Starry Night Sky Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <radialGradient id="sky-glow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#1e2942" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#070911" stopOpacity="1" />
          </radialGradient>
          <rect width="100%" height="100%" fill="url(#sky-glow)" />

          {/* Random Star Points */}
          <circle cx="15%" cy="20%" r="1.5" fill="#F8FAFC" opacity="0.8" />
          <circle cx="28%" cy="12%" r="1" fill="#F8FAFC" opacity="0.6" />
          <circle cx="45%" cy="25%" r="2" fill="#E8353E" opacity="0.5" />
          <circle cx="62%" cy="15%" r="1.5" fill="#F8FAFC" opacity="0.7" />
          <circle cx="78%" cy="22%" r="1" fill="#2563EB" opacity="0.8" />
          <circle cx="88%" cy="10%" r="2" fill="#F8FAFC" opacity="0.9" />
          <circle cx="92%" cy="32%" r="1" fill="#F8FAFC" opacity="0.6" />
        </svg>
      </div>

      {/* Stylized Crescent Moon Graphic */}
      <motion.div style={{ y: moonY }} className="absolute top-12 right-12 md:right-24 z-10 opacity-80" aria-hidden="true">
        <svg className="w-20 h-20 sm:w-32 sm:h-32 text-[#F8FAFC]" viewBox="0 0 100 100" fill="none">
          <path
            d="M 50 10 A 40 40 0 1 0 90 50 A 32 32 0 1 1 50 10 Z"
            fill="currentColor"
            opacity="0.9"
            className="filter drop-shadow-[0_0_15px_rgba(248,250,252,0.4)]"
          />
          <path d="M 45 20 A 35 35 0 0 0 80 50" stroke="#E8353E" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
      </motion.div>

      {/* Establishing Comic Panel Header Text */}
      <div className="relative z-10 pt-28 px-4 text-center space-y-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="poster-stamp text-xs sm:text-sm tracking-widest uppercase"
        >
          ISSUE #01 // ESTABLISHING PANEL
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl text-[#F8FAFC] uppercase tracking-tight"
        >
          YOU SWING INTO <span className="text-[#E8353E]">THE CITY...</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-mono text-xs sm:text-sm text-[#F8FAFC]/70 max-w-lg mx-auto"
        >
          Scroll down to leap rooftop to rooftop through the software portfolio of Precious Olonade.
        </motion.p>
      </div>

      {/* Scroll Down Swing Indicator */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="relative z-10 mb-8 flex flex-col items-center gap-2 font-mono text-xs text-[#E8353E] font-bold uppercase tracking-wider cursor-pointer group"
      >
        <span>SWING DOWN TO ROOFTOP 1</span>
        <svg className="w-5 h-5 text-[#E8353E] group-hover:scale-125 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.a>

      {/* Skyline Silhouette Anchored at Viewport Bottom */}
      <div className="w-full relative z-0 h-44 sm:h-64 pointer-events-none overflow-hidden">
        <img
          src="/skyline.jpg"
          alt="Night skyline city backdrop"
          className="w-full h-full object-cover object-bottom filter contrast-125 brightness-75 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent" />
      </div>
    </motion.section>
  );
}
