"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (!el) return { id, offset: 0, height: 0 };
        return {
          id,
          offset: el.offsetTop - 120, // offset for sticky nav
          height: el.offsetHeight,
        };
      });

      const scrollPos = window.scrollY;
      const current = sections.find(
        (sec) => scrollPos >= sec.offset && scrollPos < sec.offset + sec.height
      );

      if (current) {
        setActiveSection(current.id);
      } else if (scrollPos < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90, // navbar height offset
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)] py-4 px-6 md:px-12 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center justify-center w-10 h-10 rounded-xl font-heading font-bold text-sm bg-[#C8A96E] text-[#111210] shadow-[0_0_15px_rgba(200,169,110,0.2)] hover:opacity-90 transition-opacity"
        >
          PO
        </a>

        {/* Centered Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-mono text-sm tracking-wider transition-colors duration-300 ${
                  isActive ? "text-[#C8A96E]" : "text-[#8A8880] hover:text-[#E8E4DC]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA on Right */}
        <div className="hidden md:block">
          <a
            href="mailto:segunolonade03@gmail.com"
            className="inline-block bg-[#C8A96E] text-[#111210] font-semibold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-[0_4px_12px_rgba(200,169,110,0.15)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-[#E8E4DC] hover:text-[#C8A96E] transition-colors p-1"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-[rgba(255,255,255,0.07)] flex flex-col gap-4 pb-2 animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-mono text-sm tracking-wider py-1 transition-colors duration-300 ${
                  isActive ? "text-[#C8A96E]" : "text-[#8A8880] hover:text-[#E8E4DC]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="mailto:segunolonade03@gmail.com"
            className="bg-[#C8A96E] text-[#111210] font-semibold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 text-center mt-2"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}
