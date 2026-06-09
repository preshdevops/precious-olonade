"use client";

import { useEffect, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
}

const STATIC_POSTS: Post[] = [
  {
    slug: "god-first",
    title: "God First",
    excerpt:
      "Not a slogan. Not a caption. The only order of priority that makes sense when everything else is noise.",
    date: "May 28, 2026",
    category: "Faith",
    readingTime: "2 min read",
  },
  {
    slug: "cunha-and-mbeumo-era",
    title: "The Cunha and Mbeumo Era",
    excerpt:
      "We went from Garnacho and Antony to actual quality. Man United fans are genuinely not used to this feeling.",
    date: "May 22, 2026",
    category: "Football",
    readingTime: "2 min read",
  },
  {
    slug: "watching-below-1080p-should-be-illegal",
    title: "Watching Movies Below 1080p Should Be Illegal",
    excerpt:
      "The Map That Leads to You had some of the best cinematography of 2025. You should not be watching it in 480p.",
    date: "May 14, 2026",
    category: "Culture",
    readingTime: "2 min read",
  },
];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>(STATIC_POSTS);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://preciouswrites.vercel.app/api/posts");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setPosts(data.slice(0, 3));
          }
        }
      } catch (err) {
        console.warn("Failed to fetch blog posts, using fallback:", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-12">
      {/* Header */}
      <div className="mb-16">
        <RevealOnScroll delay={0.1}>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#4A8FE7]"></span>
            <span className="font-mono text-xs text-[#4A8FE7] uppercase tracking-[0.15em]">
              Writing
            </span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <h2 className="font-heading text-[clamp(2.25rem,5vw,3rem)] font-bold text-[#EDEBE4] leading-tight">
            From the journal.
          </h2>
        </RevealOnScroll>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, idx) => (
          <RevealOnScroll key={post.slug} delay={0.3 + idx * 0.1}>
            <a
              href={`https://preciouswrites.vercel.app/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between glass glass-hover rounded-2xl p-6 min-h-[280px] h-full transition-all duration-300"
            >
              <div>
                <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[#4A8FE7] bg-[rgba(74,143,231,0.1)] px-3 py-1 rounded-full inline-block">
                  {post.category}
                </span>

                <h3 className="font-heading text-lg md:text-xl font-bold text-[#EDEBE4] mt-4 group-hover:text-[#4A8FE7] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-[#8A8880] text-sm leading-relaxed mt-2 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <span className="font-mono text-xs text-[#8A8880]">
                  {post.date}
                </span>
                <span className="font-mono text-xs text-[#4A8FE7] flex items-center gap-1.5 group-hover:underline">
                  <span>Read</span>
                  <svg
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
