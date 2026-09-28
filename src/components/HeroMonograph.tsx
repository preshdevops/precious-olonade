import React from "react";

export default function HeroMonograph() {
  return (
    <section id="home" className="pt-20 pb-28 md:pt-28 md:pb-36 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
                Independent Product Studio &amp; Computer Science
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F4F4F6] leading-[1.1]">
                Precious Oluwasegun Olonade
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#D0D4DC] font-light leading-snug max-w-2xl">
                Computer Scientist building products that solve real-world problems.
              </p>
            </div>

            <div className="pt-4 max-w-2xl text-lg md:text-xl text-[#9DA1AA] font-normal leading-relaxed">
              <p>
                I don’t just write code. I think about what should be built, why it should exist, who it is for, and how technology can make it useful.
              </p>
            </div>

            {/* Quick Actions & Wayfinding */}
            <div className="pt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#work"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#F4F4F6] text-[#0B0C0E] font-medium text-sm hover:bg-white transition-all shadow-sm"
              >
                <span>Explore Selected Work</span>
                <span className="font-mono text-xs">↓</span>
              </a>
              <a
                href="#thinking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.14] text-[#F4F4F6] font-medium text-sm hover:border-white transition-colors"
              >
                <span>Read Field Notes</span>
                <span className="font-mono text-xs text-[#9DA1AA]">→</span>
              </a>
            </div>
          </div>

          {/* Editorial Sidecar / Monograph Snapshot */}
          <div className="lg:col-span-4 lg:pl-6 space-y-8 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0">
            <div className="space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Operating Thesis
              </h2>
              <p className="text-sm text-[#9DA1AA] leading-relaxed">
                Products over technologies. Systems over syntax. Technology earns its keep only when it grants genuine agency, protects dignity, or solves acute human friction.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Core Competencies
              </h2>
              <ul className="space-y-2 text-sm text-[#F4F4F6] font-mono">
                <li className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
                  <span className="text-[#9DA1AA]">Product Architecture</span>
                  <span>End-to-End</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
                  <span className="text-[#9DA1AA]">Security &amp; Privacy</span>
                  <span>Zero-Knowledge</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
                  <span className="text-[#9DA1AA]">Platforms</span>
                  <span>Web &amp; Mobile</span>
                </li>
                <li className="flex items-center justify-between pb-1.5">
                  <span className="text-[#9DA1AA]">Foundation</span>
                  <span>B.Sc. Computer Science</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-[#13151A] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                  Status: Available
                </span>
              </div>
              <p className="text-xs text-[#9DA1AA] leading-relaxed">
                Completed Computer Science degree at Osun State University. Evaluating high-impact product engineering roles &amp; founder partnerships.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
