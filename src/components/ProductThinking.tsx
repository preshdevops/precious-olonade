"use client";

import React, { useState } from "react";

interface Note {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  synopsis: string;
  content: string[];
}

const notes: Note[] = [
  {
    id: "privacy-app",
    title: "Why I Built a Privacy App Instead of Another AI Tool",
    category: "Projects & Decisions",
    date: "2026",
    readTime: "3 min read",
    synopsis:
      "When choosing my final-year project at university, everyone was building ChatGPT wrappers. I wanted to build something practical that taught me how security actually works.",
    content: [
      "When it was time to pick a final-year project at Osun State University, almost everyone in my class was looking at building wrappers around AI APIs. It makes sense—you can get a working demo up in an afternoon, and it looks impressive quickly.",
      "But I wanted to build something where the core engineering happened in the software itself, not on an external API server. I’ve always been curious about privacy and how cloud platforms handle our data.",
      "Most services tell you your files are safe, but in reality, they have the master keys and could read everything if they wanted to. With Privora, I wanted to see if I could build a tool where files are encrypted directly in the user’s browser before they ever reach the database.",
      "It ended up being much harder than calling an API, but it taught me ten times more about cryptography, binary streams in JavaScript, and handling sensitive data properly. It made me realize that building something useful is way more satisfying than chasing a hype cycle.",
    ],
  },
  {
    id: "mobile-apps",
    title: "What Building Mobile Apps Taught Me About Complexity",
    category: "Mobile & Engineering",
    date: "2025",
    readTime: "3 min read",
    synopsis:
      "On the web, you can often get away with a lot of mistakes. On a smartphone with patchy mobile data, every bad design decision shows up immediately.",
    content: [
      "When you build for the web on a fast laptop, it’s easy to get sloppy. If an endpoint takes two seconds or a bundle is a little heavy, your laptop barely breaks a sweat.",
      "Building for Android with Kotlin completely changed how I think about software. When someone is using an app on a budget phone while traveling on a road with spotty network in Nigeria, the app can’t just show a blank screen or crash.",
      "It forced me to learn about local caching, keeping background threads quiet, and making sure the UI responds even when the phone is offline. You realize quickly that smooth software isn’t about fancy animations; it’s about making sure basic things work reliably when conditions aren’t ideal.",
      "It gave me a huge respect for mobile developers and made my web code much cleaner, too.",
    ],
  },
  {
    id: "starting-later",
    title: "Starting Software Development Later Than Most People",
    category: "Learning & Perspective",
    date: "2025",
    readTime: "3 min read",
    synopsis:
      "I didn’t start coding as a teenager. For a while that felt like a disadvantage, until I noticed it helped me stay focused on the actual problem rather than just the code.",
    content: [
      "In tech culture, there's always a story about someone who started programming at age twelve and spent their teenage years hacking on Linux kernels. When I got to university, I met people who had already been writing code for years, and for a while, I felt like I was perpetually playing catch-up.",
      "Over time, though, I realized that having interests outside of programming before getting into tech was actually a gift. I had spent years reading, watching films, and observing how people interact.",
      "That meant when I sat down to build something, I wasn’t just in love with writing lines of code. I was thinking: Who is going to use this? Does this make sense? Is this actually solving a real headache, or am I just writing code for the sake of it?",
      "Code is just the tool. What matters is having the curiosity to figure out how things work and the patience to build something people actually enjoy using.",
    ],
  },
  {
    id: "community-tech",
    title: "Why Community Technology Interests Me",
    category: "Tech for Development",
    date: "2026",
    readTime: "3 min read",
    synopsis:
      "A lot of tech is designed to keep people staring at screens alone. The projects that excite me most are the ones that help real groups and communities coordinate better.",
    content: [
      "Most commercial apps are optimized for one thing: keeping your eyes glued to the screen for as many minutes as possible each day so they can serve you ads.",
      "Through my volunteer work and community involvements, like with TSDI and local initiatives, I saw a very different side of software. People running local organizations, community clubs, and faith groups don’t need an algorithm telling them what to look at. They just need simple, reliable tools to organize information, share recordings, and stay in touch without getting spammed.",
      "When technology helps people in a physical room stay organized and communicate clearly, it feels like it’s doing what computers were originally meant to do: helping people do their work better, so they can get back to their real lives.",
      "That’s the kind of technology I want to keep exploring as a product builder.",
    ],
  },
];

export default function ProductThinking() {
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  const toggleNote = (id: string) => {
    setExpandedNoteId(expandedNoteId === id ? null : id);
  };

  return (
    <section id="thinking" className="py-20 md:py-28 border-b border-white/[0.08] scroll-mt-20">
      {/* Anchor alias for blog */}
      <span id="blog" className="sr-only" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9DA1AA] block">
                Writing &amp; Thinking
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-[#9DA1AA]">
                Field Notes
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F6] font-normal tracking-tight">
              Product notes
            </h2>
            <p className="text-base text-[#9DA1AA] max-w-xl">
              Short, honest notes on what I&rsquo;ve learned from building products, exploring new tools, and learning software.
            </p>
          </div>

          <div>
            <a
              href="https://preciouswrites.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-press inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.12] text-xs font-mono text-[#F4F4F6] hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer"
            >
              <span>Visit PreciousWrites</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Structured Field Notes List */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {notes.map((note, index) => {
            const isExpanded = expandedNoteId === note.id;

            return (
              <article
                key={note.id}
                className="group py-8 transition-colors duration-200 -mx-4 px-4 sm:mx-0 sm:px-0 hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Note Meta */}
                  <div className="lg:col-span-3 font-mono text-xs text-[#646974] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">NOTE 0{index + 1}</span>
                      <span>·</span>
                      <span>{note.date}</span>
                    </div>
                    <div className="font-mono text-[#9DA1AA]">
                      {note.category}
                    </div>
                    <div className="text-[11px] text-[#646974]">
                      {note.readTime}
                    </div>
                  </div>

                  {/* Note Headline & Body */}
                  <div className="lg:col-span-7 space-y-3">
                    <button
                      onClick={() => toggleNote(note.id)}
                      className="text-left w-full focus:outline-none group/title cursor-pointer"
                    >
                      <h3 className="font-serif text-xl sm:text-2xl text-[#F4F4F6] font-medium tracking-tight group-hover/title:text-white transition-colors">
                        {note.title}
                      </h3>
                    </button>

                    <p className="text-sm sm:text-base text-[#D0D4DC] leading-relaxed">
                      {note.synopsis}
                    </p>

                    {/* Inline Expanded Article */}
                    {isExpanded && (
                      <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-3.5 text-sm sm:text-base text-[#9DA1AA] leading-relaxed animate-in fade-in duration-200">
                        {note.content.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expand / Read Toggle */}
                  <div className="lg:col-span-2 flex lg:justify-end items-center pt-1 lg:pt-0">
                    <button
                      onClick={() => toggleNote(note.id)}
                      className="tactile-press inline-flex items-center gap-1.5 text-xs font-mono text-[#9DA1AA] hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 rounded border border-white/[0.08] hover:border-white/[0.2]"
                    >
                      <span>{isExpanded ? "Collapse" : "Read note"}</span>
                      <span className="text-[10px]">{isExpanded ? "↑" : "↓"}</span>
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
