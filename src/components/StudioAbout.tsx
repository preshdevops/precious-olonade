import React from "react";

export default function StudioAbout() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-white/[0.08] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
            About
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F6] font-normal tracking-tight">
            A bit about me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#9DA1AA] leading-relaxed">
            <p>
              I recently graduated with a degree in Computer Science from Osun State University in Nigeria.
            </p>
            <p>
              I love the process of figuring out problems and building products around them. Whether it&rsquo;s writing backend logic in Django, building an Android app with Kotlin, or learning Rust to understand lower-level systems, I enjoy getting my hands dirty and turning concepts into things people can actually use.
            </p>
            <p>
              During university, I worked on projects ranging from client-side file encryption (Privora) to mobile apps for personal growth. I also spent time volunteering with organizations like TSDI and OSPCN, which gave me a deep appreciation for how everyday people and local communities interact with technology.
            </p>
            <p>
              Right now, I&rsquo;m focused on improving my product craft, learning modern mobile and backend development, and finding teams where I can build useful software alongside people who care about quality.
            </p>

            {/* Operating Line */}
            <div className="pt-4 pb-2">
              <blockquote className="border-l-2 border-white/[0.2] pl-5 py-1">
                <p className="font-serif italic text-lg sm:text-xl text-[#F4F4F6] font-normal leading-snug">
                  &ldquo;Build with intention. Ship with purpose.&rdquo;
                </p>
                <cite className="block font-mono text-xs text-[#646974] mt-2 not-italic">
                  The line I live by
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Quick Snapshot / Facts */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-10">
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                At a glance
              </h3>

              <div className="space-y-3 text-xs font-mono text-[#9DA1AA]">
                <div className="p-3.5 rounded-lg bg-[#111318] border border-white/[0.06] space-y-1">
                  <span className="text-[#646974] block">Background</span>
                  <span className="text-[#F4F4F6] text-sm">Computer Science graduate, Osun State University</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#111318] border border-white/[0.06] space-y-1">
                  <span className="text-[#646974] block">Location</span>
                  <span className="text-[#F4F4F6] text-sm">Osun State, Nigeria</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#111318] border border-white/[0.06] space-y-1">
                  <span className="text-[#646974] block">What I&rsquo;m looking for</span>
                  <span className="text-[#F4F4F6] text-sm">Junior / early-career product engineering and software developer roles</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#111318] border border-white/[0.06] space-y-1">
                  <span className="text-[#646974] block">Outside of code</span>
                  <span className="text-[#F4F4F6] text-sm">Writing on faith, football (Man United), and film</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
