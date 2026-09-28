"use client";

import React, { useState } from "react";

interface ProjectCaseStudy {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  status: string;
  role: string;
  timeline: string;
  problem: string;
  productDescription: string;
  whyBuilt: string;
  keyDecisions: {
    decision: string;
    rationale: string;
  }[];
  stack: string[];
  learnings?: string;
  architectureDetails?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectCaseStudy[] = [
  {
    id: "privora",
    name: "Privora",
    tagline: "Flagship Thesis // Privacy Platform",
    headline: "An end-user privacy platform designed to give people absolute visibility and mathematical control over their personal data.",
    status: "V1 Complete // Final-Year CS Thesis",
    role: "Sole Product Architect & Full-Stack Engineer",
    timeline: "2025 – 2026",
    problem:
      "Modern cloud storage operates on an illusion of privacy: providers encrypt files at rest using keys they own and control. If a database is breached, subpoenaed, or inspected internally, user documents, financial records, and medical files are exposed in plaintext. Existing zero-knowledge software is either excessively academic or completely unusable for everyday people.",
    productDescription:
      "Privora is a zero-knowledge data vault that executes client-side cryptographic encapsulation directly in the user's browser before any packet is transmitted across the wire. Decryption keys are derived exclusively in memory from user master passphrases and are mathematically inaccessible to the backend.",
    whyBuilt:
      "Conceived as a final-year Computer Science thesis at Osun State University to prove that rigorous, military-grade cryptographic protocols (AES-256-GCM) can coexist with an intuitive, consumer-grade user experience while fulfilling Nigerian Data Protection Regulation (NDPR) and GDPR statutory mandates.",
    keyDecisions: [
      {
        decision: "Client-Side Web Crypto API over Server-Side KMS",
        rationale: "Ensures the host server remains an untrusted dumb pipe. Even a total compromise of our PostgreSQL cluster leaks zero plaintext user data.",
      },
      {
        decision: "PBKDF2 Key Derivation with 100,000 Iterations & Unique Salt",
        rationale: "Hardens the authentication and key generation pipeline against offline GPU/ASIC rainbow table dictionary attacks.",
      },
      {
        decision: "Strict Metadata Segregation & Zero-Knowledge Schema",
        rationale: "Filenames, timestamps, and payload byte sizes are partitioned and authenticated so adversaries cannot infer user activity via traffic analysis.",
      },
      {
        decision: "Accessible Key Recovery Protocol",
        rationale: "Built a cryptographic paper key recovery mechanism inspired by Bitcoin BIP-39 mnemonic seeds, preventing irreversible lockout.",
      },
    ],
    architectureDetails: [
      "Client browser performs PBKDF2-HMAC-SHA256 stretching on the user's passphrase with a client-held salt.",
      "A 256-bit AES-GCM master key is generated purely in volatile memory (never written to LocalStorage or session cookies).",
      "Files are chunked and encrypted with unique 96-bit initialization vectors (IVs) and 128-bit authentication tags to prevent replay attacks.",
      "The Django REST backend accepts only base64 ciphertext blocks, authenticating requests via stateless cryptographic JWT tokens.",
      "Fully compliant with NDPR and GDPR requirements for verifiable zero-access processing.",
    ],
    learnings:
      "Building Privora demonstrated that privacy is fundamentally an architectural commitment, not a post-hoc compliance checkbox. It taught me how memory management in the browser interacts with garbage collection when handling large byte arrays, and how to design security UX that guides users without condescending to them.",
    stack: ["Web Crypto API", "React 19", "TypeScript", "Django REST Framework", "PostgreSQL", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com/preshdevops/privora",
    liveUrl: "https://github.com/preshdevops/privora",
  },
  {
    id: "makarios",
    name: "Makarios",
    tagline: "Community Infrastructure // Media Distribution",
    headline: "A distraction-free digital ecosystem for distributed assemblies to organize media archives, member care, and gatherings without algorithmic noise.",
    status: "Private Beta // Active Pilot",
    role: "Product Designer & Full-Stack Developer",
    timeline: "2025 – Present",
    problem:
      "Faith assemblies and local civic communities are increasingly forced to coordinate on ad-saturated social networks and fragmented WhatsApp groups. In those environments, deep teaching archives are lost, pastoral communication is drowned in spam, and member attention is commodified by engagement algorithms.",
    productDescription:
      "Makarios replaces algorithmic feeds with a clean, dignified home for community life: high-fidelity audio sermon streaming optimized for volatile mobile networks, an indexed scriptural teaching library, structured member care channels, and private assembly announcements.",
    whyBuilt:
      "To build intentional, respectful technology for real communities that gather in physical rooms. The goal was to preserve institutional knowledge and foster genuine human connection without turning users into ad inventory.",
    keyDecisions: [
      {
        decision: "Bandwidth-Adaptive Audio Streaming Engine",
        rationale: "Engineered a low-bitrate streaming pipeline with progressive caching to ensure seamless audio playback even on 3G mobile connections in sub-Saharan Africa.",
      },
      {
        decision: "Calm, Notification-Sparing Architecture",
        rationale: "Deliberately eliminated gamification badges, unread message badges, and algorithmic ranking to protect users' focus and mental clarity.",
      },
      {
        decision: "Granular Role & Ministry Hierarchy",
        rationale: "Modeled a flexible permission matrix supporting pastoral leadership, ministry leads, audio technicians, and community members with clean separation of concerns.",
      },
    ],
    architectureDetails: [
      "Custom audio player state machine with background playback and chapter indexing.",
      "RESTful API backend handling media distribution with CDN asset caching.",
      "Modular database schema supporting multi-tenant assemblies with isolated member directories.",
    ],
    learnings:
      "Designing for real community leaders highlighted the difference between consumer vanity metrics and genuine software utility. Real users don't care about clever tech stacks; they care whether an audio sermon streams reliably during their morning commute.",
    stack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS S3"],
    githubUrl: "https://github.com/preshdevops",
  },
  {
    id: "dabar",
    name: "Dabar",
    tagline: "Linguistic Workspace // Contemplative Study",
    headline: "A focused, typography-first textual workspace engineered for root-word etymology, cross-references, and deep contemplative reading.",
    status: "Alpha // Studio Exploration",
    role: "Creator & Systems Engineer",
    timeline: "2026",
    problem:
      "Modern text study and spiritual reading applications are bloated with gamified daily streaks, interstitial social prompts, and visual clutter that break contemplative focus. Serious readers who want to study root words and semantic connections are stuck between clunky 1990s desktop software and distraction-ridden mobile apps.",
    productDescription:
      "Dabar strips away interface friction to provide a pristine, book-grade reading surface. Clicking any phrase reveals instant morphological parsing, Hebrew and Greek lemma origins, and textual cross-references with zero latency.",
    whyBuilt:
      "Created out of a deep personal conviction that sacred and philosophical texts deserve digital tools built with reverent restraint, exquisite typography, and immediate local responsiveness.",
    keyDecisions: [
      {
        decision: "Client-Side WebAssembly SQLite Lexicon",
        rationale: "Compiles the entire concordance and lexical root database into an in-browser SQLite WASM engine. Queries execute in under 8ms with zero network requests and full offline capability.",
      },
      {
        decision: "Strictly Typographic Hierarchy",
        rationale: "Engineered around classical book proportions, generous margins, and balanced leading to support uninterrupted multi-hour reading sessions.",
      },
      {
        decision: "Zero-Notification & Zero-Streak Commitment",
        rationale: "Rejects dark UX patterns. The tool never sends an unprompted push notification, never tracks daily usage streaks, and never evaluates reading speed.",
      },
    ],
    architectureDetails: [
      "Embedded SQLite WASM database initialized via Web Workers to keep the main thread at 60 FPS.",
      "Optimized indexed FTS5 full-text search across 31,000+ textual verses with instant phrase matching.",
      "Local-first state persistence using IndexedDB for private notes and marginalia.",
    ],
    learnings:
      "Building Dabar reinforced my belief in local-first software. Removing server round-trips for reference data transforms an application from feeling like a remote webpage to feeling like an authentic physical instrument.",
    stack: ["TypeScript", "Next.js", "WebAssembly SQLite", "Tailwind CSS", "IndexedDB"],
    githubUrl: "https://github.com/preshdevops",
  },
];

export default function SelectedWork() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.id === activeModalId);

  return (
    <section id="work" className="py-24 md:py-36 border-b border-white/[0.08] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 space-y-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
            Selected Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F4F4F6] font-normal tracking-tight">
            Products built with architectural intention.
          </h2>
          <p className="text-base sm:text-lg text-[#9DA1AA] leading-relaxed">
            Case studies representing how I think about user problems, privacy models, and resilient system design.
          </p>
        </div>

        {/* Product Case Studies Grid */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const isFlagship = project.id === "privora";

            return (
              <article
                key={project.id}
                className={`relative rounded-xl border transition-all duration-300 ${
                  isFlagship
                    ? "bg-[#111318] border-white/[0.14] p-8 sm:p-12 shadow-xl"
                    : "bg-[#0E1014] border-white/[0.08] hover:border-white/[0.14] p-8 sm:p-10"
                }`}
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#9DA1AA] tracking-wider uppercase">
                      0{index + 1} // {project.tagline}
                    </span>
                    {isFlagship && (
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-black font-mono text-[10px] font-semibold tracking-wider uppercase">
                        FLAGSHIP THESIS
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#646974]">{project.timeline}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/[0.2]" />
                    <span className="font-mono text-xs text-[#9DA1AA]">{project.status}</span>
                  </div>
                </div>

                {/* Content Layout */}
                <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Left Column: Product Narrative */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F4F6] font-medium tracking-tight mb-3">
                        {project.name}
                      </h3>
                      <p className="font-serif italic text-lg sm:text-xl text-[#D0D4DC] leading-snug">
                        {project.headline}
                      </p>
                    </div>

                    {/* The Problem & Product Overview */}
                    <div className="space-y-4 text-sm sm:text-base text-[#9DA1AA] leading-relaxed">
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-[#646974] mb-1">
                          The Problem
                        </h4>
                        <p>{project.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-[#646974] mb-1">
                          What It Does
                        </h4>
                        <p>{project.productDescription}</p>
                      </div>
                    </div>

                    {/* Role & Intent */}
                    <div className="pt-2 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-mono text-[#9DA1AA]">
                      <div>
                        <span className="text-[#646974]">Role: </span>
                        <span className="text-[#F4F4F6]">{project.role}</span>
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setActiveModalId(project.id)}
                        className="px-5 py-2.5 rounded-lg bg-white text-black font-medium text-xs font-mono tracking-wider hover:bg-[#E4E4E7] transition-all flex items-center gap-2"
                      >
                        <span>VIEW CASE STUDY</span>
                        <span>→</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg border border-white/[0.12] text-xs font-mono tracking-wider text-[#9DA1AA] hover:text-white hover:border-white transition-all flex items-center gap-2"
                        >
                          <span>REPOSITORY</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Key Architectural Decisions & Stack */}
                  <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#646974] mb-4">
                        Key Architectural Decisions
                      </h4>
                      <div className="space-y-4">
                        {project.keyDecisions.slice(0, isFlagship ? 3 : 2).map((item, dIdx) => (
                          <div key={dIdx} className="space-y-1">
                            <h5 className="text-xs font-mono text-[#F4F4F6] font-medium">
                              • {item.decision}
                            </h5>
                            <p className="text-xs text-[#9DA1AA] leading-relaxed pl-3">
                              {item.rationale}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stack Revealed Underneath */}
                    <div className="pt-4 border-t border-white/[0.06]">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#646974] mb-3">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#181A20] border border-white/[0.06] text-xs font-mono text-[#9DA1AA]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl my-8 rounded-xl bg-[#0F1116] border border-white/[0.14] p-6 sm:p-10 shadow-2xl text-[#F4F4F6] space-y-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#9DA1AA]">
                  Architectural Case Study
                </span>
                <h3 className="font-serif text-3xl font-medium text-[#F4F4F6] mt-1">
                  {activeProject.name}
                </h3>
                <p className="font-serif italic text-base text-[#D0D4DC] mt-1">
                  {activeProject.headline}
                </p>
              </div>
              <button
                onClick={() => setActiveModalId(null)}
                aria-label="Close modal"
                className="p-2 text-[#9DA1AA] hover:text-white rounded-lg border border-white/[0.08] hover:border-white/[0.2] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Why It Was Built & Problem Context */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                The Purpose &amp; Motivation
              </h4>
              <p className="text-sm sm:text-base text-[#9DA1AA] leading-relaxed">
                {activeProject.whyBuilt}
              </p>
            </div>

            {/* Architectural Specifications */}
            {activeProject.architectureDetails && (
              <div className="space-y-4 p-5 rounded-lg bg-[#14161D] border border-white/[0.06]">
                <h4 className="font-mono text-xs uppercase tracking-widest text-white">
                  System Architecture &amp; Security Pipeline
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9DA1AA] font-mono list-disc pl-4 leading-relaxed">
                  {activeProject.architectureDetails.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Decisions */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                Product &amp; Technical Tradeoffs
              </h4>
              <div className="space-y-3">
                {activeProject.keyDecisions.map((dec, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#12141A] border border-white/[0.04] space-y-1">
                    <span className="text-xs font-mono text-[#F4F4F6] font-semibold block">
                      {dec.decision}
                    </span>
                    <p className="text-xs text-[#9DA1AA] leading-relaxed">
                      {dec.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learnings */}
            {activeProject.learnings && (
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#646974]">
                  What Was Learned
                </h4>
                <p className="text-sm text-[#9DA1AA] leading-relaxed italic font-serif">
                  &ldquo;{activeProject.learnings}&rdquo;
                </p>
              </div>
            )}

            {/* Footer Metadata */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-[#181A20] text-[#9DA1AA]">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveModalId(null)}
                className="px-5 py-2 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                CLOSE CASE STUDY
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
