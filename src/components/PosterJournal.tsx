"use client";

import { motion } from "framer-motion";
import RooftopScene from "./RooftopScene";

const BLOG_POSTS = [
  {
    slug: "god-first",
    title: "God First",
    excerpt:
      "Not a slogan. Not a caption. The only order of priority that makes sense when everything else is noise.",
    date: "May 28, 2026",
    category: "Faith",
    readingTime: "2 min read",
    link: "https://preciouswrites.vercel.app/blog/god-first",
  },
  {
    slug: "cunha-and-mbeumo-era",
    title: "The Cunha and Mbeumo Era",
    excerpt:
      "We went from Garnacho and Antony to actual quality. Man United fans are genuinely not used to this feeling.",
    date: "May 22, 2026",
    category: "Football",
    readingTime: "2 min read",
    link: "https://preciouswrites.vercel.app/blog/cunha-and-mbeumo-era",
  },
  {
    slug: "watching-below-1080p-should-be-illegal",
    title: "Watching Movies Below 1080p Should Be Illegal",
    excerpt:
      "The Map That Leads to You had some of the best cinematography of 2025. You should not be watching it in 480p.",
    date: "May 14, 2026",
    category: "Culture",
    readingTime: "2 min read",
    link: "https://preciouswrites.vercel.app/blog/watching-below-1080p-should-be-illegal",
  },
];

export default function PosterJournal() {
  return (
    <RooftopScene id="blog" rooftopNumber="ROOFTOP #04" rooftopTitle="FROM THE JOURNAL // FAITH, FOOTBALL & FILM" variant="journal">
      {/* Section Header Splash */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-[#E8353E]/30">
        <div>
          <div className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-widest mb-1">
            WRITING // FAITH, FOOTBALL &amp; FILM
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl text-[#F8FAFC]">
            From the journal.
          </h2>
        </div>
        <a
          href="https://preciouswrites.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-bold text-[#E8353E] hover:underline"
        >
          Read all posts on PreciousWrites &rarr;
        </a>
      </div>

      {/* Freestanding Splash Posts (No Boxed Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
        {BLOG_POSTS.map((post, idx) => (
          <motion.a
            key={post.slug}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 16, delay: idx * 0.15 }}
            className="flex flex-col justify-between space-y-4 group py-4 border-b border-[rgba(248,250,252,0.15)]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#090A0F] bg-[#E8353E] px-2.5 py-0.5 rounded shadow-[2px_2px_0px_0px_#2563EB]">
                  {post.category}
                </span>
                <span className="font-mono text-xs text-[#F8FAFC]/70">
                  {post.date}
                </span>
              </div>

              {/* Freestanding Article Title */}
              <h3 className="font-heading text-3xl sm:text-4xl text-[#F8FAFC] group-hover:text-[#E8353E] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                {post.title}
              </h3>

              {/* Freestanding Excerpt */}
              <p className="text-sm text-[#F8FAFC]/85 leading-relaxed font-body drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between font-mono text-xs text-[#2563EB]">
              <span>{post.readingTime}</span>
              <span className="group-hover:text-[#E8353E] transition-colors font-bold">
                Read Article &rarr;
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </RooftopScene>
  );
}
