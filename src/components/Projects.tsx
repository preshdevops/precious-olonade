"use client";

import RevealOnScroll from "./RevealOnScroll";

const PROJECTS = [
  {
    num: "01",
    name: "Privora",
    desc: "End-to-end encrypted data vault. Built for users who actually care about their privacy — AES-256, NDPR/GDPR compliant, JWT auth. My final-year project.",
    stack: ["React", "Django", "PostgreSQL"],
    link: "https://github.com/preshdevops",
    featured: true,
  },
  {
    num: "02",
    name: "Feelms",
    desc: "Pick a mood. Get a movie. TMDB-powered discovery with an editorial UI and AI-generated mood-fit blurbs. It's basically your next film rec.",
    stack: ["React", "TMDB API"],
    link: "https://feelms.vercel.app",
    featured: false,
  },
  {
    num: "03",
    name: "Editorial Muse",
    desc: "Write someone a letter. Encrypt it. Send it. Track when they read it. Old-school romance, built with actual backend logic.",
    stack: ["Node.js", "SQLite", "Render"],
    link: "https://editorial-muse.onrender.com",
    featured: false,
  },
  {
    num: "04",
    name: "CineVault",
    desc: "Film discovery app — search movies, browse actors, build a watchlist. My first serious frontend project, fully responsive.",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    link: "https://cinevault-app.netlify.app",
    featured: false,
  },
  {
    num: "05",
    name: "Currency Converter",
    desc: "Desktop app with live exchange rate logic. Clean interface, no fluff. Built it because I needed it.",
    stack: ["Python", "Desktop App"],
    link: "https://github.com/preshdevops/currency_desktop_app",
    featured: false,
  },
];

export default function Projects() {
  // We want to structure the projects into sections
  // Desktop asymmetric grid:
  // - Top part: Left (featured card, takes 2 rows of height), Right (Feelms and Editorial Muse stacked)
  // - Bottom part: CineVault and Currency Converter side-by-side (2 columns)
  const featuredProject = PROJECTS.find((p) => p.featured);
  const secondaryProjects = PROJECTS.filter((p) => !p.featured && (p.num === "02" || p.num === "03"));
  const bottomProjects = PROJECTS.filter((p) => p.num === "04" || p.num === "05");

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-12">
      {/* Header */}
      <div className="mb-16">
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

      {/* Grid container */}
      <div className="flex flex-col gap-5">
        {/* Asymmetric layout top block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured - spans full height of this block */}
          {featuredProject && (
            <RevealOnScroll delay={0.3} className="h-full">
              <ProjectCard project={featuredProject} isFeatured={true} />
            </RevealOnScroll>
          )}

          {/* Right stack (2 cards) */}
          <div className="flex flex-col gap-5 justify-between">
            {secondaryProjects.map((project, idx) => (
              <RevealOnScroll key={project.num} delay={0.4 + idx * 0.1}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Bottom row (2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bottomProjects.map((project, idx) => (
            <RevealOnScroll key={project.num} delay={0.5 + idx * 0.1}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  isFeatured = false,
}: {
  project: (typeof PROJECTS)[0];
  isFeatured?: boolean;
}) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block glass glass-hover relative rounded-2xl transition-all duration-300 ${
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
        <div className="font-mono text-xs text-[#4A8FE7] tracking-wider mb-2">
          {project.num}
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

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] md:text-[11px] text-[#4A8FE7] bg-[rgba(74,143,231,0.08)] px-3 py-1 rounded-full border border-[rgba(74,143,231,0.12)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
