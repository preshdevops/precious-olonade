"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const email = "segunolonade03@gmail.com";

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      showToast("Email address copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; message?: string } = {};

    if (!formData.email || !formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    showToast("Message sent! Thanks for reaching out.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-2xl mx-auto text-center scroll-mt-12 relative"
    >
      <RevealOnScroll delay={0.1}>
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-[#4A8FE7]"></span>
          <span className="font-mono text-xs text-[#4A8FE7] uppercase tracking-[0.15em]">
            Contact
          </span>
          <span className="w-8 h-[2px] bg-[#4A8FE7]"></span>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <h2 className="font-heading text-[clamp(2.5rem,5vw,3.75rem)] font-bold text-[#EDEBE4] leading-tight">
          {"Let's build something."}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <p className="text-[#8A8880] text-base md:text-lg mt-4 leading-relaxed max-w-lg mx-auto">
          Open to contracts, collabs, and cold emails. Send a direct message below or copy my email address.
        </p>
      </RevealOnScroll>

      {/* Interactive Quick Copy Email Button */}
      <RevealOnScroll delay={0.4}>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleCopy}
            className="group relative flex items-center gap-3 bg-[#4A8FE7] text-[#0A0A0A] font-semibold px-8 py-4 rounded-full text-base md:text-lg hover:opacity-95 active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(74,143,231,0.15)] cursor-pointer"
          >
            <span>{copied ? "Copied!" : email}</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {copied ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              )}
            </svg>
          </button>
        </div>
      </RevealOnScroll>

      {/* Direct Contact Form */}
      <RevealOnScroll delay={0.45}>
        <form onSubmit={handleSubmit} className="mt-12 glass rounded-2xl p-6 sm:p-8 text-left space-y-4">
          <div>
            <label className="block font-mono text-xs text-[#8A8880] uppercase tracking-wider mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-[#EDEBE4] placeholder-[#8A8880]/50 focus:outline-none focus:border-[#4A8FE7] transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-[#8A8880] uppercase tracking-wider mb-2">Email Address *</label>
            <input
              type="email"
              placeholder="you@domain.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full bg-[rgba(255,255,255,0.03)] border rounded-xl px-4 py-3 text-sm text-[#EDEBE4] placeholder-[#8A8880]/50 focus:outline-none transition-colors ${
                errors.email ? "border-red-500/80" : "border-[rgba(255,255,255,0.08)] focus:border-[#4A8FE7]"
              }`}
            />
            {errors.email && <p className="text-red-400 font-mono text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-mono text-xs text-[#8A8880] uppercase tracking-wider mb-2">Message *</label>
            <textarea
              rows={4}
              placeholder="Tell me about your project or inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full bg-[rgba(255,255,255,0.03)] border rounded-xl px-4 py-3 text-sm text-[#EDEBE4] placeholder-[#8A8880]/50 focus:outline-none transition-colors ${
                errors.message ? "border-red-500/80" : "border-[rgba(255,255,255,0.08)] focus:border-[#4A8FE7]"
              }`}
            />
            {errors.message && <p className="text-red-400 font-mono text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[rgba(74,143,231,0.15)] text-[#4A8FE7] border border-[rgba(74,143,231,0.3)] font-semibold py-3.5 rounded-xl hover:bg-[#4A8FE7] hover:text-[#0A0A0A] transition-all duration-300 font-mono text-sm cursor-pointer"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </RevealOnScroll>

      {/* Social Links Row */}
      <RevealOnScroll delay={0.5}>
        <div className="flex gap-4 justify-center mt-10">
          <a
            href="https://github.com/preshdevops"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="glass w-12 h-12 rounded-xl flex items-center justify-center text-[#8A8880] hover:text-[#4A8FE7] hover:border-[rgba(74,143,231,0.3)] transition-all duration-300"
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
            href="https://www.linkedin.com/in/precious-olonade/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="glass w-12 h-12 rounded-xl flex items-center justify-center text-[#8A8880] hover:text-[#4A8FE7] hover:border-[rgba(74,143,231,0.3)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://preciouswrites.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog Journal"
            className="glass w-12 h-12 rounded-xl flex items-center justify-center text-[#8A8880] hover:text-[#4A8FE7] hover:border-[rgba(74,143,231,0.3)] transition-all duration-300"
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

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#4A8FE7] text-[#0A0A0A] font-semibold font-mono text-xs px-5 py-3 rounded-xl shadow-2xl animate-bounce">
          {toastMessage}
        </div>
      )}
    </section>
  );
}

