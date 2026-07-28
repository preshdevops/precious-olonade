"use client";

export default function PosterHero() {
  return (
    <section
      id="home"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background Graphic Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Status Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="poster-stamp">
            OPEN TO WORK
          </span>
          <span className="font-mono text-xs text-[#F8FAFC] bg-[#121620] px-3 py-1 rounded border border-rgba(248,250,252,0.15) flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
            <span>NIGERIA • OSUN STATE UNIVERSITY</span>
          </span>
        </div>

        {/* Huge Kinetic Typography Title */}
        <div className="space-y-2">
          <h1 className="font-body font-black text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[0.95] uppercase text-[#F8FAFC]">
            PRECIOUS <span className="text-[#2563EB] italic font-heading">OLONADE</span>
          </h1>

          <div className="font-heading italic font-bold text-2xl sm:text-4xl md:text-5xl text-[#CCFF00] tracking-wide">
            &ldquo;I build things that actually ship.&rdquo;
          </div>
        </div>

        {/* Role & Bio Blurb */}
        <p className="text-base sm:text-xl text-[#F8FAFC]/90 max-w-3xl font-body leading-relaxed">
          Full-stack developer and final-year CS student in Nigeria. Creator of{" "}
          <strong className="text-[#CCFF00]">Privora</strong> (encrypted data vault thesis),{" "}
          <strong className="text-[#2563EB]">Feelms</strong>, and{" "}
          <strong className="text-[#F8FAFC]">Editorial Muse</strong>. Also crafting event flyers, social graphics, and writing on faith, football, and film.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="font-mono font-bold text-sm bg-[#CCFF00] text-[#090A0F] px-6 py-3.5 rounded shadow-[5px_5px_0px_0px_#2563EB] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#2563EB] transition-all"
          >
            VIEW POSTER WALL &rarr;
          </a>

          <a
            href="https://github.com/preshdevops"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-bold text-sm bg-[#121620] text-[#F8FAFC] hover:text-[#CCFF00] px-6 py-3.5 rounded border border-rgba(248,250,252,0.2) hover:border-[#CCFF00] transition-colors"
          >
            GITHUB // @preshdevops
          </a>
        </div>
      </div>
    </section>
  );
}
