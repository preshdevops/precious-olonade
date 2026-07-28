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
  content?: string;
}

const STATIC_POSTS: Post[] = [
  {
    slug: "god-first",
    title: "God First",
    excerpt:
      "Not a slogan. Not a caption. The only order of priority that makes sense when everything else is noise.",
    content:
      "Putting God first isn't an intellectual exercise or a ritual. It is aligning every decision, every line of code, every project, and every ambition with a higher purpose. When everything else around you is noise, clarity comes from knowing who you serve and where your foundation rests.",
    date: "May 28, 2026",
    category: "Faith",
    readingTime: "2 min read",
  },
  {
    slug: "cunha-and-mbeumo-era",
    title: "The Cunha and Mbeumo Era",
    excerpt:
      "We went from Garnacho and Antony to actual quality. Man United fans are genuinely not used to this feeling.",
    content:
      "The attacking transition at Manchester United has been a sight to behold this season. Combining relentless press, decision-making composure in the final third, and physical dominance, the team is playing with a level of structure and intent that fans haven't seen in years.",
    date: "May 22, 2026",
    category: "Football",
    readingTime: "2 min read",
  },
  {
    slug: "watching-below-1080p-should-be-illegal",
    title: "Watching Movies Below 1080p Should Be Illegal",
    excerpt:
      "The Map That Leads to You had some of the best cinematography of 2025. You should not be watching it in 480p.",
    content:
      "Cinematography is intentional craft — lighting setups, focal lengths, color grading choices designed for big screen delivery. Watching high-art direction compressed into grainy 480p streams ruins the emotional depth that directors and DP teams spent months shaping.",
    date: "May 14, 2026",
    category: "Culture",
    readingTime: "2 min read",
  },
];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>(STATIC_POSTS);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPost(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyLink = (postUrl: string) => {
    navigator.clipboard.writeText(postUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

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
            <div
              onClick={() => setSelectedPost(post)}
              className="group flex flex-col justify-between glass glass-hover rounded-2xl p-6 min-h-[280px] h-full transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-[#4A8FE7] bg-[rgba(74,143,231,0.1)] px-3 py-1 rounded-full inline-block">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-[#8A8880]">{post.readingTime}</span>
                </div>

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
                  <span>Read Article</span>
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
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Reader Modal Overlay */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-modal-title"
        >
          <div
            className="glass border border-[rgba(74,143,231,0.3)] bg-[#0A0A0A]/95 max-w-2xl w-full p-6 sm:p-8 rounded-2xl relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 text-[#8A8880] hover:text-[#EDEBE4] p-2 rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#4A8FE7] bg-[rgba(74,143,231,0.1)] px-3 py-1 rounded-full">
                {selectedPost.category}
              </span>
              <span className="text-[#8A8880] text-xs">•</span>
              <span className="font-mono text-xs text-[#8A8880]">{selectedPost.date}</span>
              <span className="text-[#8A8880] text-xs">•</span>
              <span className="font-mono text-xs text-[#8A8880]">{selectedPost.readingTime}</span>
            </div>

            <h3 id="blog-modal-title" className="font-heading font-bold text-2xl sm:text-3xl text-[#EDEBE4] mb-4">
              {selectedPost.title}
            </h3>

            <div className="prose prose-invert max-w-none text-[#EDEBE4]/90 text-base leading-relaxed mb-8 space-y-4">
              <p className="font-medium text-lg text-[#EDEBE4] italic border-l-2 border-l-[#4A8FE7] pl-4 py-1">
                {selectedPost.excerpt}
              </p>
              <p>
                {selectedPost.content ||
                  "Full article entry from PreciousWrites. Read the complete story and join the discussion."}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(255,255,255,0.07)]">
              <div className="flex items-center gap-3">
                <a
                  href={`https://preciouswrites.vercel.app/blog/${selectedPost.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4A8FE7] text-[#0A0A0A] font-semibold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-all flex items-center gap-2"
                >
                  <span>Open Full Entry on PreciousWrites</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button
                  onClick={() => handleCopyLink(`https://preciouswrites.vercel.app/blog/${selectedPost.slug}`)}
                  className="glass text-[#EDEBE4] font-mono text-xs px-4 py-2.5 rounded-full hover:border-[#4A8FE7] transition-all cursor-pointer"
                >
                  {copiedLink ? "Link Copied!" : "Copy Link"}
                </button>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-[#8A8880] hover:text-[#EDEBE4] font-mono text-xs px-4 py-2 rounded-full transition-colors cursor-pointer"
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

