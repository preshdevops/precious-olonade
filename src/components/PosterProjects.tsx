"use client";

export default function PosterProjects() {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-12 space-y-12"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-[#CCFF00] pb-4">
        <div>
          <div className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-widest mb-1">
            WORK CATALOGUE // 01 - 05
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#F8FAFC]">
            Selected work.
          </h2>
        </div>
        <p className="font-mono text-xs text-[#F8FAFC]/70 max-w-md">
          A wall of hand-crafted software projects built with intention. Click any poster to launch live app or view source code.
        </p>
      </div>

      {/* Poster Grid Wall */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* POSTER 1: PRIVORA (FLAGSHIP - Loudest Poster) */}
        <div className="md:col-span-12 poster-card poster-card-flagship p-6 sm:p-8 rounded-xl relative overflow-hidden group">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm font-black text-[#090A0F] bg-[#CCFF00] px-2.5 py-0.5 rounded">
                  01
                </span>
                <span className="poster-stamp">
                  FLAGSHIP // FINAL-YEAR THESIS
                </span>
                <span className="font-mono text-xs text-[#2563EB] font-bold bg-[#090A0F] px-2.5 py-0.5 rounded border border-[#2563EB]">
                  AES-256-GCM
                </span>
              </div>

              <h3 className="font-heading font-bold text-3xl sm:text-5xl text-[#F8FAFC] group-hover:text-[#CCFF00] transition-colors">
                Privora
              </h3>

              <p className="text-base sm:text-lg text-[#F8FAFC]/90 leading-relaxed font-body">
                End-to-end encrypted data vault. Built for users who actually care about their privacy — AES-256, NDPR/GDPR compliant, JWT auth. My final-year project.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Django", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-[#CCFF00] bg-[#090A0F] px-3 py-1 rounded border border-[rgba(204,255,0,0.3)] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 pt-4 md:pt-0">
              <a
                href="https://github.com/preshdevops"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono font-bold text-xs bg-[#2563EB] hover:bg-[#CCFF00] text-[#F8FAFC] hover:text-[#090A0F] px-6 py-3.5 rounded shadow-[4px_4px_0px_0px_#090A0F] transition-all"
              >
                <span>VIEW REPOSITORY</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* POSTER 2: FEELMS */}
        <div className="md:col-span-6 poster-card p-6 rounded-xl space-y-4 sm:rotate-[1deg]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#2563EB]">02 // MOVIE RECS</span>
            <span className="font-mono text-[10px] text-[#090A0F] bg-[#CCFF00] px-2 py-0.5 rounded font-bold uppercase">
              LIVE APP
            </span>
          </div>

          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8FAFC]">
            Feelms
          </h3>

          <p className="text-sm text-[#F8FAFC]/80 leading-relaxed">
            Pick a mood. Get a movie. TMDB-powered discovery with an editorial UI and AI-generated mood-fit blurbs. It&apos;s basically your next film rec.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["React", "TMDB API"].map((tech) => (
              <span key={tech} className="font-mono text-xs text-[#2563EB] bg-[#090A0F] px-2.5 py-1 rounded border border-rgba(37,99,235,0.3)">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://feelms.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#CCFF00] hover:underline font-bold"
            >
              <span>Launch App (feelms.vercel.app)</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* POSTER 3: EDITORIAL MUSE */}
        <div className="md:col-span-6 poster-card p-6 rounded-xl space-y-4 sm:-rotate-[1.5deg]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#2563EB]">03 // LETTER VAULT</span>
            <span className="font-mono text-[10px] text-[#090A0F] bg-[#CCFF00] px-2 py-0.5 rounded font-bold uppercase">
              LIVE APP
            </span>
          </div>

          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8FAFC]">
            Editorial Muse
          </h3>

          <p className="text-sm text-[#F8FAFC]/80 leading-relaxed">
            Write someone a letter. Encrypt it. Send it. Track when they read it. Old-school romance, built with actual backend logic.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Node.js", "SQLite", "Render"].map((tech) => (
              <span key={tech} className="font-mono text-xs text-[#2563EB] bg-[#090A0F] px-2.5 py-1 rounded border border-rgba(37,99,235,0.3)">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://editorial-muse.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#CCFF00] hover:underline font-bold"
            >
              <span>Launch App (editorial-muse.onrender.com)</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* POSTER 4: CINEVAULT */}
        <div className="md:col-span-6 poster-card p-6 rounded-xl space-y-4 sm:-rotate-[1deg]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#2563EB]">04 // DISCOVERY</span>
            <span className="font-mono text-[10px] text-[#090A0F] bg-[#CCFF00] px-2 py-0.5 rounded font-bold uppercase">
              NETLIFY
            </span>
          </div>

          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8FAFC]">
            CineVault
          </h3>

          <p className="text-sm text-[#F8FAFC]/80 leading-relaxed">
            Film discovery app — search movies, browse actors, build a watchlist. My first serious frontend project, fully responsive.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["HTML", "CSS", "JavaScript", "REST API"].map((tech) => (
              <span key={tech} className="font-mono text-xs text-[#2563EB] bg-[#090A0F] px-2.5 py-1 rounded border border-rgba(37,99,235,0.3)">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://cinevault-app.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#CCFF00] hover:underline font-bold"
            >
              <span>Launch App (cinevault-app.netlify.app)</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* POSTER 5: CURRENCY CONVERTER */}
        <div className="md:col-span-6 poster-card p-6 rounded-xl space-y-4 sm:rotate-[1deg]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#2563EB]">05 // DESKTOP APP</span>
            <span className="font-mono text-[10px] text-[#F8FAFC] bg-[#2563EB] px-2 py-0.5 rounded font-bold uppercase">
              PYTHON
            </span>
          </div>

          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8FAFC]">
            Currency Converter
          </h3>

          <p className="text-sm text-[#F8FAFC]/80 leading-relaxed">
            Desktop app with live exchange rate logic. Clean interface, no fluff. Built it because I needed it.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Python", "Desktop App"].map((tech) => (
              <span key={tech} className="font-mono text-xs text-[#2563EB] bg-[#090A0F] px-2.5 py-1 rounded border border-rgba(37,99,235,0.3)">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://github.com/preshdevops/currency_desktop_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#CCFF00] hover:underline font-bold"
            >
              <span>View Repository on GitHub</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
