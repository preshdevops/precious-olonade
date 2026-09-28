import StudioHeader from "@/components/StudioHeader";
import HeroMonograph from "@/components/HeroMonograph";
import SelectedWork from "@/components/SelectedWork";
import ProductThinking from "@/components/ProductThinking";
import StudioAbout from "@/components/StudioAbout";
import NowRadar from "@/components/NowRadar";
import StudioColophon from "@/components/StudioColophon";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F4F4F6] selection:bg-white selection:text-black">
      <StudioHeader />

      <main id="main-content" className="w-full relative z-10">
        <HeroMonograph />
        <SelectedWork />
        <ProductThinking />
        <StudioAbout />
        <NowRadar />
      </main>

      <StudioColophon />
    </div>
  );
}
