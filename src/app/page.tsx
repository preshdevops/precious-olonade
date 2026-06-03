import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpotifyWidget from "@/components/SpotifyWidget";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      {/* Ambient cursor glow backdrop element */}
      <CursorGlow />

      {/* Global sticky navigation bar */}
      <Navbar />

      <main className="relative z-10 w-full min-h-screen">
        {/* Hero Section Container */}
        <div className="w-full flex flex-col items-center">
          <Hero />
          
          {/* Spotify Widget positioned beautifully below the hero content */}
          <div className="w-full max-w-6xl mx-auto px-6 flex justify-center -mt-10 mb-20 relative z-20">
            <RevealOnScroll delay={0.6} className="w-full max-w-sm flex justify-center">
              <SpotifyWidget />
            </RevealOnScroll>
          </div>
        </div>

        {/* Decorative thin gold-tinted divider line */}
        <div className="section-divider w-full" aria-hidden="true" />

        {/* Selected Projects Showcase */}
        <Projects />

        <div className="section-divider w-full" aria-hidden="true" />

        {/* Bio, story, stack and skills details */}
        <About />

        <div className="section-divider w-full" aria-hidden="true" />

        {/* Recent dynamic blog entries journal feed */}
        <Blog />

        <div className="section-divider w-full" aria-hidden="true" />

        {/* Full-width call-to-action & clipboard email contact form */}
        <Contact />

        {/* Core copyright and stack credits block */}
        <Footer />
      </main>
    </>
  );
}
