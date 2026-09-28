"use client";

import React, { useState } from "react";

interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stackText: string;
  stackList: string[];
  role: string;
  status: string;
  whyBuilt: string;
  howItWorks: string;
  learnings: string;
  githubUrl?: string;
}

const projects: ProjectItem[] = [
  {
    id: "privora",
    name: "Privora",
    tagline: "Final-year university project",
    description: "A privacy tool for keeping your personal files secure.",
    stackText: "React · Django · PostgreSQL",
    stackList: ["React", "Django", "PostgreSQL", "Web Crypto API"],
    role: "Developer",
    status: "Completed (Final-year thesis)",
    whyBuilt:
      "I built Privora for my final-year Computer Science project at Osun State University. I wanted to see if I could build a tool that gave everyday users real privacy without being confusing to use.",
    howItWorks:
      "Instead of sending your files to a server and hoping the provider keeps them safe, Privora encrypts files directly in your web browser before they are uploaded. Your master key stays on your device, meaning the server only stores encrypted data and never sees your actual files.",
    learnings:
      "Building this taught me how to work with the Web Crypto API, handle binary file streams in JavaScript, design clean REST APIs with Django, and create a security tool that feels friendly rather than intimidating.",
    githubUrl: "https://github.com/preshdevops/privora",
  },
  {
    id: "makarios",
    name: "Makarios",
    tagline: "Mobile application",
    description: "A mobile app for daily affirmations and personal growth.",
    stackText: "Kotlin · Android",
    stackList: ["Kotlin", "Android", "Jetpack Compose"],
    role: "Developer",
    status: "In progress",
    whyBuilt:
      "I wanted to build an Android app with a calm, peaceful experience where people could start their morning with positive affirmations, reflect, and build constructive daily habits without ads or notification spam.",
    howItWorks:
      "Makarios provides a simple daily feed of affirmations, bookmarking, and personal journaling. Everything is stored locally on the device for fast access and total privacy.",
    learnings:
      "Working on Makarios has helped me dive deeper into modern Android development with Kotlin and Jetpack Compose, understanding mobile lifecycle states, and designing clean interfaces for handheld devices.",
    githubUrl: "https://github.com/preshdevops",
  },
  {
    id: "dabar",
    name: "Dabar",
    tagline: "Exploration & prototype",
    description: "A project I'm exploring around better ways to read and study digital content.",
    stackText: "Rust · TypeScript · Next.js",
    stackList: ["Rust", "TypeScript", "Next.js"],
    role: "Builder",
    status: "Exploration",
    whyBuilt:
      "Most digital reading apps are crowded with notifications, popups, and clutter. I wanted to explore what a distraction-free, typography-focused reading tool could look like for studying long texts.",
    howItWorks:
      "A fast, minimal workspace focused on typography, smooth navigation, and instant word lookups, making reading on a screen feel as focused and natural as reading a book.",
    learnings:
      "This project has been my sandbox for learning Rust for text processing, exploring WebAssembly, and experimenting with clean typographic layouts on the web.",
    githubUrl: "https://github.com/preshdevops",
  },
];

export default function SelectedWork() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.id === activeProjectId);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-white/[0.08] scroll-mt-20">
      {/* Anchor alias for projects */}
      <span id="projects" className="sr-only" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
            Selected Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F6] font-normal tracking-tight">
            Things I&rsquo;ve built
          </h2>
          <p className="text-base text-[#9DA1AA] max-w-xl">
            A few projects I&rsquo;ve designed and built recently, from university research to personal side projects.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="py-10 group transition-colors -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                
                {/* Number & Tag */}
                <div className="lg:col-span-3 font-mono text-xs text-[#646974] space-y-1">
                  <div>0{index + 1}</div>
                  <div className="text-[#9DA1AA]">{project.tagline}</div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F4F6] font-medium tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-base text-[#D0D4DC] leading-relaxed">
                    {project.description}
                  </p>
                  <p className="font-mono text-xs text-[#9DA1AA]">
                    {project.stackText}
                  </p>
                </div>

                {/* Action Link */}
                <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                  <button
                    onClick={() => setActiveProjectId(project.id)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#F4F4F6] hover:text-white group-hover:underline underline-offset-4 transition-all"
                  >
                    <span>View project</span>
                    <span className="font-mono text-xs group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl my-8 rounded-xl bg-[#0F1116] border border-white/[0.14] p-6 sm:p-10 shadow-2xl text-[#F4F4F6] space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-xs text-[#9DA1AA] uppercase tracking-wider">
                  {activeProject.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F4F4F6] mt-1">
                  {activeProject.name}
                </h3>
                <p className="text-sm text-[#D0D4DC] mt-1">
                  {activeProject.description}
                </p>
              </div>
              <button
                onClick={() => setActiveProjectId(null)}
                aria-label="Close project details"
                className="p-2 text-[#9DA1AA] hover:text-white rounded-lg border border-white/[0.08] hover:border-white/[0.2] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Why I Built It */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#646974]">
                Why I built it
              </h4>
              <p className="text-sm sm:text-base text-[#D0D4DC] leading-relaxed">
                {activeProject.whyBuilt}
              </p>
            </div>

            {/* How It Works */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#646974]">
                How it works
              </h4>
              <p className="text-sm sm:text-base text-[#D0D4DC] leading-relaxed">
                {activeProject.howItWorks}
              </p>
            </div>

            {/* What I Learned */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#646974]">
                What I learned
              </h4>
              <p className="text-sm text-[#9DA1AA] leading-relaxed">
                {activeProject.learnings}
              </p>
            </div>

            {/* Stack and Meta */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {activeProject.stackList.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-[#181A20] text-[#9DA1AA]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-white/[0.14] text-xs font-mono text-white hover:border-white transition-colors"
                  >
                    GITHUB ↗
                  </a>
                )}
                <button
                  onClick={() => setActiveProjectId(null)}
                  className="px-4 py-2 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
