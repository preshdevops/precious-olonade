"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RooftopSceneProps {
  id: string;
  rooftopNumber: string;
  rooftopTitle: string;
  children: ReactNode;
  variant?: "hero" | "projects" | "about" | "journal" | "contact";
}

export default function RooftopScene({
  id,
  rooftopNumber,
  rooftopTitle,
  children,
  variant = "projects",
}: RooftopSceneProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-linked progress bound strictly to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 1. Scroll-Linked Arc Pendulum Swing Motion
  const swingRotate = useTransform(scrollYProgress, [0, 0.45, 0.95], [-6, 0, 5]);
  const swingX = useTransform(scrollYProgress, [0, 0.45, 0.95], [-50, 0, 40]);
  const swingY = useTransform(scrollYProgress, [0, 0.45, 0.95], [50, 0, -25]);
  const swingScale = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.8, 1], [0.92, 0.98, 1, 0.98, 0.94]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  // 2. Visible Stretching Web Line Strand
  const webPathLength = useTransform(scrollYProgress, [0, 0.45, 0.95], [0.2, 1, 0.3]);
  const webOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0.1, 0.85, 0.85, 0.1]);

  // Distinct skyline backdrop crop & transform per rooftop scene
  const skylineStyles = {
    hero: "object-bottom contrast-125 brightness-75",
    projects: "object-center contrast-150 brightness-70 scale-110 rotate-[1deg]",
    about: "object-top contrast-125 brightness-65 -scale-x-100",
    journal: "object-center contrast-135 brightness-70 rotate-[-1deg]",
    contact: "object-bottom contrast-140 brightness-75 scale-105",
  }[variant];

  return (
    <section
      ref={sectionRef}
      id={id}
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-24 sm:py-36 relative min-h-screen flex flex-col justify-center scroll-mt-16 overflow-hidden"
    >
      {/* VISIBLE STRETCHING WEB-LINE STRAND */}
      <motion.div style={{ opacity: webOpacity }} className="absolute top-0 left-0 w-full h-32 pointer-events-none z-20">
        <svg className="w-full h-full text-[#E8353E]" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M 50 0 C 300 100, 700 100, 950 0"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 4"
            style={{ pathLength: webPathLength }}
          />
          <circle cx="500" cy="50" r="4" fill="#2563EB" />
        </svg>
      </motion.div>

      {/* 1. DISTINCT ROOFTOP SKYLINE BACKDROP */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl opacity-30">
        <img
          src="/skyline.jpg"
          alt={`${rooftopTitle} skyline background`}
          className={`w-full h-full object-cover ${skylineStyles}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/85 to-[#090A0F]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F] via-transparent to-[#090A0F]" />
      </div>

      {/* 2. ROOFTOP FOREGROUND ARCHITECTURAL PROP SILHOUETTES */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        {/* Parapet Ledge Base */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#05070d] border-t-2 border-[#161b28] flex justify-between px-8 items-center">
          <span className="font-mono text-[10px] text-[#E8353E] uppercase font-bold tracking-widest">
            {rooftopNumber} // {rooftopTitle}
          </span>
          <span className="font-mono text-[10px] text-[#2563EB] uppercase font-bold tracking-widest hidden sm:inline">
            FREESTANDING COMIC SPLASH PAGE
          </span>
        </div>

        {/* Variant-specific Props */}
        {variant === "projects" && (
          <div className="absolute top-8 right-6 sm:right-16 text-[#161b28]">
            <svg className="w-28 h-44 sm:w-36 sm:h-56" viewBox="0 0 100 150" fill="currentColor">
              <line x1="20" y1="70" x2="10" y2="150" stroke="currentColor" strokeWidth="4" />
              <line x1="80" y1="70" x2="90" y2="150" stroke="currentColor" strokeWidth="4" />
              <line x1="50" y1="70" x2="50" y2="150" stroke="currentColor" strokeWidth="3" />
              <rect x="15" y="15" width="70" height="55" rx="6" />
              <polygon points="50,0 10,17 90,17" fill="#E8353E" opacity="0.8" />
            </svg>
          </div>
        )}

        {variant === "about" && (
          <div className="absolute top-6 left-6 sm:left-12 text-[#161b28]">
            <svg className="w-20 h-44" viewBox="0 0 60 120" fill="currentColor">
              <line x1="30" y1="0" x2="30" y2="120" stroke="currentColor" strokeWidth="3" />
              <line x1="15" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="2" />
              <line x1="10" y1="55" x2="50" y2="55" stroke="currentColor" strokeWidth="2" />
              <circle cx="30" cy="5" r="4" fill="#E8353E" className="animate-ping" />
            </svg>
          </div>
        )}

        {variant === "journal" && (
          <div className="absolute top-12 right-10 text-[#161b28]">
            <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 20 100 L 20 40 Q 20 20 40 20 L 70 20 L 70 38 L 45 38 Q 35 38 35 48 L 35 100 Z" />
              <circle cx="70" cy="29" r="6" fill="#2563EB" opacity="0.8" />
            </svg>
          </div>
        )}

        {variant === "contact" && (
          <div className="absolute top-10 left-10 text-[#161b28]">
            <svg className="w-28 h-28" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 10 70 Q 50 10 90 70 Z" />
              <line x1="50" y1="40" x2="70" y2="10" stroke="currentColor" strokeWidth="4" />
              <circle cx="70" cy="10" r="5" fill="#E8353E" />
              <line x1="50" y1="70" x2="50" y2="100" stroke="currentColor" strokeWidth="5" />
            </svg>
          </div>
        )}
      </div>

      {/* 3. THICK FOREGROUND WEB STRANDS IN NEGATIVE SPACE */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden opacity-35">
        <svg className="w-full h-full text-[#E8353E]" viewBox="0 0 1000 600" fill="none">
          <path d="M -20 0 L 280 220" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 0 180 L 220 0" stroke="currentColor" strokeWidth="2" />
          <path d="M 1020 600 L 720 380" stroke="#2563EB" strokeWidth="2.5" />
          <path d="M 1000 420 L 780 600" stroke="#2563EB" strokeWidth="2" />
          <line x1="0" y1="300" x2="160" y2="300" stroke="currentColor" strokeWidth="1.8" strokeDasharray="6 3" />
          <line x1="1000" y1="280" x2="840" y2="280" stroke="#2563EB" strokeWidth="1.8" strokeDasharray="6 3" />
        </svg>
      </div>

      {/* 4. FREESTANDING COMIC SPLASH CONTENT (NO BOXED CARDS / CONTAINERS) */}
      <motion.div
        style={{
          rotate: swingRotate,
          x: swingX,
          y: swingY,
          scale: swingScale,
          opacity: contentOpacity,
        }}
        className="relative z-10 space-y-8 transform-gpu"
      >
        {/* Rooftop Section Header Stamp */}
        <div className="flex items-center justify-between border-b-2 border-[#E8353E]/40 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-black text-[#090A0F] bg-[#E8353E] px-2.5 py-1 rounded shadow-[2px_2px_0px_0px_#2563EB]">
              {rooftopNumber}
            </span>
            <span className="font-mono text-xs text-[#2563EB] font-bold tracking-widest uppercase">
              {rooftopTitle}
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#F8FAFC]/60 uppercase tracking-widest hidden sm:inline">
            SPLASH PAGE COMPOSITION
          </span>
        </div>

        {/* Children Content */}
        {children}
      </motion.div>
    </section>
  );
}
