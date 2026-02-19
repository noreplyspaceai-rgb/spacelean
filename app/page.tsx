import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import Testimonials from "@/components/Testimonials";
import HappyUsers from "@/components/HappyUsers";
import FAQ from "@/components/FAQ";
import ToolsSection from "@/components/ToolsSection";
import TrySection from "@/components/TrySection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Features */}
      <FeaturesGrid />

      {/* 3. Testimonials */}
      <Testimonials />

      {/* 4. Happy Users 50+ */}
      <HappyUsers />

      {/* 5. FAQ */}
      <FAQ />

      {/* 6. Tools */}
      <ToolsSection />

      {/* 7. Try Section */}
      <TrySection />

      {/* 8. Why Us */}
      <WhyUs />
    </main>
  );
}
