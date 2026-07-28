"use client";

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
    <section
      id="blog"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-12 space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-[#CCFF00] pb-4">
        <div>
          <div className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-widest mb-1">
            WRITING // FAITH, FOOTBALL &amp; FILM
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#F8FAFC]">
            From the journal.
          </h2>
        </div>
        <a
          href="https://preciouswrites.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-bold text-[#CCFF00] hover:underline"
        >
          Read all posts on PreciousWrites &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <a
            key={post.slug}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="poster-card p-6 rounded-xl flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#090A0F] bg-[#CCFF00] px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="font-mono text-xs text-[#F8FAFC]/60">
                  {post.date}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F8FAFC] group-hover:text-[#CCFF00] transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-[#F8FAFC]/80 leading-relaxed font-body">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(248,250,252,0.1)] flex items-center justify-between font-mono text-xs text-[#2563EB]">
              <span>{post.readingTime}</span>
              <span className="group-hover:text-[#CCFF00] transition-colors">
                Read Article &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
