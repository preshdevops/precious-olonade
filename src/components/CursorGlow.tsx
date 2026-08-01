"use client";

import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  id: number;
}

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const [trail, setTrail] = useState<Point[]>([]);
  const pointId = useRef(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };

      // Add trail points with slight distance threshold
      setTrail((prev) => {
        const newPoint = { x: e.clientX, y: e.clientY, id: pointId.current++ };
        const last = prev[prev.length - 1];
        if (!last || Math.hypot(last.x - e.clientX, last.y - e.clientY) > 15) {
          return [...prev.slice(-6), newPoint];
        }
        return prev;
      });
    };

    let raf: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.left = `${pos.current.x}px`;
        glowRef.current.style.top = `${pos.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dynamic Cursor Glow Halo */}
      <div ref={glowRef} className="cursor-glow pointer-events-none" />

      {/* Faint Web Strand Cursor Trail */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-[9998] opacity-35">
        {trail.map((pt, i) => {
          if (i === 0) return null;
          const prevPt = trail[i - 1];
          const opacity = (i / trail.length) * 0.5;
          return (
            <line
              key={pt.id}
              x1={prevPt.x}
              y1={prevPt.y}
              x2={pt.x}
              y2={pt.y}
              stroke="#E8353E"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              strokeOpacity={opacity}
            />
          );
        })}
      </svg>
    </>
  );
}
