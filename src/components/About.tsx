"use client";

import RevealOnScroll from "./RevealOnScroll";

const SKILLS = [
  "React",
  "Django",
  "Node.js",
  "PostgreSQL",
  "React Native",
  "Tailwind",
  "Python",
  "JavaScript",
  "TypeScript",
  "Git",
  "Figma",
  "VS Code",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Column - Story & Quote */}
        <div className="flex flex-col justify-center">
          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C8A96E]"></span>
              <span className="font-mono text-xs text-[#C8A96E] uppercase tracking-[0.15em]">
                About
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h2 className="font-heading text-[clamp(2.25rem,5vw,3rem)] font-bold text-[#E8E4DC] leading-tight">
              The story so far.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="text-[#8A8880] text-base leading-relaxed mt-6">
              I'm Precious. I build for the web and mobile, study CS at Osun State
              University, and do media work for a local ministry and peace club.
              Faith is the foundation — the rest is craft.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="glass p-6 rounded-xl border-l-2 border-l-[#C8A96E] mt-8 shadow-sm">
              <p className="font-heading italic text-lg text-[#C8A96E] leading-relaxed">
                "The potter has come."
              </p>
              <p className="font-mono text-xs text-[#8A8880] mt-2">
                — What Olonade means
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column - Stack & Tools */}
        <div className="flex flex-col justify-center">
          <RevealOnScroll delay={0.2}>
            <h3 className="font-heading text-lg font-bold text-[#E8E4DC] mb-6 tracking-wide">
              Stack & Tools
            </h3>
          </RevealOnScroll>

          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, idx) => (
              <RevealOnScroll key={skill} delay={0.3 + idx * 0.05}>
                <div className="glass glass-hover font-mono text-sm text-[#E8E4DC] px-4 py-2.5 rounded-xl cursor-default select-none shadow-sm hover:scale-[1.02]">
                  {skill}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
