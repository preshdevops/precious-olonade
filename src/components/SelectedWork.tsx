"use client";

import React, { useState } from "react";

interface ProjectItem {
  id: string;
  category: "desktop" | "web" | "thesis" | "mobile";
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
  liveUrl?: string;
}

const projects: ProjectItem[] = [
  {
    id: "dabar",
    category: "desktop",
    name: "Dabaar",
    tagline: "Desktop application",
    description: "A desktop app built with Rust and React that turns long videos into short-form clips.",
    stackText: "Rust · React",
    stackList: ["Rust", "React", "Desktop"],
    role: "Builder",
    status: "Actively built",
    whyBuilt:
      "I wanted a dedicated desktop app to take long video recordings and turn them into short-form clips quickly, processing video locally on the machine.",
    howItWorks:
      "A native desktop application that takes long video inputs, processes key segments locally, and outputs formatted short clips ready to share.",
    learnings:
      "Building desktop software with Rust for native performance and pairing it with a clean React interface.",
    githubUrl: "https://github.com/preshdevops/dabar",
  },
  {
    id: "editorial-muse",
    category: "web",
    name: "editorial-muse",
    tagline: "Letter website",
    description: "A letter website.",
    stackText: "HTML · CSS",
    stackList: ["HTML", "CSS"],
    role: "Developer & Designer",
    status: "Shipped",
    whyBuilt:
      "Built as an editorial platform for reading and publishing letters with a calm, typography-first layout.",
    howItWorks:
      "Clean semantic HTML structure with careful typographic hierarchy and distraction-free presentation.",
    learnings:
      "Structuring responsive, accessible editorial layouts with pure web standards.",
    githubUrl: "https://github.com/preshdevops/editorial-muse",
    liveUrl: "https://editorial-muse.pxxl.click",
  },
  {
    id: "curious-bright",
    category: "web",
    name: "Curious Bright",
    tagline: "Collaborative project",
    description: "Frontend developer for Curious Bright, built in collaboration with a partner.",
    stackText: "Frontend",
    stackList: ["HTML", "CSS", "JavaScript"],
    role: "Frontend developer",
    status: "Completed",
    whyBuilt:
      "Built as a collaborative project, creating a responsive web frontend to present ideas and content clearly.",
    howItWorks:
      "Developed the responsive interface, page layouts, and component structure across devices.",
    learnings:
      "Working in close collaboration with another builder and translating shared concepts into clean frontend code.",
  },
  {
    id: "privora",
    category: "thesis",
    name: "Privora",
    tagline: "Final-year university project",
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
    description: "A mobile app for daily affirmations and personal growth.",
    stackText: "Kotlin · Android",
    stackList: ["Kotlin", "Android", "Jetpack Compose", "Room DB", "Clean Architecture"],
    role: "Developer",
    status: "In active build",
    whyBuilt:
      "I wanted to build an Android app with a calm, peaceful experience where people could start their morning with positive affirmations, reflect, and build constructive daily habits.",
    howItWorks:
      "Makarios provides a simple daily feed of affirmations, bookmarking, and personal journaling. Everything is stored locally on the device for fast access and privacy.",
    learnings:
      "Working on Makarios has helped me dive deeper into modern Android development with Kotlin and Jetpack Compose, understanding mobile lifecycle states, and designing clean interfaces for handheld devices.",
    githubUrl: "https://github.com/preshdevops",
  },
];

type FilterType = "all" | "web" | "desktop" | "mobile" | "thesis";
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
              <span className="text-xs font-mono text-[#646974]">
                (5 Projects)
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F6] font-normal tracking-tight">
              Things I&rsquo;ve built
            </h2>
            <p className="text-base text-[#9DA1AA] max-w-xl">
              Five projects I&rsquo;ve designed, built, and contributed to recently, from university research to collaborations and personal prototypes.
            </p>
          </div>

          {/* Monochrome Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setFilter("all")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-white text-black border-white font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              All (5)
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "web"
                  ? "bg-white text-black border-white font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              Web (2)
            </button>
            <button
              onClick={() => setFilter("desktop")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "desktop"
                  ? "bg-white text-black border-white font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              Desktop (1)
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "mobile"
                  ? "bg-white text-black border-white font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              Mobile (1)
            </button>
            <button
              onClick={() => setFilter("thesis")}
              className={`tactile-press px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filter === "thesis"
                  ? "bg-white text-black border-white font-semibold"
                  : "bg-[#13151A] text-[#9DA1AA] border-white/[0.1] hover:border-white/[0.25] hover:text-white"
              }`}
            >
              Thesis (1)
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {filteredProjects.map((project) => {
            const displayIndex = projects.findIndex((p) => p.id === project.id) + 1;
            const indexStr = displayIndex < 10 ? `0${displayIndex}` : `${displayIndex}`;

            return (
              <article
                key={project.id}
                className="py-10 group transition-all duration-200 -mx-4 px-4 sm:mx-0 sm:px-0 hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  
                  {/* Number & Tagline */}
                  <div className="lg:col-span-3 font-mono text-xs text-[#646974] space-y-1">
                    <div>
                      <span className="text-white font-medium">{indexStr}</span>
                    </div>
                    <div className="text-[#9DA1AA]">{project.tagline}</div>
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

                  {/* Action Links */}
                  <div className="lg:col-span-3 flex flex-wrap lg:justify-end items-center gap-2 pt-2 lg:pt-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tactile-press px-2.5 py-1 rounded-md border border-white/[0.1] hover:border-white/[0.3] text-xs font-mono text-[#9DA1AA] hover:text-white transition-colors"
                        aria-label={`${project.name} repository`}
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tactile-press px-2.5 py-1 rounded-md border border-white/[0.1] hover:border-white/[0.3] text-xs font-mono text-[#9DA1AA] hover:text-white transition-colors"
                        aria-label={`${project.name} live site`}
                      >
                        Live ↗
                      </a>
                    )}
                    <button
                      onClick={() => openModal(project.id)}
                      className="tactile-press inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#F4F4F6] hover:text-white group-hover:underline underline-offset-4 transition-all cursor-pointer px-2.5 py-1 rounded-md hover:bg-white/[0.06]"
                    >
                      <span>Details</span>
                      <span className="font-mono text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
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
                <div className="font-mono text-xs text-[#9DA1AA] uppercase tracking-wider">
                  {activeProject.tagline}
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

            {/* Modal Tabs */}
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
              <div className="flex items-center gap-3">
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
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tactile-press px-4 py-2 rounded-lg border border-white/[0.14] text-xs font-mono text-white hover:border-white hover:bg-white/[0.06] transition-all inline-block"
                  >
                    LIVE SITE ↗
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
