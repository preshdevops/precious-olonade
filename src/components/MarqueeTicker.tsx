"use client";

export default function MarqueeTicker() {
  const items = [
    "BUILD WITH INTENTION",
    "•",
    "PRIVORA (AES-256 VAULT)",
    "•",
    "FEELMS MOVIE MOOD",
    "•",
    "SHIP WITH PURPOSE",
    "•",
    "EDITORIAL MUSE",
    "•",
    "FULL-STACK CS DEVELOPER",
    "•",
    "CINEVAULT DISCOVERY",
    "•",
    "GRAPHIC DESIGN & FLYERS",
    "•",
  ];

  return (
    <div className="w-full bg-[#CCFF00] text-[#090A0F] overflow-hidden py-2.5 select-none border-y-2 border-[#090A0F] font-mono text-xs md:text-sm font-bold uppercase tracking-widest relative z-30">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className={item === "•" ? "text-[#2563EB]" : ""}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
