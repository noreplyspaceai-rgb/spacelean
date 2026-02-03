import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import WorkSmarter from "@/components/WorkSmarter";
import AIFeature from "@/components/AIFeature";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesGrid />
      <WorkSmarter />
      <AIFeature />
    </main>
  );
}
