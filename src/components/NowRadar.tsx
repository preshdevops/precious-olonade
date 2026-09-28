import React from "react";

interface NowItem {
  area: string;
  focus: string;
  notes: string;
  status: "Active" | "Research" | "Prototyping";
}

const nowItems: NowItem[] = [
  {
    area: "Product Development",
    focus: "Independent Product Architecture",
    notes: "Deepening methodology around problem validation, threat modeling for consumer privacy tools, and sustainable indie software business models.",
    status: "Active",
  },
  {
    area: "Mobile Systems",
    focus: "Kotlin & Jetpack Compose",
    notes: "Building robust, battery-efficient Android client architectures with Kotlin Multiplatform (KMP), Coroutines, and local SQLite state reconciliation.",
    status: "Active",
  },
  {
    area: "Low-Level Systems",
    focus: "Rust & Memory Safety",
    notes: "Studying systems programming in Rust: zero-cost abstractions, deterministic memory cleanup without a garbage collector, and crypto utility CLIs.",
    status: "Research",
  },
  {
    area: "Tech for Development",
    focus: "Digital Infrastructure for Communities",
    notes: "Investigating how localized, low-cost digital tools can strengthen civic assemblies, church archives, and peace clubs across West Africa.",
    status: "Prototyping",
  },
  {
    area: "Studio Experiments",
    focus: "Building & Prototyping",
    notes: "Iterating on micro-utilities that reject notification clutter and prioritize user focus, contemplation, and speed.",
    status: "Active",
  },
];

export default function NowRadar() {
  return (
    <section id="now" className="py-24 md:py-36 border-b border-white/[0.08] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA]">
                Now // Active Explorations
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F4F4F6] font-normal tracking-tight">
              What I am thinking about and building today.
            </h2>
            <p className="text-base sm:text-lg text-[#9DA1AA] leading-relaxed">
              Inspired by Derek Sivers&rsquo; &lsquo;Now&rsquo; page concept. A public record of my current technical curiosities, ongoing learning, and active prototypes.
            </p>
          </div>

          <div className="text-left md:text-right font-mono text-xs text-[#646974]">
            <span>Cycle: Q3 / September 2026</span>
          </div>
        </div>

        {/* Explorations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nowItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#111318] border border-white/[0.08] hover:border-white/[0.14] transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#9DA1AA] uppercase tracking-wider">
                    {item.area}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase border border-white/[0.1] text-[#D0D4DC] bg-white/[0.03]">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#F4F4F6] font-medium leading-snug">
                  {item.focus}
                </h3>

                <p className="text-xs sm:text-sm text-[#9DA1AA] leading-relaxed">
                  {item.notes}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-[#646974]">
                <span>Status: In Progress</span>
                <span>•</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
