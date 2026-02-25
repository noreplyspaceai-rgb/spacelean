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
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Space Lean",
    "url": "https://spacelean.ai",
    "description": "Space Lean is an AI-powered project management tool that turns notes into actionable tasks, automates scheduling, and helps teams ship faster.",
    "applicationCategory": "ProjectManagement",
    "operatingSystem": "Web",
    "offers": [
      {
        "@type": "Offer",
        "name": "Free",
        "price": "0.00",
        "priceCurrency": "USD",
        "url": "https://spacelean.ai/#signup",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Pro",
        "price": "15.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingIncrement": 1,
          "price": "15.00",
          "priceCurrency": "USD",
          "unitText": "month"
        },
        "url": "https://spacelean.ai/pricing#pro",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Teams",
        "price": "50.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingIncrement": 1,
          "price": "50.00",
          "priceCurrency": "USD",
          "unitText": "month"
        },
        "url": "https://spacelean.ai/pricing#teams",
        "availability": "https://schema.org/InStock"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Space Lean Inc.",
      "url": "https://spacelean.ai"
    }
  } as const;

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
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
