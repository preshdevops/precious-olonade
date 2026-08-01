import PosterHeader from "@/components/PosterHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import PosterHero from "@/components/PosterHero";
import PosterProjects from "@/components/PosterProjects";
import PosterBio from "@/components/PosterBio";
import PosterJournal from "@/components/PosterJournal";
import PosterContact from "@/components/PosterContact";
import CursorGlow from "@/components/CursorGlow";
import EasterEggs from "@/components/EasterEggs";
import WebCanopyAndConnectors from "@/components/WebCanopyAndConnectors";
import OpeningNightSky from "@/components/OpeningNightSky";

export default function Home() {
  return (
    <>
      <OpeningNightSky />
      <WebCanopyAndConnectors />
      <CursorGlow />
      <EasterEggs />
      <PosterHeader />
      <MarqueeTicker />

      <main id="main-content" className="w-full relative z-20">
        <PosterHero />
        <PosterProjects />
        <PosterBio />
        <PosterJournal />
        <PosterContact />
      </main>
    </>
  );
}
