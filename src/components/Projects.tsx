"use client";

import { useState, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";

const PROJECTS = [
  {
    num: "01",
    name: "Privora",
    desc: "End-to-end encrypted data vault. Built for users who actually care about their privacy — AES-256, NDPR/GDPR compliant, JWT auth. My final-year project.",
    longDesc: "Privora is an enterprise-grade encrypted vault designed to solve cloud data leakage. Built with AES-256-GCM zero-knowledge client-side encryption before transmission, Django REST framework APIs, PostgreSQL storage, and strict NDPR/GDPR privacy compliance controls.",
    stack: ["React", "Django", "PostgreSQL"],
    category: "Fullstack",
    link: "https://github.com/preshdevops",
    featured: true,
  },
  {
    num: "02",
    name: "Feelms",
    desc: "Pick a mood. Get a movie. TMDB-powered discovery with an editorial UI and AI-generated mood-fit blurbs. It's basically your next film rec.",
    longDesc: "Feelms bridges emotion and film discovery. Combining TMDB API real-time catalog searching, dynamic color palette extraction, and intelligent mood matching algorithms to offer tailored cinematic recommendations.",
    stack: ["React", "TMDB API"],
    category: "Web Apps",
    link: "https://feelms.vercel.app",
    featured: false,
  },
  {
    num: "03",
    name: "Editorial Muse",
    desc: "Write someone a letter. Encrypt it. Send it. Track when they read it. Old-school romance, built with actual backend logic.",
    longDesc: "Editorial Muse brings back slow digital communication. Senders can write rich markdown letters, set time-locks or passcode locks, and receive read-receipt webhooks upon opening.",
    stack: ["Node.js", "SQLite", "Render"],
    category: "Fullstack",
    link: "https://editorial-muse.onrender.com",
    featured: false,
  },
  {
    num: "04",
    name: "CineVault",
    desc: "Film discovery app — search movies, browse actors, build a watchlist. My first serious frontend project, fully responsive.",
    longDesc: "CineVault is a lightweight client-side movie browser built with vanilla JavaScript. Features dynamic debounced search, custom watchlist browser storage, and responsive grid layouts.",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    category: "Web Apps",
    link: "https://cinevault-app.netlify.app",
    featured: false,
  },
  {
    num: "05",
    name: "Currency Converter",
    desc: "Desktop app with live exchange rate logic. Clean interface, no fluff. Built it because I needed it.",
    longDesc: "A high-performance Python desktop currency exchange conversion tool built with Tkinter GUI and live REST rate API synchronization. Supports offline rate caching and multiple fiat currencies.",
    stack: ["Python", "Desktop App"],
    category: "AI / Systems",
    link: "https://github.com/preshdevops/currency_desktop_app",
    featured: false,
  },
];

const CATEGORIES = ["All", "Fullstack", "Web Apps", "AI / Systems"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  const featuredProject = filteredProjects.find((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-12">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <RevealOnScroll delay={0.1}>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#4A8FE7]"></span>
              <span className="font-mono text-xs text-[#4A8FE7] uppercase tracking-[0.15em]">
                Selected Work
              </span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <h2 className="font-heading text-[clamp(2.25rem,5vw,3rem)] font-bold text-[#EDEBE4] leading-tight">
              Selected work.
            </h2>
          </RevealOnScroll>
        </div>

        {/* Category Filter Pills */}
        <RevealOnScroll delay={0.25}>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#4A8FE7] text-[#0A0A0A] border-[#4A8FE7] font-semibold shadow-[0_0_15px_rgba(74,143,231,0.3)]"
                      : "glass text-[#8A8880] border-[rgba(255,255,255,0.07)] hover:text-[#EDEBE4] hover:border-[rgba(74,143,231,0.3)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>

      {/* Grid container */}
      <div className="flex flex-col gap-5">
        {filteredProjects.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center text-[#8A8880]">
            No projects found in this category.
          </div>
        ) : (
          <>
            {/* Top row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {featuredProject && (
                <RevealOnScroll delay={0.3} className="h-full">
                  <ProjectCard
                    project={featuredProject}
                    isFeatured={true}
                    onOpenModal={() => setSelectedProject(featuredProject)}
                  />
                </RevealOnScroll>
              )}

              <div className="flex flex-col gap-5 justify-between">
                {secondaryProjects.slice(0, 2).map((project, idx) => (
                  <RevealOnScroll key={project.num} delay={0.4 + idx * 0.1}>
                    <ProjectCard
                      project={project}
                      onOpenModal={() => setSelectedProject(project)}
                    />
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Bottom row if remaining secondary projects exist */}
            {secondaryProjects.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {secondaryProjects.slice(2).map((project, idx) => (
                  <RevealOnScroll key={project.num} delay={0.5 + idx * 0.1}>
                    <ProjectCard
                      project={project}
                      onOpenModal={() => setSelectedProject(project)}
                    />
                  </RevealOnScroll>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Detail Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="glass border border-[rgba(74,143,231,0.3)] bg-[#0A0A0A]/90 max-w-xl w-full p-6 sm:p-8 rounded-2xl relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-[#8A8880] hover:text-[#EDEBE4] p-2 rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="font-mono text-xs text-[#4A8FE7] tracking-widest mb-1">
              PROJECT {selectedProject.num} • {selectedProject.category.toUpperCase()}
            </div>
            <h3 id="project-modal-title" className="font-heading font-bold text-2xl sm:text-3xl text-[#EDEBE4] mb-4">
              {selectedProject.name}
            </h3>

            <p className="text-[#8A8880] text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.longDesc}
            </p>

            <div className="mb-6">
              <div className="font-mono text-xs text-[#EDEBE4] mb-2 uppercase tracking-wider">Technologies Used</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-[#4A8FE7] bg-[rgba(74,143,231,0.1)] px-3 py-1 rounded-full border border-[rgba(74,143,231,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.07)]">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A8FE7] text-[#0A0A0A] font-semibold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-all flex items-center gap-2"
              >
                <span>View Repository / Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="glass text-[#8A8880] hover:text-[#EDEBE4] font-mono text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({
  project,
  isFeatured = false,
  onOpenModal,
}: {
  project: (typeof PROJECTS)[0];
  isFeatured?: boolean;
  onOpenModal: () => void;
}) {
  return (
    <div
      onClick={onOpenModal}
      className={`group block glass glass-hover relative rounded-2xl transition-all duration-300 cursor-pointer ${
        isFeatured
          ? "p-8 md:p-10 border-l-2 border-l-[#4A8FE7] h-full flex flex-col justify-between"
          : "p-7 flex flex-col justify-between"
      }`}
    >
      {/* Top right icon */}
      <div className="absolute top-6 right-6 text-[#8A8880] group-hover:text-[#4A8FE7] transition-colors duration-300">
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-[#4A8FE7] tracking-wider">{project.num}</span>
          <span className="text-[#8A8880] text-xs">•</span>
          <span className="font-mono text-[10px] uppercase text-[#8A8880] tracking-wider">{project.category}</span>
        </div>
        <h3
          className={`font-heading font-bold text-[#EDEBE4] mb-3 group-hover:text-[#4A8FE7] transition-colors ${
            isFeatured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`text-[#8A8880] leading-relaxed mb-6 ${
            isFeatured ? "text-base max-w-md" : "text-sm"
          }`}
        >
          {project.desc}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] md:text-[11px] text-[#4A8FE7] bg-[rgba(74,143,231,0.08)] px-3 py-1 rounded-full border border-[rgba(74,143,231,0.12)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="font-mono text-xs text-[#4A8FE7] opacity-0 group-hover:opacity-100 transition-opacity">
          Details →
        </span>
      </div>
    </div>
  );
}

