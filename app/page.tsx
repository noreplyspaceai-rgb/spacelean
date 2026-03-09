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
import VideoHero from "@/components/VideoHero";
import DashboardShowcase from "@/components/Dashboardshowcase";
import AudienceSection from "@/components/AudienceSection";

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Space Lean",
    "url": "https://spacelean.ai",
    "description":
      "Space Lean is an AI-powered Digital Construction Brain that automatically generates construction schedules from BIM models, predicts risks, optimizes crews, and adapts in real time.",
    "applicationCategory": "ConstructionManagementSoftware",
    "operatingSystem": "Web",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "0.00",
        "priceCurrency": "USD",
        "url": "https://spacelean.ai/#signup",
        "availability": "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        "name": "Professional",
        "price": "49.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingIncrement": 1,
          "price": "49.00",
          "priceCurrency": "USD",
          "unitText": "month",
        },
        "url": "https://spacelean.ai/pricing#pro",
        "availability": "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        "name": "Enterprise",
        "price": "Custom",
        "priceCurrency": "USD",
        "url": "https://spacelean.ai/pricing#enterprise",
        "availability": "https://schema.org/InStock",
      },
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Space Lean Inc.",
      "url": "https://spacelean.ai",
    },
  } as const;

  return (
    <main className="overflow-x-hidden">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json "
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* 1. HERO — Category Creation */}
      <HeroSection />
      <WhyUs />
      <DashboardShowcase />
<AudienceSection/>
      {/* 2. Social Proof — Trust */}
      {/* <SocialProof /> */}

      {/* 3. Problem Statement */}
      <FeaturesGrid />
      <VideoHero />

      {/* 4. Product Introduction / Visual */}

      {/* 5. Core Features */}

      {/* 6. How It Works */}
      {/* <ToolsSection /> */}

      {/* 7. Use Cases */}
      {/* <WorkSmarter /> */}

      {/* 8. Technology & Intelligence */}
      {/* <AIFeature /> */}

      {/* 9. Testimonials */}
      {/* <Testimonials /> */}

      {/* 10. Broad Social Proof */}
      {/* <HappyUsers /> */}

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. Final CTA */}
      {/* <TrySection /> */}
    </main>
  );
}