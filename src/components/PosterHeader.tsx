"use client";

import { useState, useEffect } from "react";

export default function PosterHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "about", "blog", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "about", label: "About", href: "#about" },
    { id: "blog", label: "Journal", href: "#blog" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090A0F]/95 backdrop-blur-md border-b-2 border-rgba(248,250,252,0.1) px-4 md:px-8 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Brand Stamp Logo */}
        <a
          href="#home"
          aria-label="Precious Olonade Vault Home"
          className="font-mono font-black text-sm bg-[#E8353E] text-[#090A0F] px-3 py-1 rounded shadow-[3px_3px_0px_0px_#2563EB] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
        >
          PO
        </a>
        <div className="hidden sm:block">
          <span className="font-body font-extrabold text-sm text-[#F8FAFC] tracking-tight">
            PRECIOUS OLONADE
          </span>
          <span className="font-mono text-xs text-[#2563EB] ml-2 font-bold">
            [FULL-STACK & GRAPHICS]
          </span>
        </div>
      </div>

      {/* Desktop Navigation Links with Web-Line Connectors */}
      <nav className="hidden md:flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider relative" aria-label="Main Navigation">
        {navLinks.map((link, index) => {
          const isActive = activeSection === link.id;
          return (
            <div key={link.id} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-5 h-3 text-[#E8353E]/40 mx-1"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6 C5 2, 15 10, 20 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                  <circle cx="10" cy="6" r="1.5" fill="#E8353E" opacity="0.6" />
                </svg>
              )}
              <a
                href={link.href}
                className={`relative px-3 py-1.5 rounded transition-all duration-200 ${
                  isActive
                    ? "text-[#F8FAFC] font-extrabold underline decoration-[#E8353E] decoration-2 underline-offset-4 spider-sense-pulse bg-[#E8353E]/10 border border-[#E8353E]/40"
                    : "text-[#F8FAFC]/80 hover:text-[#E8353E]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            </div>
          );
        })}
      </nav>

      {/* Action Buttons: Hero File (Resume) + Email CTA */}
      <div className="flex items-center gap-3">
        {/* Accessible Resume Link ("Hero File") */}
        <a
          href="mailto:segunolonade03@gmail.com?subject=Resume%20Request%20-%20Precious%20Olonade"
          className="font-mono text-xs font-bold text-[#F8FAFC] bg-[#121620] hover:border-[#E8353E] border border-rgba(248,250,252,0.2) px-3 py-2 rounded transition-all flex flex-col items-center leading-none"
          title="Hero File — Request Resume via Email"
          aria-label="Hero File (Resume) - Request Precious Olonade's Resume via Email"
        >
          <span className="text-[10px] text-[#E8353E]">HERO FILE</span>
          <span className="text-[9px] text-[#F8FAFC]/70 font-sans tracking-normal">(Resume)</span>
        </a>

        <a
          href="mailto:segunolonade03@gmail.com"
          className="font-mono text-xs font-bold text-[#F8FAFC] bg-[#2563EB] hover:bg-[#E8353E] hover:text-[#090A0F] px-4 py-2 rounded border border-[#2563EB] shadow-[3px_3px_0px_0px_#E8353E] transition-all"
        >
          Let&apos;s Talk &rarr;
        </a>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F8FAFC] hover:text-[#E8353E] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#090A0F] border-b-2 border-[#E8353E] p-5 flex flex-col gap-4 font-mono text-sm uppercase font-bold">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`hover:text-[#E8353E] ${
                activeSection === link.id ? "text-[#E8353E] font-extrabold underline" : "text-[#F8FAFC]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:segunolonade03@gmail.com?subject=Resume%20Request%20-%20Precious%20Olonade"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#E8353E] flex items-center gap-2 pt-2 border-t border-[rgba(248,250,252,0.1)]"
          >
            <span>HERO FILE</span>
            <span className="text-xs text-[#F8FAFC]/70 font-sans tracking-normal">(Resume Request) &rarr;</span>
          </a>
        </div>
      )}
    </header>
  );
}
