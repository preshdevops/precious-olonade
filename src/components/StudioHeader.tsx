"use client";

import React, { useState } from "react";

export default function StudioHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0C0E]/90 backdrop-blur-md border-b border-white/[0.08] transition-colors duration-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold rounded focus:outline-none"
      >
        Skip to content
      </a>

      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#home"
          className="group flex flex-col focus:outline-none"
          aria-label="Precious Oluwasegun Olonade Home"
        >
          <span className="font-serif text-lg md:text-xl font-medium tracking-tight text-[#F4F4F6] group-hover:text-white transition-colors">
            Precious Oluwasegun Olonade
          </span>
          <span className="font-mono text-xs text-[#9DA1AA] tracking-wider uppercase">
            Product Builder &amp; Computer Scientist
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          <a
            href="#work"
            className="text-sm font-medium text-[#9DA1AA] hover:text-[#F4F4F6] transition-colors duration-150 tracking-wide"
          >
            Work
          </a>
          <a
            href="#thinking"
            className="text-sm font-medium text-[#9DA1AA] hover:text-[#F4F4F6] transition-colors duration-150 tracking-wide"
          >
            Thinking
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-[#9DA1AA] hover:text-[#F4F4F6] transition-colors duration-150 tracking-wide"
          >
            About
          </a>
          <a
            href="#now"
            className="text-sm font-medium text-[#9DA1AA] hover:text-[#F4F4F6] transition-colors duration-150 tracking-wide flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now
          </a>
        </nav>

        {/* Right Action / Contact */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="text-right">
            <span className="block font-mono text-[11px] text-[#646974] tracking-wider uppercase">
              Osun, Nigeria (GMT+1)
            </span>
            <span className="block font-sans text-xs text-[#9DA1AA]">
              Open to product roles
            </span>
          </div>
          <a
            href="mailto:segunolonade03@gmail.com"
            className="px-4 py-2 rounded-full border border-white/[0.14] text-xs font-mono tracking-wider text-[#F4F4F6] hover:bg-white hover:text-black hover:border-white transition-all duration-200"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-[#9DA1AA] hover:text-[#F4F4F6] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#0B0C0E] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-[#F4F4F6] hover:text-white font-medium"
            >
              Work
            </a>
            <a
              href="#thinking"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-[#F4F4F6] hover:text-white font-medium"
            >
              Thinking
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-[#F4F4F6] hover:text-white font-medium"
            >
              About
            </a>
            <a
              href="#now"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-[#F4F4F6] hover:text-white font-medium flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Now
            </a>
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="font-mono text-xs text-[#9DA1AA]">Osun, Nigeria</span>
              <a
                href="mailto:segunolonade03@gmail.com"
                className="px-4 py-2 rounded-full border border-white/[0.2] text-xs font-mono text-white"
              >
                segunolonade03@gmail.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
