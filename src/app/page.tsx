import PosterHeader from "@/components/PosterHeader";
import MarqueeTicker from "@/components/MarqueeTicker";
import PosterHero from "@/components/PosterHero";
import PosterProjects from "@/components/PosterProjects";
import PosterBio from "@/components/PosterBio";
import PosterJournal from "@/components/PosterJournal";
import PosterContact from "@/components/PosterContact";

export default function Home() {
  return (
    <>
      <PosterHeader />
      <MarqueeTicker />

      <main id="main-content" className="w-full">
        <PosterHero />
        <PosterProjects />
        <PosterBio />
        <PosterJournal />
        <PosterContact />
      </main>
    </>
  );
}
