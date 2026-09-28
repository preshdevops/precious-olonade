import React from "react";

export default function HeroMonograph() {
  return (
    <section id="home" className="pt-20 pb-24 md:pt-28 md:pb-32 border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Main Hero Header */}
        <div className="space-y-6 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
            Precious Oluwasegun Olonade
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F4F4F6] leading-[1.08]">
            I build products.
          </h1>

          <p className="text-lg sm:text-xl text-[#9DA1AA] font-normal leading-relaxed max-w-2xl">
            Computer Science graduate from Nigeria, exploring product development, software and technology that solves real problems.
          </p>

          {/* Quick Nav Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-[#F4F4F6] text-[#0B0C0E] font-medium text-sm hover:bg-white transition-all shadow-sm flex items-center gap-2"
            >
              <span>See my work</span>
              <span className="font-mono text-xs">↓</span>
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full border border-white/[0.14] text-[#F4F4F6] font-medium text-sm hover:border-white transition-colors"
            >
              <span>About me</span>
            </a>
          </div>
        </div>

        {/* What I'm into */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#646974] mb-8">
            What I&rsquo;m into
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#111318] border border-white/[0.06] space-y-2">
              <h3 className="font-serif text-lg text-[#F4F4F6] font-medium">
                Product building
              </h3>
              <p className="text-sm text-[#9DA1AA] leading-relaxed">
                Figuring out what to build and turning ideas into usable products.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111318] border border-white/[0.06] space-y-2">
              <h3 className="font-serif text-lg text-[#F4F4F6] font-medium">
                Software
              </h3>
              <p className="text-sm text-[#9DA1AA] leading-relaxed">
                Building across web, mobile and backend systems.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111318] border border-white/[0.06] space-y-2">
              <h3 className="font-serif text-lg text-[#F4F4F6] font-medium">
                Privacy
              </h3>
              <p className="text-sm text-[#9DA1AA] leading-relaxed">
                Interested in giving people more control over their data.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111318] border border-white/[0.06] space-y-2">
              <h3 className="font-serif text-lg text-[#F4F4F6] font-medium">
                Tech for Development
              </h3>
              <p className="text-sm text-[#9DA1AA] leading-relaxed">
                Interested in how technology can solve problems in communities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
