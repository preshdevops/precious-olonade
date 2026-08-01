"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function WebCanopyAndConnectors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress for spider crawler
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Canopy opacity thins/fades as user scrolls past hero
  const canopyOpacity = useTransform(scrollYProgress, [0, 0.2], [0.35, 0.08]);
  const canopyY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  // Spider position along the right side web line (from top 10% to 90% of page)
  const spiderYPercent = useTransform(smoothProgress, [0, 1], ["8%", "92%"]);
  const spiderRotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {/* 1. TOP HERO WEB CANOPY (Hand-drawn, irregular organic web architecture) */}
      <motion.div
        style={{ opacity: canopyOpacity, y: canopyY }}
        className="absolute top-0 left-0 w-full h-[65vh] text-[#E8353E] origin-top"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Organic Irregular Anchor Lines (Not symmetric) */}
          <path d="M 0 0 L 240 280 L 520 180 L 880 320 L 1200 190 L 1440 0" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 120 0 L 380 380 L 740 420 L 1080 360 L 1320 0" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 3" />
          <path d="M 0 160 L 290 320 L 720 480 L 1150 280 L 1440 180" stroke="currentColor" strokeWidth="1.2" />

          {/* Organic Radial Webs at Top Left */}
          <g opacity="0.8">
            <path d="M 0 0 L 450 350 M 0 0 L 200 500 M 0 0 L 700 200 M 0 0 L 900 100" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 90 70 Q 140 100 180 40 M 170 130 Q 250 180 320 90 M 270 210 Q 380 270 480 140 M 350 270 Q 480 340 620 180" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* Organic Radial Webs at Top Right */}
          <g opacity="0.8">
            <path d="M 1440 0 L 980 380 M 1440 0 L 1240 520 M 1440 0 L 740 220" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 1350 70 Q 1300 110 1260 40 M 1270 140 Q 1190 200 1120 90 M 1170 220 Q 1060 280 960 140" stroke="currentColor" strokeWidth="1" />
          </g>
        </svg>
      </motion.div>

      {/* 2. FULL-BLEED WEB STRANDS AS CONNECTIVE TISSUE BETWEEN SECTIONS */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000">
          {/* Continuous Left Strand */}
          <path
            d="M 2 0 C 8 200, 1 400, 4 600 C 1 800, 6 950, 3 1000"
            stroke="#E8353E"
            strokeWidth="0.15"
            fill="none"
            strokeDasharray="1 1"
          />
          {/* Continuous Right Strand (Spider Crawling Highway) */}
          <path
            d="M 97 0 C 94 250, 98 500, 95 750 C 97 880, 94 980, 96 1000"
            stroke="#2563EB"
            strokeWidth="0.2"
            fill="none"
          />

          {/* Inter-section Web Diagonal Lattice Nodes */}
          <path d="M 2 150 Q 50 180 97 220" stroke="#E8353E" strokeWidth="0.08" fill="none" opacity="0.6" />
          <path d="M 97 380 Q 40 420 2 450" stroke="#2563EB" strokeWidth="0.08" fill="none" opacity="0.6" />
          <path d="M 2 650 Q 60 680 95 720" stroke="#E8353E" strokeWidth="0.08" fill="none" opacity="0.6" />
          <path d="M 95 850 Q 45 880 3 920" stroke="#2563EB" strokeWidth="0.08" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* 3. CRAWLING SPIDER SILHOUETTE (Abstract Geometric 8-Legged Silhouette, position scroll-linked) */}
      <motion.div
        style={{ top: spiderYPercent, rotate: spiderRotate }}
        className="absolute right-[2.5%] sm:right-[3%] z-30 transform -translate-x-1/2 -translate-y-1/2 opacity-75"
        aria-hidden="true"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8353E] filter drop-shadow-[0_0_6px_rgba(232,53,62,0.6)]"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract Geometric Spider Body (Cephalothorax + Abdomen) */}
          <circle cx="20" cy="16" r="3.5" fill="currentColor" />
          <ellipse cx="20" cy="25" rx="5" ry="7" fill="currentColor" />

          {/* Abstract 8 Angular Geometric Legs */}
          {/* Left Legs */}
          <path d="M 18 14 Q 10 8, 4 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 17 16 Q 8 15, 3 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 17 18 Q 8 22, 4 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 18 22 Q 10 30, 6 36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

          {/* Right Legs */}
          <path d="M 22 14 Q 30 8, 36 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 23 16 Q 32 15, 37 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 23 18 Q 32 22, 36 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 22 22 Q 30 30, 34 36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}
