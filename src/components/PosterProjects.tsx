"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RooftopScene from "./RooftopScene";

interface Project {
  id: string;
  number: string;
  category: string;
  badge: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  link: string;
  linkText: string;
  isFlagship?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "privora",
    number: "01",
    category: "FLAGSHIP // FINAL-YEAR THESIS",
    badge: "AES-256-GCM",
    title: "Privora",
    summary: "End-to-end encrypted data vault. Built for users who actually care about their privacy — AES-256, NDPR/GDPR compliant, JWT auth. My final-year project.",
    description: "Privora is an end-to-end encrypted file & data vault platform designed to guarantee absolute data privacy. Client-side key derivation paired with AES-256-GCM encryption ensures server zero-knowledge architecture. Built as a comprehensive final-year Computer Science thesis project at Osun State University.",
    tech: ["React", "Django", "PostgreSQL", "AES-256"],
    link: "https://github.com/preshdevops",
    linkText: "VIEW REPOSITORY",
    isFlagship: true,
  },
  {
    id: "feelms",
    number: "02",
    category: "MOVIE RECS",
    badge: "LIVE APP",
    title: "Feelms",
    summary: "Pick a mood. Get a movie. TMDB-powered discovery with an editorial UI and AI-generated mood-fit blurbs. It's basically your next film rec.",
    description: "Feelms transforms movie discovery by matching films strictly to your emotional state. Integrates with the TMDB API to deliver customized recommendations, complete with editorial reviews and mood-fit ratings.",
    tech: ["React", "TMDB API", "Tailwind CSS"],
    link: "https://feelms.vercel.app",
    linkText: "Launch App (feelms.vercel.app)",
  },
  {
    id: "editorial-muse",
    number: "03",
    category: "LETTER VAULT",
    badge: "LIVE APP",
    title: "Editorial Muse",
    summary: "Write someone a letter. Encrypt it. Send it. Track when they read it. Old-school romance, built with actual backend logic.",
    description: "An editorial digital letter platform combining vintage epistolary aesthetics with modern security. Features encrypted letter transmission, read receipts, and custom typography styling.",
    tech: ["Node.js", "SQLite", "Render"],
    link: "https://editorial-muse.onrender.com",
    linkText: "Launch App (editorial-muse.onrender.com)",
  },
  {
    id: "cinevault",
    number: "04",
    category: "DISCOVERY",
    badge: "NETLIFY",
    title: "CineVault",
    summary: "Film discovery app — search movies, browse actors, build a watchlist. My first serious frontend project, fully responsive.",
    description: "CineVault is a feature-rich film discovery platform featuring dynamic searching, actor filmographies, watchlist persistence, and detailed movie stats. Clean vanilla JavaScript architecture.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    link: "https://cinevault-app.netlify.app",
    linkText: "Launch App (cinevault-app.netlify.app)",
  },
  {
    id: "currency-converter",
    number: "05",
    category: "DESKTOP APP",
    badge: "PYTHON",
    title: "Currency Converter",
    summary: "Desktop app with live exchange rate logic. Clean interface, no fluff. Built it because I needed it.",
    description: "A lightweight cross-platform desktop application built in Python for real-time exchange rate calculation, historical trends, and multi-currency conversions with offline caching.",
    tech: ["Python", "Desktop App", "REST API"],
    link: "https://github.com/preshdevops/currency_desktop_app",
    linkText: "View Repository on GitHub",
  },
];

export default function PosterProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <RooftopScene id="projects" rooftopNumber="ROOFTOP #02" rooftopTitle="SAVED THE DAY // WORK CATALOGUE" variant="projects">
      {/* Section Header Splash */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-[#E8353E]/30">
        <div>
          <div className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-widest mb-1">
            SAVED THE DAY // 01 - 05
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl text-[#F8FAFC] tracking-tight">
            Selected work.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#F8FAFC]/80 max-w-md">
          A wall of hand-crafted software projects built with intention. Click any freestanding title to open comic panel detail view.
        </p>
      </div>

      {/* Freestanding Splash Layout (No Boxed Cards / Containers) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
        {PROJECTS.map((project, index) => {
          if (project.isFlagship) {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                onClick={() => setSelectedProject(project)}
                className="md:col-span-12 space-y-4 cursor-pointer group py-6 border-b-2 border-[#E8353E]/20"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-black text-[#090A0F] bg-[#E8353E] px-3 py-1 rounded shadow-[2px_2px_0px_0px_#2563EB]">
                    {project.number}
                  </span>
                  <span className="poster-stamp">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-[#2563EB] font-bold bg-[#090A0F] px-2.5 py-0.5 rounded border border-[#2563EB]">
                    {project.badge}
                  </span>
                </div>

                {/* Freestanding Splash Title */}
                <h3 className="font-heading text-5xl sm:text-7xl lg:text-8xl text-[#F8FAFC] group-hover:text-[#E8353E] transition-colors drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {project.title}
                </h3>

                {/* Freestanding Paragraph Text */}
                <p className="text-lg sm:text-xl text-[#F8FAFC]/90 leading-relaxed font-body max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {project.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-[#E8353E] bg-[#090A0F] px-3 py-1 rounded border border-[#E8353E]/40 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="font-mono font-bold text-xs bg-[#E8353E] hover:bg-[#2563EB] text-[#090A0F] hover:text-[#F8FAFC] px-6 py-3 rounded shadow-[4px_4px_0px_0px_#2563EB] transition-all"
                  >
                    COMIC DETAIL VIEW &rarr;
                  </button>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: (index % 2) * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="md:col-span-6 space-y-4 cursor-pointer group py-4 border-b border-rgba(248,250,252,0.1)"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#2563EB]">
                  {project.number} // {project.category}
                </span>
                <span className="font-mono text-[10px] text-[#090A0F] bg-[#E8353E] px-2 py-0.5 rounded font-bold uppercase">
                  {project.badge}
                </span>
              </div>

              {/* Freestanding Title */}
              <h3 className="font-heading text-4xl sm:text-5xl text-[#F8FAFC] group-hover:text-[#E8353E] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                {project.title}
              </h3>

              {/* Freestanding Summary */}
              <p className="text-base text-[#F8FAFC]/85 leading-relaxed font-body drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-[#2563EB] bg-[#090A0F] px-2.5 py-1 rounded border border-[#2563EB]/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8353E] font-bold group-hover:underline">
                  <span>Open Detail Panel</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Comic-Panel Modal View */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090A0F]/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="bg-[#11141D] border-4 border-[#E8353E] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-[12px_12px_0px_0px_#2563EB] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b-2 border-rgba(248,250,252,0.15) pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-[#090A0F] bg-[#E8353E] px-2 py-0.5 rounded">
                    PANEL #{selectedProject.number}
                  </span>
                  <span className="font-mono text-xs text-[#2563EB] font-bold">
                    {selectedProject.badge}
                  </span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl text-[#F8FAFC]">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-xs font-bold text-[#F8FAFC]/70 hover:text-[#E8353E] p-2 hover:bg-[#121620] rounded border border-transparent hover:border-[#E8353E]"
                aria-label="Close comic panel modal"
              >
                [ESC // CLOSE ✕]
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4">
              <p className="text-base text-[#F8FAFC]/90 leading-relaxed font-body">
                {selectedProject.description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs text-[#E8353E] font-bold uppercase tracking-wider">
                  Tech Specifications
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-[#F8FAFC] bg-[#090A0F] border border-[#2563EB] px-3 py-1 rounded font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-[rgba(248,250,252,0.15)] flex flex-wrap items-center justify-between gap-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-bold text-xs bg-[#E8353E] hover:bg-[#2563EB] text-[#090A0F] hover:text-[#F8FAFC] px-6 py-3 rounded shadow-[3px_3px_0px_0px_#2563EB] transition-all flex items-center gap-2"
              >
                <span>{selectedProject.linkText}</span>
                <span>&rarr;</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-xs text-[#F8FAFC]/60 hover:text-[#F8FAFC] underline"
              >
                Return to Wall
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </RooftopScene>
  );
}
