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
  link?: string;
  linkText?: string;
  githubUrl: string;
  isFlagship?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "privora",
    number: "01",
    category: "FLAGSHIP // FINAL-YEAR THESIS",
    badge: "AES-256-GCM",
    title: "Privora",
    summary:
      "My final year project. Started as an AI-generated codebase I had to learn line by line to actually own it. Now it's a real encrypted data vault: AES-256 encryption, JWT auth, and a compliance layer built around NDPR and GDPR, not just checkbox security.",
    description:
      "My final year project. Started as an AI-generated codebase I had to learn line by line to actually own it. Now it's a real encrypted data vault: AES-256 encryption, JWT auth, and a compliance layer built around NDPR and GDPR, not just checkbox security.",
    tech: ["React", "Django", "PostgreSQL", "AES-256", "JWT"],
    githubUrl: "https://github.com/preshdevops/privora",
    isFlagship: true,
  },
  {
    id: "feelms",
    number: "02",
    category: "MOVIE RECS",
    badge: "LIVE APP",
    title: "Feelms",
    summary:
      "A mood-based movie recommender. Tell it how you're feeling, it finds you something to watch, powered by Groq/Llama instead of generic genre-matching. Django backend, React frontend, deployed across Vercel, Railway, and Aiven Postgres.",
    description:
      "A mood-based movie recommender. Tell it how you're feeling, it finds you something to watch, powered by Groq/Llama instead of generic genre-matching. Django backend, React frontend, deployed across Vercel, Railway, and Aiven Postgres.",
    tech: ["Django", "React", "Groq / Llama", "PostgreSQL", "Vercel", "Railway", "Aiven"],
    link: "https://feelms.vercel.app",
    linkText: "Launch App (feelms.vercel.app)",
    githubUrl: "https://github.com/preshdevops/feelms",
  },
  {
    id: "editorial-muse",
    number: "03",
    category: "LETTER VAULT",
    badge: "LIVE APP",
    title: "Editorial Muse",
    summary:
      "Write a real letter and have it delivered by email, encrypted end to end. Built full-stack on Node/Express with SQLite and nodemailer. Small app, but the encryption gets the same seriousness I put into Privora.",
    description:
      "Write a real letter and have it delivered by email, encrypted end to end. Built full-stack on Node/Express with SQLite and nodemailer. Small app, but the encryption gets the same seriousness I put into Privora.",
    tech: ["Node.js", "Express", "SQLite", "Nodemailer", "Render"],
    link: "https://editorial-muse.onrender.com",
    linkText: "Launch App (editorial-muse.onrender.com)",
    githubUrl: "https://github.com/preshdevops/editorial-muse",
  },
  {
    id: "dabar",
    number: "04",
    category: "AUDIO & VIDEO CLIPPING",
    badge: "AI TOOL",
    title: "Dabar",
    summary:
      "Repurposes long sermon recordings into short clips for social media, using Whisper for transcription, FFmpeg for cutting, and Groq for fast inference. Built for churches that record everything and post nothing.",
    description:
      "Repurposes long sermon recordings into short clips for social media, using Whisper for transcription, FFmpeg for cutting, and Groq for fast inference. Built for churches that record everything and post nothing.",
    tech: ["Whisper", "FFmpeg", "Groq", "Python"],
    githubUrl: "https://github.com/preshdevops/dabar",
  },
  {
    id: "cinevault",
    number: "05",
    category: "DISCOVERY",
    badge: "NETLIFY",
    title: "CineVault",
    summary:
      "A movie discovery site. One of my earlier full-stack builds, before Feelms taught me people don't just want movies. They want movies that match how they feel.",
    description:
      "A movie discovery site. One of my earlier full-stack builds, before Feelms taught me people don't just want movies. They want movies that match how they feel.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    link: "https://cinevault-app.netlify.app",
    linkText: "Launch App (cinevault-app.netlify.app)",
    githubUrl: "https://github.com/preshdevops/CineVault",
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

      {/* Freestanding Splash Layout */}
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

                  <div className="flex flex-wrap items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono font-bold text-xs bg-[#090A0F] hover:bg-[#121620] text-[#F8FAFC] hover:text-[#E8353E] px-4 py-3 rounded border border-[#2563EB] hover:border-[#E8353E] transition-all flex items-center gap-2"
                        title="View Source Code on GitHub"
                      >
                        <span>VIEW CODE</span>
                        <span className="text-[10px] text-[#2563EB]">&rarr;</span>
                      </a>
                    )}

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

              <div className="pt-2 flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8353E] font-bold group-hover:underline">
                  <span>Open Detail Panel</span>
                  <span>&rarr;</span>
                </span>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs text-[#2563EB] hover:text-[#E8353E] underline font-bold"
                  >
                    [View Code]
                  </a>
                )}
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
              <div className="flex flex-wrap items-center gap-3">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-xs bg-[#E8353E] hover:bg-[#2563EB] text-[#090A0F] hover:text-[#F8FAFC] px-6 py-3 rounded shadow-[3px_3px_0px_0px_#2563EB] transition-all flex items-center gap-2"
                  >
                    <span>{selectedProject.linkText}</span>
                    <span>&rarr;</span>
                  </a>
                )}

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-xs bg-[#090A0F] hover:bg-[#121620] text-[#F8FAFC] hover:text-[#E8353E] px-5 py-3 rounded border border-[#2563EB] hover:border-[#E8353E] transition-all flex items-center gap-2"
                  >
                    <span>View Repository (GitHub)</span>
                    <span>&rarr;</span>
                  </a>
                )}
              </div>

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
