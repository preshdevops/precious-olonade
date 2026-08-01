export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  link: string;
}

export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-structural-mandate-why-design-is-the-new-defense-for-online-data",
    title: "The Structural Mandate: Why Design is the New Defense for Online Data",
    excerpt:
      "Reactive patching is obsolete. As 'online' becomes the permanent default, real data protection means baking security into the architecture itself — not bolting it on after the breach.",
    date: "August 01, 2026",
    category: "Tech",
    readingTime: "3 min read",
    link: "https://preciouswrites.vercel.app/blog/the-structural-mandate-why-design-is-the-new-defense-for-online-data",
  },
  {
    slug: "beyond-the-code-5-hard-truths-about-software-success-every-developer-needs-to-know",
    title: "Beyond the Code: 5 Hard Truths About Software Success Every Developer Needs to Know",
    excerpt:
      "We've all been there — a new feature request hits your desk, and your first instinct is to open the IDE. But technical brilliance can't save a project with zero version control or poor stakeholder engagement.",
    date: "August 01, 2026",
    category: "Tech",
    readingTime: "5 min read",
    link: "https://preciouswrites.vercel.app/blog/beyond-the-code-5-hard-truths-about-software-success-every-developer-needs-to-know",
  },
  {
    slug: "why-design-is-more-than-decoration-5-surprising-lessons-from-the-frontlines-of-nigerian-tech",
    title: "Why Design is More Than 'Decoration': 5 Surprising Lessons from the Frontlines of Nigerian Tech",
    excerpt:
      "Imagine opening your banking app to find a specific payment from three months ago, only to be told 'No results found'. In a landscape of limited bandwidth and diverse hardware, design isn't decoration, it's access.",
    date: "August 01, 2026",
    category: "Tech",
    readingTime: "4 min read",
    link: "https://preciouswrites.vercel.app/blog/why-design-is-more-than-decoration-5-surprising-lessons-from-the-frontlines-of-nigerian-tech",
  },
];

/**
 * Dynamically fetches the latest 3 blog posts from preciouswrites.vercel.app.
 * ISR Revalidates every 1 hour (3600s).
 */
export async function getLatestBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch("https://preciouswrites.vercel.app/blog", {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "PreciousOlonadePortfolio/1.0",
      },
    });

    if (!res.ok) {
      console.warn(`Blog fetch returned status ${res.status}, using fallback.`);
      return FALLBACK_BLOG_POSTS;
    }

    const html = await res.text();

    // Regex match articles inside archive page
    const articleRegex = /<article[\s\S]*?href="\/blog\/([^"]+)"[\s\S]*?<h3[\s\S]*?>([\s\S]*?)<\/h3>[\s\S]*?<p[\s\S]*?>([\s\S]*?)<\/p>/gi;
    const posts: BlogPost[] = [];
    let match;

    while ((match = articleRegex.exec(html)) !== null && posts.length < 3) {
      const slug = match[1];
      const titleRaw = match[2].replace(/<[^>]+>/g, "").trim();
      const excerptRaw = match[3].replace(/<[^>]+>/g, "").trim();

      // Extract category if available
      const categoryMatch = match[0].match(/\[(.*?)\]/);
      const category = categoryMatch ? categoryMatch[1].replace(/<!--.*?-->/g, "").trim() : "Tech";

      // Extract date & read time
      const dateMatch = match[0].match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}/);
      const readTimeMatch = match[0].match(/(\d+\s+min\s+read)/);

      posts.push({
        slug,
        title: titleRaw || "Blog Article",
        excerpt: excerptRaw || "Read the latest article on PreciousWrites.",
        date: dateMatch ? dateMatch[0] : "Recent",
        category: category || "Journal",
        readingTime: readTimeMatch ? readTimeMatch[0] : "3 min read",
        link: `https://preciouswrites.vercel.app/blog/${slug}`,
      });
    }

    if (posts.length > 0) {
      return posts;
    }

    return FALLBACK_BLOG_POSTS;
  } catch (err) {
    console.error("Error fetching live blog posts:", err);
    return FALLBACK_BLOG_POSTS;
  }
}
