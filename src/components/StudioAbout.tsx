import React from "react";

export default function StudioAbout() {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-white/[0.08] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 space-y-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
            About &amp; Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F4F4F6] font-normal tracking-tight">
            Curious about systems. Grounded in reality.
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Biography */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#9DA1AA] leading-relaxed">
            <p>
              I am a Computer Science graduate from Osun State University, Nigeria, working at the intersection of product architecture, privacy engineering, and human utility.
            </p>
            <p>
              My journey into technology began not with an obsession over programming languages, but with a fascination for systems: how information moves, how communities coordinate, and where software either dignifies or degrades the people who use it.
            </p>
            <p>
              Over the course of my university studies and independent studio work, I gravitated toward hard technical constraints: zero-knowledge cryptographic models, client-side encryption (Privora), local-first databases, and low-bandwidth mobile environments. I believe that engineering is at its best when it solves genuine friction rather than creating new dependencies.
            </p>
            <p>
              Alongside engineering, my experiences with community initiatives like TSDI and OSPCN provided invaluable exposure to grassroots mobilization and communication dynamics. That work keeps my feet on the ground: it reminds me that software is not evaluated in an isolated terminal; it is tested in the daily lives of real human beings.
            </p>

            {/* Pull Quote */}
            <div className="pt-6 pb-2">
              <blockquote className="border-l-2 border-white/[0.2] pl-6 py-2">
                <p className="font-serif italic text-xl sm:text-2xl text-[#F4F4F6] font-normal leading-snug">
                  &ldquo;Build with intention. Ship with purpose.&rdquo;
                </p>
                <cite className="block font-mono text-xs text-[#646974] mt-2 uppercase tracking-wider not-italic">
                  — Operating Principle
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Sidecar: Systems & Focus Areas */}
          <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-white/[0.08] lg:pl-10">
            
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Core Focus Areas
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-[#121419] border border-white/[0.06] space-y-1">
                  <h4 className="font-mono text-xs text-[#F4F4F6] font-semibold">
                    Product Development &amp; Architecture
                  </h4>
                  <p className="text-xs text-[#9DA1AA] leading-relaxed">
                    Translating messy real-world problems into clear product scopes, data schemas, and resilient user flows.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#121419] border border-white/[0.06] space-y-1">
                  <h4 className="font-mono text-xs text-[#F4F4F6] font-semibold">
                    Privacy &amp; Security Engineering
                  </h4>
                  <p className="text-xs text-[#9DA1AA] leading-relaxed">
                    Zero-knowledge threat modeling, authenticated AES-256-GCM pipelines, and verifiable user data sovereignty.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#121419] border border-white/[0.06] space-y-1">
                  <h4 className="font-mono text-xs text-[#F4F4F6] font-semibold">
                    Mobile &amp; Distributed Systems
                  </h4>
                  <p className="text-xs text-[#9DA1AA] leading-relaxed">
                    Offline-first architectures, low-bandwidth caching, and robust state machines tailored for real device constraints.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#121419] border border-white/[0.06] space-y-1">
                  <h4 className="font-mono text-xs text-[#F4F4F6] font-semibold">
                    Technology for Development (Tech4Dev)
                  </h4>
                  <p className="text-xs text-[#9DA1AA] leading-relaxed">
                    Building software infrastructure that serves localized civil society, ministries, and community assemblies.
                  </p>
                </div>
              </div>
            </div>

            {/* Institutional Credentials */}
            <div className="space-y-3 pt-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Education &amp; Roots
              </h3>
              <div className="text-xs font-mono space-y-2 text-[#9DA1AA]">
                <div className="flex justify-between pb-1.5 border-b border-white/[0.04]">
                  <span>Institution:</span>
                  <span className="text-[#F4F4F6]">Osun State University</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-white/[0.04]">
                  <span>Degree:</span>
                  <span className="text-[#F4F4F6]">B.Sc. Computer Science</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-white/[0.04]">
                  <span>Location:</span>
                  <span className="text-[#F4F4F6]">Osun State, Nigeria</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
