"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RooftopScene from "./RooftopScene";
import { BlogPost, FALLBACK_BLOG_POSTS, getLatestBlogPosts } from "@/lib/fetchBlogPosts";

export default function PosterJournal() {
  const [posts, setPosts] = useState<BlogPost[]>(FALLBACK_BLOG_POSTS);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadLivePosts() {
      const liveData = await getLatestBlogPosts();
      if (isMounted && liveData && liveData.length > 0) {
        setPosts(liveData);
        setIsLive(true);
      }
    }
    loadLivePosts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <RooftopScene id="blog" rooftopNumber="ROOFTOP #04" rooftopTitle="FROM THE JOURNAL // FAITH, FOOTBALL & FILM" variant="journal">
      {/* Section Header Splash */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-[#E8353E]/30">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#2563EB] font-bold uppercase tracking-widest mb-1">
            <span>WRITING // CANONICAL JOURNAL</span>
            {isLive && (
              <span className="text-[10px] text-[#E8353E] bg-[#E8353E]/10 border border-[#E8353E]/40 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                [LIVE FEED]
              </span>
            )}
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl text-[#F8FAFC]">
            From the journal.
          </h2>
        </div>
        <a
          href="https://preciouswrites.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-bold text-[#E8353E] hover:underline flex items-center gap-1.5"
        >
          <span>Read all posts on PreciousWrites</span>
          <span>&rarr;</span>
        </a>
      </div>

      {/* Freestanding Splash Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
        {posts.map((post, idx) => (
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
              <p className="text-sm text-[#F8FAFC]/85 leading-relaxed font-body drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between font-mono text-xs text-[#2563EB]">
              <span>{post.readingTime}</span>
              <span className="group-hover:text-[#E8353E] transition-colors font-bold flex items-center gap-1">
                <span>Read Article</span>
                <span>&rarr;</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </RooftopScene>
  );
}
