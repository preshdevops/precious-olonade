export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 md:px-10 mt-12 pb-8">
      {/* Gold Gradient Top Border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(200,169,110,0.25)] to-transparent mb-8"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="font-mono text-xs md:text-sm text-[#8A8880]">
          Precious Olonade &copy; 2026
        </p>
        <p className="font-mono text-xs md:text-sm text-[#8A8880]">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
