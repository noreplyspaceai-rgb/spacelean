import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import WhyUs from "@/components/WhyUs";
import AIFeature from "@/components/AIFeature";
import ToolsSection from "@/components/ToolsSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import WorkSmarter from "@/components/WorkSmarter";
import Testimonials from "@/components/Testimonials";
import HappyUsers from "@/components/HappyUsers";
import FAQ from "@/components/FAQ";
import TrySection from "@/components/TrySection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero Section - Hook */}
      <HeroSection />

      {/* 2. Social Proof - Trust */}
      <SocialProof />

      {/* 3. Why Us - Problem/Solution Mapping */}
      <WhyUs />

      {/* 4. AI Deep Dive - Feature Spotlight */}
      <AIFeature />

      {/* 5. Interactive Tools - Product Demo */}
      <ToolsSection />

      {/* 6. Features Grid - Capability Overview */}
      <FeaturesGrid />

      {/* 7. Work Smarter - Integrations & Automation */}
      <WorkSmarter />

      {/* 8. Testimonials - User Proof */}
      <Testimonials />

      {/* 9. Broad Social Proof - Happy Users */}
      <HappyUsers />

      {/* 10. FAQ - Objection Handling */}
      <FAQ />

      {/* 11. Final CTA */}
      <TrySection />
    </main>
  );
}
