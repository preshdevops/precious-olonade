"use client";

import React, { useState } from "react";

const builderThoughts = [
  "Simple software is harder to build than complicated software, but people actually use it.",
  "Privacy shouldn't require reading a 40-page terms document or trusting a black box.",
  "Mobile devices with patchy data in Osun are the ultimate stress-test for clean software.",
  "Build with intention. Ship with purpose.",
];

export default function HeroMonograph() {
  const [thoughtIndex, setThoughtIndex] = useState(0);

  const nextThought = () => {
    setThoughtIndex((prev) => (prev + 1) % builderThoughts.length);
  };

  return (
    <section id="home" className="relative pt-20 pb-24 md:pt-28 md:pb-32 border-b border-white/[0.08] blueprint-dots">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Top Studio Header Strip */}
        <div className="flex flex-wrap items-center gap-3 mb-8 font-mono text-xs text-[#9DA1AA]">
          <span>Osun, Nigeria</span>
          <span className="text-[#646974]">·</span>
          <span className="text-[#646974]">WAT (UTC+1)</span>
        </div>

        {/* Main Hero Header */}
        <div className="space-y-6 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
            Precious Oluwasegun Olonade
          </span>

          <div className="relative">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F4F4F6] leading-[1.08]">
              I build products.
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-[#9DA1AA] font-normal leading-relaxed max-w-2xl">
            Computer Science graduate from Nigeria, exploring product development, software and technology that solves real problems.
          </p>

          {/* Quick Nav Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#work"
              className="tactile-press px-6 py-3 rounded-full bg-[#F4F4F6] text-[#0B0C0E] font-medium text-sm hover:bg-white hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>See my work</span>
              <span className="font-mono text-xs">↓</span>
            </a>
            <a
              href="#about"
              className="tactile-press px-6 py-3 rounded-full border border-white/[0.14] text-[#F4F4F6] font-medium text-sm hover:border-white hover:bg-white/[0.04] transition-all"
            >
              <span>About me</span>
            </a>
          </div>
        </div>

        {/* Studio Scratchpad */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#13151A] border border-white/[0.08] max-w-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#646974]">
                Workbench Note #{thoughtIndex + 1}
              </span>
            </div>
            <p className="font-serif italic text-sm sm:text-base text-[#F4F4F6] leading-snug">
              &ldquo;{builderThoughts[thoughtIndex]}&rdquo;
            </p>
          </div>

          <button
            onClick={nextThought}
            type="button"
            className="tactile-press shrink-0 px-3 py-1.5 rounded-lg border border-white/[0.12] hover:border-white text-xs font-mono text-[#9DA1AA] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            aria-label="Shuffle product thought"
          >
            <span>Shuffle</span>
            <span className="font-mono text-xs">↻</span>
          </button>
        </div>

        {/* What I'm into */}
        <div className="mt-16 pt-12 border-t border-white/[0.08]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
              What I&rsquo;m into
            </h2>
            <span className="font-mono text-[11px] text-[#646974]">
              Core focus areas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-5 rounded-xl bg-[#111318] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#646974] block">01</span>
                <h3 className="font-serif text-lg text-[#F4F4F6] font-medium group-hover:text-white transition-colors">
                  Product building
                </h3>
                <p className="text-sm text-[#9DA1AA] leading-relaxed">
                  Figuring out what to build and turning ideas into usable products.
                </p>
              </div>
              <div className="pt-2 font-mono text-[11px] text-[#646974]">
                Ideas → Reality
              </div>
            </div>

            <div className="group p-5 rounded-xl bg-[#111318] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#646974] block">02</span>
                <h3 className="font-serif text-lg text-[#F4F4F6] font-medium group-hover:text-white transition-colors">
                  Software
                </h3>
                <p className="text-sm text-[#9DA1AA] leading-relaxed">
                  Building across web, mobile and backend systems.
                </p>
              </div>
              <div className="pt-2 font-mono text-[11px] text-[#646974]">
                Web · Mobile · API
              </div>
            </div>

            <div className="group p-5 rounded-xl bg-[#111318] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#646974] block">03</span>
                <h3 className="font-serif text-lg text-[#F4F4F6] font-medium group-hover:text-white transition-colors">
                  Privacy
                </h3>
                <p className="text-sm text-[#9DA1AA] leading-relaxed">
                  Interested in giving people more control over their data.
                </p>
              </div>
              <div className="pt-2 font-mono text-[11px] text-[#646974]">
                Client-side crypto
              </div>
            </div>

            <div className="group p-5 rounded-xl bg-[#111318] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#646974] block">04</span>
                <h3 className="font-serif text-lg text-[#F4F4F6] font-medium group-hover:text-white transition-colors">
                  Tech for Development
                </h3>
                <p className="text-sm text-[#9DA1AA] leading-relaxed">
                  Interested in how technology can solve problems in communities.
                </p>
              </div>
              <div className="pt-2 font-mono text-[11px] text-[#646974]">
                Community impact
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
