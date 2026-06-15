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
import DashboardShowcase from "@/components/DashboardShowcase";
import AudienceSection from "@/components/AudienceSection";

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpaceLean",
    "alternateName": "Space Lean",
    "url": "https://spacelean.ai",
    "description":
      "SpaceLean is an AI-powered Digital Construction Brain that automatically generates construction schedules from BIM models, predicts critical path risks, optimizes crew scheduling, and adapts in real time.",
    "applicationCategory": "ConstructionManagementSoftware",
    "operatingSystem": "Web",
    "screenshot": "https://spacelean.ai/dashboard.png",
    "featureList": [
      "AI Construction Schedule Generation from BIM",
      "4D Construction Sequencing",
      "Critical Path Prediction",
      "Crew & Trade Optimization",
      "Real-Time Schedule Adaptation",
      "OKR Goal Management",
      "AI Task Decomposition",
      "Kanban Board Management",
      "Lean Project Management",
      "Intelligent Workflow Automation",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "0.00",
        "priceCurrency": "USD",
        "url": "https://spacelean.ai/pricing",
        "availability": "https://schema.org/InStock",
        "description": "Free plan for individuals and small teams",
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
          "unitText": "month",
        },
        "url": "https://spacelean.ai/pricing",
        "availability": "https://schema.org/InStock",
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
          "unitText": "month",
        },
        "url": "https://spacelean.ai/pricing",
        "availability": "https://schema.org/InStock",
      },
    ],
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean Inc.",
      "url": "https://spacelean.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://spacelean.ai/icononly_transparent_nobuffer.png",
      },
      "sameAs": [
        "https://x.com/spacelean_",
        "https://linkedin.com/company/spacelean",
      ],
    },
  } as const;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SpaceLean",
    "url": "https://spacelean.ai",
    "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
    "description": "SpaceLean is the AI-native construction project management platform that auto-generates schedules from BIM models and optimizes crew coordination.",
    "foundingDate": "2023",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "url": "https://spacelean.ai/request-a-demo",
    },
    "sameAs": [
      "https://x.com/spacelean_",
      "https://linkedin.com/company/spacelean",
    ],
  } as const;

  const videoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "SpaceLean Systems Infrastructure Engineering Software Demo",
      "description":
        "See how SpaceLean automates construction sequencing, generates build plans from BIM models, and delivers intelligent scheduling for infrastructure and engineering projects.",
      "thumbnailUrl": "https://spacelean.ai/videos/hero-1-poster.jpg",
      "uploadDate": "2026-01-01",
      "contentUrl": "https://spacelean.ai/videos/Space lean Systems Infrastructure Engineering Software.mp4",
      "embedUrl": "https://spacelean.ai",
      "duration": "PT1M30S",
      "publisher": {
        "@type": "Organization",
        "name": "SpaceLean",
        "logo": {
          "@type": "ImageObject",
          "url": "https://spacelean.ai/icononly_transparent_nobuffer.png",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "How SpaceLean Works — Product Walkthrough",
      "description":
        "A quick walkthrough showing how SpaceLean uses AI to break down projects into tasks, schedule crews, predict risks, and keep construction projects on track.",
      "thumbnailUrl": "https://spacelean.ai/videos/hero-2-poster.jpg",
      "uploadDate": "2026-01-01",
      "contentUrl": "https://spacelean.ai/videos/converted_V1.mp4",
      "embedUrl": "https://spacelean.ai",
      "duration": "PT2M",
      "publisher": {
        "@type": "Organization",
        "name": "SpaceLean",
        "logo": {
          "@type": "ImageObject",
          "url": "https://spacelean.ai/icononly_transparent_nobuffer.png",
        },
      },
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the AI task planning actually work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI engine analyzes your project description to identify key deliverables, dependencies, and necessary steps. It then structures these into an actionable Kanban board or timeline, estimating duration based on millions of similar successful projects. You can refine the output instantly.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I integrate SpaceLean with my existing stack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. SpaceLean features native two-way sync with GitHub, GitLab, Slack, and Google Calendar. We also offer a Zapier integration to connect with over 5,000+ other applications, ensuring your workflow remains uninterrupted.",
        },
      },
      {
        "@type": "Question",
        "name": "Is my data secure with SpaceLean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is our top priority. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are SOC2 Type II compliant and offer HIPAA-compliant instances for healthcare organizations. Your proprietary data is never used to train our AI models.",
        },
      },
      {
        "@type": "Question",
        "name": "How does the pricing model work for larger teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SpaceLean is free forever for individuals and small teams up to 3 members. For larger organizations, we offer a per-seat pricing model that scales with your needs, including advanced features like SSO, audit logs, and dedicated support. Contact sales for enterprise volume discounts.",
        },
      },
      {
        "@type": "Question",
        "name": "Does SpaceLean support agile methodologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SpaceLean is built with Agile in mind. We support Scrum sprints, Kanban continuous flow, and hybrid methodologies. Features include burndown charts, velocity tracking, and retrospective boards.",
        },
      },
    ],
  };

  return (
    <main className="overflow-x-hidden">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {videoSchema.map((video, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(video) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

      {/* Server-rendered internal links for SEO crawlability */}
      <div className="sr-only" aria-hidden="true">
        <nav aria-label="Site navigation">
          <h2>Explore SpaceLean</h2>
          <ul>
            <li><a href="/features">All Features</a></li>
            <li><a href="/pricing">Pricing Plans</a></li>
            <li><a href="/tool">Free AI Task Generator</a></li>
            <li><a href="/compare">Compare SpaceLean to Alternatives</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/request-a-demo">Request a Demo</a></li>
            <li><a href="/space-lean-core">Space Lean Core Platform</a></li>
            <li><a href="/solutions/for-gcs">Solutions for General Contractors</a></li>
            <li><a href="/solutions/for-owners">Solutions for Project Owners</a></li>
            <li><a href="/solutions/for-consultants">Solutions for Consultants</a></li>
            <li><a href="/solutions/industrial">Industrial Project Solutions</a></li>
            <li><a href="/solutions/infrastructure">Infrastructure Project Solutions</a></li>
            <li><a href="/solutions/commercial">Commercial Project Solutions</a></li>
            <li><a href="/blogs/lean-project-management-software">Lean Project Management Software Guide</a></li>
            <li><a href="/blogs/okr-management-complete-guide">OKR Management Guide</a></li>
            <li><a href="/blogs/decision-making-frameworks-leaders">Decision-Making Frameworks for Leaders</a></li>
          </ul>
        </nav>
      </div>

      {/* 12. Final CTA */}
      {/* <TrySection /> */}
    </main>
  );
}