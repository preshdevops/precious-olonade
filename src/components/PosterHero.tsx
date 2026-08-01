"use client";

import { motion } from "framer-motion";
import RooftopScene from "./RooftopScene";

export default function PosterHero() {
  const handleSwingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <RooftopScene id="home" rooftopNumber="ROOFTOP #01" rooftopTitle="HERO LANDING STAGE" variant="hero">
      {/* Rooftop Skyline Staging Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl opacity-40">
        <img
          src="/skyline.jpg"
          alt="Night skyline background behind hero rooftop"
          className="w-full h-full object-cover object-bottom filter contrast-125 brightness-75"
        />
        {/* Subtle Night Sky Falloff Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/70 to-[#090A0F]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F] via-transparent to-[#090A0F]" />
      </div>

      {/* Rooftop Ledge / Parapet Architectural Details */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none h-12 bg-[#090A0F] border-t-4 border-[#E8353E] opacity-90 flex justify-between px-8">
        <span className="font-mono text-[10px] text-[#E8353E] self-center uppercase font-bold tracking-widest">
          ROOFTOP PARAPET PERCH // ELEVATION 420M
        </span>
        <span className="font-mono text-[10px] text-[#2563EB] self-center uppercase font-bold tracking-widest hidden sm:inline">
          CITY LIGHTS SILHOUETTE
        </span>
      </div>

      <div className="relative z-10 space-y-8 md:space-y-12 pb-8">
        {/* Status Pills */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="poster-stamp">
            OPEN TO WORK
          </span>
          <span className="font-mono text-xs text-[#F8FAFC] bg-[#121620]/90 backdrop-blur-sm px-3.5 py-1.5 rounded border border-rgba(248,250,252,0.15) flex items-center gap-2">
            {/* <span className="w-2 h-2 rounded-full bg-[#E8353E] animate-ping" /> */}
            <span>NIGERIA • OSUN STATE UNIVERSITY</span>
          </span>
        </motion.div>

        {/* Oversized Dominant Hero Typography */}
        <div className="space-y-4">
          <motion.h1
            initial={{ rotate: -6, y: -50, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 14,
              mass: 1.2,
              delay: 0.15,
            }}
            className="font-heading font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight leading-[0.85] uppercase text-[#F8FAFC] drop-shadow-2xl"
          >
            PRECIOUS <span className="text-[#E8353E] font-heading block sm:inline">OLONADE</span>
          </motion.h1>

          <motion.div
            initial={{ rotate: 4, y: 30, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: 0.35,
            }}
            className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E8353E] tracking-wide uppercase pt-2 drop-shadow-lg"
          >
            &ldquo;With Great Design Comes Great Responsibility.&rdquo;
          </motion.div>
        </div>

        {/* Role & Bio Blurb */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-2xl text-[#F8FAFC]/90 max-w-3xl font-body leading-relaxed pt-2 drop-shadow-md"
        >
          Final-year Computer Science student at UNIOSUN, in Osogbo. Creator of{" "}
          <strong className="text-[#E8353E] font-semibold">Privora</strong> (encrypted data vault thesis),{" "}
          <strong className="text-[#2563EB] font-semibold">Feelms</strong>, and{" "}
          <strong className="text-[#F8FAFC] font-semibold">Editorial Muse</strong>. Also crafting event flyers, social graphics, and writing on faith, film, and tech.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="pt-4 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            onClick={handleSwingClick}
            className="font-mono font-bold text-sm sm:text-base bg-[#E8353E] text-[#090A0F] px-8 py-4 rounded shadow-[6px_6px_0px_0px_#2563EB] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#2563EB] transition-all cursor-pointer spider-sense-pulse flex items-center gap-2"
          >
            <span>SWING INTO MY WORK</span>
            <span>&rarr;</span>
          </a>

          <a
            href="https://github.com/preshdevops"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm sm:text-base bg-[#121620]/90 text-[#F8FAFC] hover:text-[#E8353E] px-8 py-4 rounded border border-rgba(248,250,252,0.2) hover:border-[#E8353E] transition-colors backdrop-blur-sm"
          >
            GITHUB // @preshdevops
          </a>
        </motion.div>
      </div>
    </RooftopScene>
  );
}
