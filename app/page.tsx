import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import WhyUs from "@/components/WhyUs";
import DashboardShowcase from "@/components/Dashboardshowcase";

// Dynamically import below-the-fold components
const AudienceSection = dynamic(() => import("@/components/AudienceSection"), {
  ssr: true,
  loading: () => <div className="min-h-[600px]" />,
});

const ProductCapabilities = dynamic(() => import("@/components/ProductCapabilities"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), {
  ssr: true,
  loading: () => <div className="min-h-[700px]" />,
});

const VideoHero = dynamic(() => import("@/components/VideoHero"), {
  ssr: true,
  loading: () => <div className="min-h-[560px] h-[80vh] max-h-[960px] bg-black" />,
});

const FAQ = dynamic(() => import("@/components/FAQ"), {
  ssr: true,
  loading: () => <div className="min-h-[900px]" />,
});

const AskSpaceLeanAI = dynamic(() => import("@/components/AskSpaceLeanAI"), {
  ssr: true,
  loading: () => <div className="min-h-[450px]" />,
});

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpaceLean",
    "alternateName": "Space Lean",
    "url": "https://spacelean.ai",
    "description":
      "SpaceLean is an AI-powered Digital Construction Brain that automatically generates construction schedules from BIM models, predicts critical path risks, optimizes crew scheduling, and adapts in real time.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "datePublished": "2025-01-01T00:00:00Z",
    "dateModified": "2026-03-01T00:00:00Z",
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
      "Lean Project Management Software",
      "Intelligent Workflow Automation",
      "Construction Scheduling Software",
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
      "@id": "https://spacelean.ai/#organization",
    },
  } as const;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://spacelean.ai/#product",
    "name": "SpaceLean AI Construction Platform",
    "image": "https://spacelean.ai/marketing.jpg",
    "description": "AI-native construction scheduling software that converts 3D BIM models into 4D schedules, predicts critical path delays, and coordinates trade crews in real time.",
    "brand": {
      "@type": "Brand",
      "name": "SpaceLean",
    },
    "category": "Construction Project Management Software",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.00",
      "highPrice": "19.00",
      "offerCount": 3,
      "offers": [
        {
          "@type": "Offer",
          "name": "SpaceLean Individual Plan",
          "price": "0.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://spacelean.ai/pricing",
          "description": "Free forever for individuals and small teams. Includes basic AI task generation, Kanban boards, and manual tracking.",
        },
        {
          "@type": "Offer",
          "name": "SpaceLean Pro Plan",
          "price": "19.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "billingIncrement": 1,
            "price": "19.00",
            "priceCurrency": "USD",
            "unitText": "month",
          },
          "availability": "https://schema.org/InStock",
          "url": "https://spacelean.ai/pricing",
          "description": "Full AI scheduling, BIM integration, critical path analysis, Monte Carlo risk simulation, and priority support.",
        },
        {
          "@type": "Offer",
          "name": "SpaceLean Enterprise Plan",
          "price": "0.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/PreOrder",
          "url": "https://spacelean.ai/pricing",
          "description": "Enterprise-grade security, SSO/SAML, audit logs, custom AI training, and dedicated onboarding manager.",
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
    },
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
        "@id": "https://spacelean.ai/#organization",
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
        "@id": "https://spacelean.ai/#organization",
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

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://spacelean.ai/#service-bim-scheduling",
      "name": "4D BIM Scheduling & Sequencing Engine",
      "serviceType": "Construction Project Management Software Service",
      "description":
        "Automated conversion of 3D BIM models (IFC/Revit) into buildable 4D CPM construction schedules in under 60 seconds.",
      "provider": {
        "@type": "Organization",
        "@id": "https://spacelean.ai/#organization",
        "name": "SpaceLean",
        "url": "https://spacelean.ai",
        "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
      },
      "areaServed": "Global",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "4D BIM Scheduling Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automated CPM Network Generation",
              "description": "Transforms IFC geometry into logic-linked Gantt schedules with trade predecessors.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Spatial Clash & Workface Constraint Detection",
              "description": "Eliminates trade stacking and congestion in workface zones automatically.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "3D IFC Element-Level Inspection",
              "description": "Interactive web-based model exploration with quantity extraction.",
            },
          },
        ],
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "General Contractors, Project Owners, VDC Managers",
      },
      "termsOfService": "https://spacelean.ai/terms",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://spacelean.ai/#service-delay-prediction",
      "name": "AI Construction Delay Risk Prediction",
      "serviceType": "Predictive Construction Analytics Service",
      "description":
        "Continuous schedule monitoring with 1,000-run Monte Carlo simulations to detect critical path risks with 94% accuracy.",
      "provider": {
        "@type": "Organization",
        "@id": "https://spacelean.ai/#organization",
        "name": "SpaceLean",
        "url": "https://spacelean.ai",
        "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
      },
      "areaServed": "Global",
      "audience": {
        "@type": "Audience",
        "audienceType": "Construction Planners, Project Controls Advisors, General Contractors",
      },
      "termsOfService": "https://spacelean.ai/terms",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://spacelean.ai/#service-trade-lookaheads",
      "name": "Automated Subcontractor Lookaheads & Field Coordination",
      "serviceType": "Construction Field Execution & Coordination Service",
      "description":
        "Automated rolling 2-week lookaheads, daily site activity logs, and real-time trade coordination preventing site congestion.",
      "provider": {
        "@type": "Organization",
        "@id": "https://spacelean.ai/#organization",
        "name": "SpaceLean",
        "url": "https://spacelean.ai",
        "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
      },
      "areaServed": "Global",
      "audience": {
        "@type": "Audience",
        "audienceType": "Field Superintendents, Subcontractors, Trade Foremen",
      },
      "termsOfService": "https://spacelean.ai/terms",
    },
  ];

  const homepageBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://spacelean.ai",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://spacelean.ai/#webpage",
    "url": "https://spacelean.ai",
    "name": "SpaceLean — AI Construction Scheduling & BIM-to-Schedule Platform",
    "description": "SpaceLean is an AI-native construction scheduling platform that converts 3D BIM models into 4D CPM schedules in under 60 seconds, predicts critical path delays, and coordinates trade crews in real time.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://spacelean.ai/#website",
      "url": "https://spacelean.ai",
      "name": "SpaceLean",
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://spacelean.ai" },
      ],
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://spacelean.ai/#organization",
    },
    "inLanguage": "en-US",
  };

  return (
    <main className="overflow-x-hidden">
      {/* Standardized Section Padding: All imported page sections are audited to enforce uniform px-4 sm:px-6 lg:px-8 margins */}
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {serviceSchemas.map((service, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* 1. HERO — Category Creation */}
      <HeroSection />
      <WhyUs />
      <DashboardShowcase />
      <ProductCapabilities />
      <AudienceSection />
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

      {/* 11b. Ask SpaceLean AI */}
      <AskSpaceLeanAI />

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
