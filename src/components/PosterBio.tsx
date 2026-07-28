"use client";

const SKILLS = [
  "React",
  "Django",
  "Node.js",
  "PostgreSQL",
  "React Native",
  "Tailwind",
  "Python",
  "JavaScript",
  "Git",
  "Figma",
];

export default function PosterBio() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-12 space-y-10"
    >
      <div className="border-b-4 border-[#2563EB] pb-4">
        <div className="font-mono text-xs text-[#CCFF00] font-bold uppercase tracking-widest mb-1">
          BIOGRAPHY & GRAPHIC DESIGN
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#F8FAFC]">
          The story so far.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Story Text Column */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#F8FAFC]/90 leading-relaxed font-body">
          <p>
            I&apos;m Precious — a full-stack developer and final-year CS student at Osun State University, Nigeria. I&apos;ve shipped encrypted web apps, mobile apps still in the oven, and more side projects than I care to admit.
          </p>

          <p>
            As a working graphic designer, I craft bold event flyers and social graphics for a local ministry and a peace club — applying poster design principles, layout hierarchy, and visual energy directly to my frontend software work.
          </p>

          <p>
            Outside the code editor and Figma canvas, I write about football, film, and faith on my journal, and occasionally beat people at eFootball.
          </p>

          {/* Genuine Poster Pull-Quote */}
          <blockquote className="italic font-heading font-bold text-2xl sm:text-3xl text-[#CCFF00] bg-[#121620] border-l-4 border-l-[#2563EB] p-6 rounded-r-xl my-6 shadow-[4px_4px_0px_0px_#2563EB]">
            &ldquo;Build with intention. Ship with purpose.&rdquo;
          </blockquote>
        </div>

        {/* Stack & Tools Poster Panel */}
        <div className="lg:col-span-5 poster-card p-6 sm:p-8 rounded-xl space-y-6">
          <div className="flex items-center justify-between border-b border-[rgba(248,250,252,0.1)] pb-3">
            <h3 className="font-heading font-bold text-2xl text-[#F8FAFC]">
              Stack &amp; Tools
            </h3>
            <span className="poster-stamp">CORE STACK</span>
          </div>

          <p className="text-xs font-mono text-[#F8FAFC]/70">
            Languages, frameworks, database systems, and design software used across production web and mobile apps.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs font-bold text-[#F8FAFC] bg-[#090A0F] border border-[#2563EB] hover:border-[#CCFF00] hover:text-[#CCFF00] px-3.5 py-2 rounded-lg transition-colors shadow-[2px_2px_0px_0px_#2563EB]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
