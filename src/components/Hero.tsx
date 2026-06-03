"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center py-24 md:py-32 px-6"
    >
      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        {/* Availability Pill */}
        <RevealOnScroll delay={0.1}>
          <div className="inline-flex items-center gap-2.5 glass px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A96E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C8A96E]"></span>
            </span>
            <span className="font-mono text-xs text-[#8A8880] uppercase tracking-wider">
              Open to work
            </span>
          </div>
        </RevealOnScroll>

        {/* Headings */}
        <RevealOnScroll delay={0.2}>
          <h1 className="flex flex-col gap-2">
            <span className="font-heading text-[clamp(2.5rem,6.5vw,5rem)] font-bold text-[#E8E4DC] leading-[1.1]">
              I build things that actually ship.
            </span>
            <span className="font-heading text-[clamp(1.5rem,4vw,3rem)] text-[#C8A96E] italic font-medium leading-[1.2] tracking-wide">
              Full-stack dev. CS student. Based in Nigeria.
            </span>
          </h1>
        </RevealOnScroll>

        {/* Paragraph */}
        <RevealOnScroll delay={0.3}>
          <p className="text-[#8A8880] text-base md:text-lg max-w-xl leading-relaxed mt-6 text-center mx-auto">
            React, Django, React Native — web and mobile, frontend to backend. I work on real products: privacy tools, community apps, and things I'd actually use myself.
          </p>
        </RevealOnScroll>

        {/* CTA row */}
        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full sm:w-auto">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center gap-2 bg-[#C8A96E] text-[#111210] font-semibold px-8 py-3.5 rounded-full hover:opacity-95 transition-all duration-300 shadow-[0_4px_20px_rgba(200,169,110,0.2)]"
            >
              <span>View Projects</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://preciouswrites.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.12)] text-[#E8E4DC] px-8 py-3.5 rounded-full hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-300"
            >
              Read the Blog
            </a>
          </div>
        </RevealOnScroll>

        {/* Social Icons */}
        <RevealOnScroll delay={0.5}>
          <div className="flex gap-4 mt-10 justify-center">
            <a
              href="https://github.com/preshdevops"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="glass w-11 h-11 rounded-xl flex items-center justify-center text-[#8A8880] hover:text-[#C8A96E] hover:border-[rgba(200,169,110,0.3)] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                />
              </svg>
            </a>
            <a
              href="mailto:segunolonade03@gmail.com"
              aria-label="Send Email"
              className="glass w-11 h-11 rounded-xl flex items-center justify-center text-[#8A8880] hover:text-[#C8A96E] hover:border-[rgba(200,169,110,0.3)] transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="https://preciouswrites.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog Journal"
              className="glass w-11 h-11 rounded-xl flex items-center justify-center text-[#8A8880] hover:text-[#C8A96E] hover:border-[rgba(200,169,110,0.3)] transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
