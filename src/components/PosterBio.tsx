"use client";

import React from "react";
import { motion } from "framer-motion";
import RooftopScene from "./RooftopScene";

interface SkillItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const SKILL_ITEMS: SkillItem[] = [
  {
    name: "React",
    category: "Web Dev",
    icon: (
      <svg className="w-4 h-4 text-[#E8353E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#E8353E" />
      </svg>
    ),
  },
  {
    name: "Django",
    category: "Django",
    icon: (
      <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        <path d="M12 22V12" />
        <path d="M12 12L21 7" />
        <path d="M12 12L3 7" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Problem Solving",
    icon: (
      <svg className="w-4 h-4 text-[#E8353E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: (
      <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: (
      <svg className="w-4 h-4 text-[#E8353E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    category: "UI Design",
    icon: (
      <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 12c.5-2.5 2.5-4 5-4 4 0 4 6 7 6 2 0 3.5-1.5 4-3-1 2.5-2.5 4-5 4-4 0-4-6-7-6-2 0-3.5 1.5-4 3z" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Backend",
    icon: (
      <svg className="w-4 h-4 text-[#E8353E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.5 2 6 4 6 6v3h6v1H5C3 10 2 11.5 2 14.5S3.5 19 6 19h2v-3c0-2 1.5-3 3.5-3h4.5c2 0 3-1 3-3V6c0-2-1.5-4-7-4z" />
        <circle cx="9" cy="5" r="1" fill="currentColor" />
        <circle cx="15" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Web Dev",
    icon: (
      <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M16 16v-4a2 2 0 0 0-4 0v4" />
        <path d="M8 12v3a1 1 0 0 0 1 1h1" />
      </svg>
    ),
  },
  {
    name: "Git",
    category: "DevOps",
    icon: (
      <svg className="w-4 h-4 text-[#E8353E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="18" r="3" />
        <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
        <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "UI Design",
    icon: (
      <svg className="w-4 h-4 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
  },
];

export default function PosterBio() {
  return (
    <RooftopScene id="about" rooftopNumber="ROOFTOP #03" rooftopTitle="ORIGIN STORY & ABILITIES" variant="about">
      <div className="border-b-2 border-[#E8353E]/30 pb-4">
        <div className="font-mono text-xs text-[#E8353E] font-bold uppercase tracking-widest mb-1">
          BIOGRAPHY & GRAPHIC DESIGN // ORIGIN STORY
        </div>
        <h2 className="font-heading text-5xl sm:text-7xl text-[#F8FAFC]">
          The story so far.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
        {/* Origin Story Narrative (Freestanding Splash Text - Exact copy without em dashes) */}
        <div className="lg:col-span-7 space-y-6 text-lg sm:text-xl text-[#F8FAFC]/95 leading-relaxed font-body">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            I&apos;m Precious. Final-year Computer Science student at UNIOSUN, in Osogbo. Faith comes first for me, before code, before school, before anything else, that&apos;s not a caption, it&apos;s just true.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            I grew up loving football way more than is probably healthy (Man United, for better or worse), I&apos;m slowly learning keyboard and church music, and I write about faith, football, and film on my own time because I like having a place that&apos;s just mine, not tied to a client or a grade. I do graphics and social media for a peace initiative, and I help lead creative work at an NGO that reaches over 20,000 young people across southwest Nigeria, that side of my life matters as much to me as the technical side does.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.35 }}
            className="font-heading text-2xl sm:text-3xl text-[#E8353E] border-l-4 border-l-[#E8353E] pl-6 py-2 my-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] italic"
          >
            &ldquo;Gospel. Tech. Precious.&rdquo; isn&apos;t a tagline I came up with for a portfolio, it&apos;s genuinely how I think about myself, faith and building things aren&apos;t two separate lanes I&apos;m juggling.
          </motion.blockquote>
        </div>

        {/* Abilities Freestanding Matrix */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-[rgba(248,250,252,0.15)] pb-3">
            <h3 className="font-heading text-4xl text-[#F8FAFC]">
              Abilities
            </h3>
            <span className="poster-stamp">SKILL MATRIX</span>
          </div>

          <p className="text-xs font-mono text-[#F8FAFC]/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Languages, frameworks, database systems, and design tools matched with visual palette icons across web development, problem solving, UI design, and Django architecture.
          </p>

          <div className="flex flex-wrap gap-3">
            {SKILL_ITEMS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="font-mono text-xs font-bold text-[#F8FAFC] bg-[#090A0F]/90 border-2 border-[#2563EB] hover:border-[#E8353E] hover:text-[#E8353E] px-4 py-2.5 rounded-lg transition-all shadow-[3px_3px_0px_0px_#2563EB] flex items-center gap-2.5 group cursor-pointer"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </RooftopScene>
  );
}
