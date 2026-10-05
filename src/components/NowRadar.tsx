import React from "react";

interface NowItem {
  tag: string;
  title: string;
  description: string;
  stage: string;
}

const explorations: NowItem[] = [
  {
    tag: "PRODUCT",
    title: "Product development",
    description:
      "Thinking about what makes products genuinely useful, validating ideas early, and learning how to ship sustainable software.",
    stage: "Daily focus",
  },
  {
    tag: "ANDROID",
    title: "Kotlin & mobile development",
    description:
      "Building Android apps with Kotlin and Jetpack Compose. Focusing on clean state management, offline support, and good mobile UX.",
    stage: "In active build",
  },
  {
    tag: "SYSTEMS",
    title: "Rust & systems",
    description:
      "Working my way through the Rust book, building small command-line utilities, and learning how memory works without a garbage collector.",
    stage: "Learning track",
  },
  {
    tag: "CIVIC TECH",
    title: "Technology for Development",
    description:
      "Thinking about practical software solutions for local problems in Nigeria, especially community tools, education, and civic groups.",
    stage: "Field exploration",
  },
  {
    tag: "SANDBOX",
    title: "Experimenting with new projects",
    description:
      "Tinkering with small, focused software ideas in my spare time and seeing what clicks.",
    stage: "Prototyping",
  },
];

export default function NowRadar() {
  return (
    <section id="now" className="py-20 md:py-28 border-b border-white/[0.08] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA]">
                Now
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F6] font-normal tracking-tight">
              What I&rsquo;m currently exploring
            </h2>
            <p className="text-base text-[#9DA1AA] max-w-xl">
              A quick snapshot of what I&rsquo;m reading, learning, and tinkering with right now.
            </p>
          </div>

          <div className="font-mono text-xs text-[#646974]">
            Updated September 2026
          </div>
        </div>

        {/* Explorations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {explorations.map((item, idx) => (
            <div
              key={idx}
              className="tactile-press p-5 rounded-2xl bg-[#111318] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-200 space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#9DA1AA]">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono text-[#646974]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-[#F4F4F6] font-medium group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9DA1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#646974]">Status</span>
                <span className="text-white/80">{item.stage}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
