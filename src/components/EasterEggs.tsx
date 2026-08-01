"use client";

import { useEffect, useState } from "react";

function playThwipSound() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // 1. Fast frequency sweep (sweeping down from 1600Hz to 250Hz in 120ms)
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1600, now);
    osc.frequency.exponentialRampToValueAtTime(250, now + 0.12);

    oscGain.gain.setValueAtTime(0.45, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);

    // 2. Filtered white noise burst for the web-shooter swish/snap
    const bufferSize = Math.floor(ctx.sampleRate * 0.15);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(2800, now);
    filter.frequency.exponentialRampToValueAtTime(700, now + 0.15);
    filter.Q.setValueAtTime(2.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.6, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.15);
  } catch (err) {
    console.error("Audio playback error:", err);
  }
}

export default function EasterEggs() {
  const [thwipActive, setThwipActive] = useState(false);
  const [symbioteActive, setSymbioteActive] = useState(false);

  useEffect(() => {
    let keyBuffer = "";
    const konamiSequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when user is typing in form inputs
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      // 1. Thwip Detection
      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > 10) {
        keyBuffer = keyBuffer.slice(-10);
      }

      if (keyBuffer.endsWith("thwip")) {
        setThwipActive(true);
        playThwipSound();
        setTimeout(() => setThwipActive(false), 1800);
        keyBuffer = "";
      }

      // 2. Konami Code Detection
      const key = e.key;
      if (
        key.toLowerCase() === konamiSequence[konamiIndex].toLowerCase() ||
        key === konamiSequence[konamiIndex]
      ) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          const isSymbiote = document.body.classList.toggle("symbiote-mode");
          setSymbioteActive(isSymbiote);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* THWIP Web Line One-Off Animation */}
      {thwipActive && (
        <div className="fixed inset-0 z-[1000] pointer-events-none overflow-hidden flex items-center justify-center">
          <svg className="w-full h-full text-[#E8353E]" viewBox="0 0 1000 600" fill="none">
            <path
              d="M0 600 C 300 400, 700 200, 1000 0"
              stroke="#E8353E"
              strokeWidth="4"
              strokeDasharray="10 5"
              className="animate-pulse"
            />
            <path
              d="M1000 600 C 700 400, 300 200, 0 0"
              stroke="#2563EB"
              strokeWidth="3"
              strokeDasharray="8 4"
            />
          </svg>

          {/* Comic Sound Effect Badge */}
          <div className="absolute font-heading font-black text-6xl md:text-8xl text-[#090A0F] bg-[#E8353E] border-4 border-[#F8FAFC] px-8 py-4 rounded-2xl rotate-[-8deg] shadow-[12px_12px_0px_0px_#2563EB] animate-bounce">
            THWIP!
          </div>
        </div>
      )}

      {/* Symbiote Mode Indicator Notification */}
      {symbioteActive && (
        <div className="fixed bottom-6 right-6 z-[900] bg-[#040508] border-2 border-[#E8353E] text-[#F8FAFC] px-4 py-2.5 rounded-xl font-mono text-xs font-bold shadow-[4px_4px_0px_0px_#ffffff] flex items-center gap-2 animate-in fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E8353E] animate-ping" />
          <span>SYMBIOTE THEME ACTIVE // KONAMI CODE</span>
        </div>
      )}
    </>
  );
}
