"use client";

import React, { useState } from "react";

interface ProjectItem {
  id: string;
  category: "thesis" | "mobile" | "exploration";
  name: string;
  tagline: string;
  stampText: string;
  stampColor: string;
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
    category: "thesis",
    name: "Privora",
    tagline: "Final-year university project",
    stampText: "SHIPPED v1.0 · THESIS",
    stampColor: "border-amber-500/30 text-amber-400 bg-amber-500/[0.06]",
    description: "A privacy tool for keeping your personal files secure.",
    stackText: "React · Django · PostgreSQL",
    stackList: ["React", "Django", "PostgreSQL", "Web Crypto API", "AES-GCM"],
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
    category: "mobile",
    name: "Makarios",
    tagline: "Mobile application",
    stampText: "IN ACTIVE BUILD · ANDROID",
    stampColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/[0.06]",
    description: "A mobile app for daily affirmations and personal growth.",
    stackText: "Kotlin · Android",
    stackList: ["Kotlin", "Android", "Jetpack Compose", "Room DB", "Clean Architecture"],
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
    category: "exploration",
    name: "Dabar",
    tagline: "Exploration & prototype",
    stampText: "RESEARCH LAB · RUST",
    stampColor: "border-sky-500/30 text-sky-400 bg-sky-500/[0.06]",
    description: "A project I'm exploring around better ways to read and study digital content.",
    stackText: "Rust · TypeScript · Next.js",
    stackList: ["Rust", "TypeScript", "Next.js", "WebAssembly", "Tailwind CSS"],
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

type FilterType = "all" | "thesis" | "mobile" | "exploration";
type ModalTab = "why" | "how" | "lessons";

export default function SelectedWork() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<ModalTab>("why");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const activeProject = projects.find((p) => p.id === activeProjectId);

  const openModal = (id: string) => {
    setActiveProjectId(id);
    setActiveModalTab("why");
  };

  return (
    <section id="work" className="py-20 md:py-28 border-b border-white/[0.08] scroll-mt-20">
      {/* Anchor alias for projects */}
      <span id="projects" className="sr-only" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA]">
                Selected Work
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-[#9DA1AA]">
                3 Projects
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F6] font-normal tracking-tight">
              Things I&rsquo;ve built
            </h2>
            <p className="text-base text-[#9DA1AA] max-w-xl">
              A few projects I&rsquo;ve designed and built recently, from university research to personal side projects.
            </p>
          </div>

          {/* Playful Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setFilter("all")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-white text-black border-white font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setFilter("thesis")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "thesis"
                  ? "bg-amber-400 text-black border-amber-400 font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              Thesis (1)
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "mobile"
                  ? "bg-emerald-400 text-black border-emerald-400 font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              Mobile (1)
            </button>
            <button
              onClick={() => setFilter("exploration")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "exploration"
                  ? "bg-sky-400 text-black border-sky-400 font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              Exploration (1)
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {filteredProjects.map((project, index) => {
            const displayIndex = projects.findIndex((p) => p.id === project.id) + 1;
            const indexStr = displayIndex < 10 ? `0${displayIndex}` : `${displayIndex}`;

            return (
              <article
                key={project.id}
                className="py-10 group transition-all duration-200 -mx-4 px-4 sm:mx-0 sm:px-0 hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  
                  {/* Number & Tag */}
                  <div className="lg:col-span-3 font-mono text-xs text-[#646974] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{indexStr}</span>
                      <span className="text-[#646974]">/ 03</span>
                    </div>
                    <div className="text-[#9DA1AA]">{project.tagline}</div>
                    
                    {/* Playful Stamp Badge */}
                    <div className="pt-1">
                      <span
                        className={`inline-block text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border ${project.stampColor}`}
                      >
                        {project.stampText}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F4F6] font-medium tracking-tight group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-base text-[#D0D4DC] leading-relaxed">
                      {project.description}
                    </p>
                    <p className="font-mono text-xs text-[#9DA1AA]">
                      {project.stackText}
                    </p>

                    {/* Tech Badges */}
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {project.stackList.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#16181F] border border-white/[0.06] text-[#9DA1AA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <button
                      onClick={() => openModal(project.id)}
                      className="tactile-press inline-flex items-center gap-2 text-sm font-medium text-[#F4F4F6] hover:text-white group-hover:underline underline-offset-4 transition-all cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/[0.06]"
                    >
                      <span>View project</span>
                      <span className="font-mono text-xs group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal / Blueprint Inspector */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl my-8 rounded-2xl bg-[#0F1116] border border-white/[0.14] p-6 sm:p-10 shadow-2xl text-[#F4F4F6] space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-white/[0.08]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#9DA1AA] uppercase tracking-wider">
                    {activeProject.tagline}
                  </span>
                  <span
                    className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border ${activeProject.stampColor}`}
                  >
                    {activeProject.stampText}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F4F4F6] mt-1">
                  {activeProject.name}
                </h3>
                <p className="text-sm text-[#D0D4DC]">
                  {activeProject.description}
                </p>
              </div>

              <button
                onClick={() => setActiveProjectId(null)}
                aria-label="Close project details"
                className="tactile-press p-2 text-[#9DA1AA] hover:text-white rounded-lg border border-white/[0.08] hover:border-white/[0.2] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Blueprint Tabs */}
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3 font-mono text-xs">
              <button
                onClick={() => setActiveModalTab("why")}
                className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeModalTab === "why"
                    ? "bg-white text-black border-white font-semibold"
                    : "text-[#9DA1AA] border-transparent hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Why I built it
              </button>
              <button
                onClick={() => setActiveModalTab("how")}
                className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeModalTab === "how"
                    ? "bg-white text-black border-white font-semibold"
                    : "text-[#9DA1AA] border-transparent hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                How it works
              </button>
              <button
                onClick={() => setActiveModalTab("lessons")}
                className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeModalTab === "lessons"
                    ? "bg-white text-black border-white font-semibold"
                    : "text-[#9DA1AA] border-transparent hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                What I learned
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[140px] space-y-4">
              {activeModalTab === "why" && (
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#646974]">
                    Why I built it
                  </h4>
                  <p className="text-sm sm:text-base text-[#D0D4DC] leading-relaxed">
                    {activeProject.whyBuilt}
                  </p>
                </div>
              )}

              {activeModalTab === "how" && (
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#646974]">
                    How it works
                  </h4>
                  <p className="text-sm sm:text-base text-[#D0D4DC] leading-relaxed">
                    {activeProject.howItWorks}
                  </p>
                </div>
              )}

              {activeModalTab === "lessons" && (
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#646974]">
                    What I learned
                  </h4>
                  <p className="text-sm sm:text-base text-[#9DA1AA] leading-relaxed">
                    {activeProject.learnings}
                  </p>
                </div>
              )}
            </div>

            {/* Tech Stack Details */}
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#646974] block mb-2">
                Technologies used
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.stackList.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#181A20] text-[#9DA1AA] border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tactile-press px-4 py-2 rounded-lg border border-white/[0.14] text-xs font-mono text-white hover:border-white hover:bg-white/[0.06] transition-all inline-block"
                  >
                    GITHUB ↗
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveProjectId(null)}
                className="tactile-press px-5 py-2 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
