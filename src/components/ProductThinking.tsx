"use client";

import React, { useState } from "react";

interface FieldNote {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  synopsis: string;
  content: string[];
}

const fieldNotes: FieldNote[] = [
  {
    id: "privacy-over-ai",
    title: "Why I Built a Privacy App Instead of Another AI Tool",
    category: "Architecture & Philosophy",
    date: "February 2026",
    readTime: "4 min read",
    synopsis:
      "When everyone is racing to build thin wrappers around proprietary LLM APIs, building a zero-knowledge cryptographic vault felt almost unfashionable. Here is why mathematical user sovereignty matters more than another chat interface.",
    content: [
      "Nearly every tech demo in the past two years follows an identical pattern: an interface makes a POST request to an external foundation model, renders a streaming completion, and claims to be a revolutionary product. But when you peel back the marketing layer, almost none of these tools address fundamental human vulnerability.",
      "The defining crisis of our technological era is not a shortage of synthetic text; it is the total erosion of user sovereignty. Every service we use treats human data as raw material to be harvested, indexed, and leveraged. Even well-meaning cloud platforms operate on an architecture of benevolent surveillance: 'Trust us, we encrypt your data at rest (with keys we own).' That is not privacy; that is custody with good PR.",
      "When designing my final-year thesis at Osun State University, I made a deliberate choice to build Privora instead of an AI assistant. I wanted to confront the hardest technical and ethical constraint: zero-knowledge architecture. In Privora, user data is encrypted with AES-256-GCM in the browser before a single byte touches the network. We literally cannot read your files even if served with a government subpoena.",
      "Building for privacy requires you to surrender power as a developer. You cannot track usage analytics on user files. You cannot inspect payloads to debug edge cases. You have to prove correctness through mathematics rather than trust. To me, that is what real engineering looks like.",
    ],
  },
  {
    id: "mobile-complexity",
    title: "What Building Mobile Apps Taught Me About Complexity",
    category: "Systems & Engineering",
    date: "November 2025",
    readTime: "5 min read",
    synopsis:
      "On the modern web, high-speed fiber and aggressive browser optimizations forgive sloppy architecture. On a smartphone traversing unstable cellular networks in Nigeria, every bad architectural decision is immediately punished.",
    content: [
      "Web development has become dangerously forgiving. When a component re-renders twenty times unnecessarily or an API endpoint returns a bloated 5MB payload, a modern laptop browser masks the crime with multi-core processors and gigabit connections. You can ship sloppiness and call it agile.",
      "Building mobile software in Nigeria shatters that illusion in your first week. When your user is commuting along a highway between Osogbo and Ibadan, their phone is alternating between 4G, EDGE, and complete packet drops. If your application relies on continuous server connectivity to render a simple screen, your app isn't just slow—it's broken.",
      "Mobile engineering forced me to embrace offline-first state machines, SQLite local caching, and byte-budget discipline. I learned that optimistic UI updates without deterministic conflict resolution create ghost states that destroy user trust. More importantly, it taught me that memory management and battery drain are ethical UX concerns, not just low-level profiling metrics.",
      "When you design for volatile environments first, your software becomes bulletproof everywhere else. Constraints are not handicaps; they are the truest teachers of software architecture.",
    ],
  },
  {
    id: "starting-late",
    title: "Starting Software Development Later Than Most People",
    category: "Reflections & Craft",
    date: "September 2025",
    readTime: "3 min read",
    synopsis:
      "For a long time, not having written code since age eleven felt like an insurmountable deficit. Over time, I discovered that entering technology with life experience outside of code is an extraordinary advantage.",
    content: [
      "In developer culture, there is an enduring myth of the teenage prodigy who wrote Linux device drivers at fourteen. When I entered the Computer Science department at Osun State University, I was surrounded by people who seemed to speak in syntax naturally. For the first two years, an invisible imposter syndrome whispered that I was perpetually behind.",
      "Then something shifted. As coursework moved from rote syntax drills to architectural design, distributed systems, and real product development, I noticed where purely syntax-obsessed developers struggled: they were so in love with their code that they forgot to ask whether the problem they were solving was real.",
      "Starting later meant I had already spent years observing human behavior, analyzing literature, and understanding how real organizations operate. It meant I didn't fall in love with programming languages; I fell in love with what software makes possible for human beings.",
      "Code is simply a means of translation. The ultimate craft is not typing speed or memorizing obscure standard library methods; it is the discipline of understanding what must be built, why it must exist, and who it serves.",
    ],
  },
  {
    id: "community-technology",
    title: "Why Community Technology Interests Me",
    category: "Tech for Development",
    date: "January 2026",
    readTime: "4 min read",
    synopsis:
      "Silicon Valley builds products to monetize isolated individuals. Community technology builds infrastructure for people who gather in physical rooms to look each other in the eye.",
    content: [
      "The dominant paradigm of modern consumer software is atomization. Social platforms design algorithms specifically to isolate individuals in personal feedback loops, maximizing time-on-screen and ad impressions. The user is a solitary consumer scrolling in the dark.",
      "Through my work with grassroots initiatives, ministry assemblies, and organizations like TSDI and OSPCN, I encountered a completely different category of software need: community technology. These are tools designed for groups of people who share physical geography, shared values, and mutual accountability.",
      "When building Makarios, the goal was not to increase 'daily active time'. In fact, the measure of success was the opposite: can a community member find the audio teaching archive or access community care in forty seconds and then put their phone away to be present with their family?",
      "Technology for Development (Tech4Dev) is not about handing down charity apps from high-income nations. It is about building dignified, reliable, localized infrastructure that honors the real social fabric of communities. That is where I want my engineering energy to live.",
    ],
  },
];

export default function ProductThinking() {
  const [activeNote, setActiveNote] = useState<FieldNote | null>(null);

  return (
    <section id="thinking" className="py-24 md:py-36 border-b border-white/[0.08] scroll-mt-20">
      {/* Anchor alias for blog */}
      <span id="blog" className="sr-only" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
              Product Thinking
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F4F4F6] font-normal tracking-tight">
              Field notes on systems, privacy, and utility.
            </h2>
            <p className="text-base sm:text-lg text-[#9DA1AA] leading-relaxed">
              Short written pieces exploring why products exist, what fails in production, and how technology intersects with human dignity.
            </p>
          </div>

          <a
            href="https://preciouswrites.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9DA1AA] hover:text-white transition-colors"
          >
            <span>PreciousWrites (Faith, Film, Football)</span>
            <span>↗</span>
          </a>
        </div>

        {/* Field Notes List */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {fieldNotes.map((note) => (
            <article
              key={note.id}
              className="py-8 md:py-10 group cursor-pointer hover:bg-white/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0"
              onClick={() => setActiveNote(note)}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                
                {/* Meta Date & Category */}
                <div className="md:col-span-3 space-y-1 font-mono text-xs text-[#646974]">
                  <div>{note.date}</div>
                  <div className="text-[#9DA1AA]">{note.category}</div>
                </div>

                {/* Title & Synopsis */}
                <div className="md:col-span-7 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F4F4F6] group-hover:text-white transition-colors font-medium">
                    {note.title}
                  </h3>
                  <p className="text-sm text-[#9DA1AA] leading-relaxed line-clamp-2">
                    {note.synopsis}
                  </p>
                </div>

                {/* Read Time & Action */}
                <div className="md:col-span-2 text-left md:text-right flex items-center md:justify-end gap-3">
                  <span className="font-mono text-xs text-[#646974]">
                    {note.readTime}
                  </span>
                  <span className="text-sm font-mono text-[#F4F4F6] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeNote && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl my-8 rounded-xl bg-[#0F1116] border border-white/[0.14] p-6 sm:p-10 shadow-2xl text-[#F4F4F6] space-y-8 max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
              <div className="space-y-2">
                <div className="flex items-center gap-3 font-mono text-xs text-[#9DA1AA]">
                  <span>{activeNote.date}</span>
                  <span>•</span>
                  <span>{activeNote.category}</span>
                  <span>•</span>
                  <span>{activeNote.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-tight">
                  {activeNote.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveNote(null)}
                aria-label="Close field note"
                className="p-2 text-[#9DA1AA] hover:text-white rounded-lg border border-white/[0.08] hover:border-white/[0.2] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Essay Content */}
            <div className="space-y-6 text-base text-[#D0D4DC] leading-relaxed font-sans">
              {activeNote.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Monograph Signoff */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="font-mono text-xs text-[#646974]">
                Author: Precious Oluwasegun Olonade
              </span>
              <button
                onClick={() => setActiveNote(null)}
                className="px-4 py-2 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                DONE READING
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
