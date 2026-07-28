"use client";

import { useState } from "react";

export default function PosterHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090A0F]/95 backdrop-blur-md border-b-2 border-rgba(248,250,252,0.1) px-4 md:px-8 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Brand Stamp Logo */}
        <a
          href="#home"
          aria-label="Precious Olonade Vault Home"
          className="font-mono font-black text-sm bg-[#CCFF00] text-[#090A0F] px-3 py-1 rounded shadow-[3px_3px_0px_0px_#2563EB] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
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

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase font-bold tracking-wider">
        <a href="#home" className="text-[#F8FAFC] hover:text-[#CCFF00] transition-colors">
          Home
        </a>
        <a href="#projects" className="text-[#F8FAFC] hover:text-[#CCFF00] transition-colors">
          Projects
        </a>
        <a href="#about" className="text-[#F8FAFC] hover:text-[#CCFF00] transition-colors">
          About
        </a>
        <a href="#blog" className="text-[#F8FAFC] hover:text-[#CCFF00] transition-colors">
          Journal
        </a>
        <a href="#contact" className="text-[#F8FAFC] hover:text-[#CCFF00] transition-colors">
          Contact
        </a>
      </nav>

      {/* CTA Email Button */}
      <div className="flex items-center gap-3">
        <a
          href="mailto:segunolonade03@gmail.com"
          className="font-mono text-xs font-bold text-[#090A0F] bg-[#2563EB] hover:bg-[#CCFF00] text-[#F8FAFC] hover:text-[#090A0F] px-4 py-2 rounded border border-[#2563EB] shadow-[3px_3px_0px_0px_#CCFF00] transition-all"
        >
          Let&apos;s Talk &rarr;
        </a>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F8FAFC] hover:text-[#CCFF00] focus:outline-none"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-[#090A0F] border-b-2 border-[#CCFF00] p-5 flex flex-col gap-4 font-mono text-sm uppercase font-bold">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F8FAFC] hover:text-[#CCFF00]"
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F8FAFC] hover:text-[#CCFF00]"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F8FAFC] hover:text-[#CCFF00]"
          >
            About
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F8FAFC] hover:text-[#CCFF00]"
          >
            Journal
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F8FAFC] hover:text-[#CCFF00]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
