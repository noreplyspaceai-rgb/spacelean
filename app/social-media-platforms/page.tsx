import type { Metadata } from "next";
import SocialPlatformsClient from "@/components/social-platforms/SocialPlatformsClient";
import { socialPlatforms, getRegisteredPlatforms } from "@/data/socialPlatforms";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Social Media Platforms | SpaceLean",
  description:
    "Discover every official SpaceLean profile across social media, AI platforms, developer communities, review websites, and business directories.",
  keywords: [
    "SpaceLean social media",
    "SpaceLean LinkedIn",
    "SpaceLean Twitter",
    "SpaceLean Instagram",
    "SpaceLean GitHub",
    "SpaceLean Product Hunt",
    "SpaceLean official profiles",
    "SpaceLean online presence",
    "SpaceLean AI platforms",
    "construction software social media",
  ],
  alternates: {
    canonical: "/social-media-platforms",
  },
  openGraph: {
    title: "Social Media Platforms | SpaceLean",
    description:
      "Discover every official SpaceLean profile across social media, AI platforms, developer communities, review websites, and business directories.",
    url: "https://spacelean.ai/social-media-platforms",
    siteName: "SpaceLean",
    type: "website",
    images: [
      {
        url: "/marketing.jpg",
        width: 1200,
        height: 630,
        alt: "SpaceLean — Official Social Media Profiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Platforms | SpaceLean",
    description:
      "Discover every official SpaceLean profile across social media, AI platforms, developer communities, review websites, and business directories.",
    images: ["/marketing.jpg"],
    creator: "@spacelean_",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
function generateJsonLd() {
  const registeredPlatforms = getRegisteredPlatforms();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SpaceLean",
        item: "https://spacelean.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Social Media Platforms",
        item: "https://spacelean.ai/social-media-platforms",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SpaceLean",
    url: "https://spacelean.ai",
    logo: "https://spacelean.ai/icononly_transparent_nobuffer.png",
    description:
      "AI-powered lean project management and construction scheduling software.",
    sameAs: registeredPlatforms.filter((p) => p.url).map((p) => p.url!),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SpaceLean Official Social Media Profiles",
    description:
      "A comprehensive list of official SpaceLean profiles across social media, business directories, AI platforms, developer communities, and industry platforms.",
    url: "https://spacelean.ai/social-media-platforms",
    numberOfItems: registeredPlatforms.length,
    itemListElement: registeredPlatforms
      .filter((p) => p.url)
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `SpaceLean on ${p.name}`,
        url: p.url,
        description: p.description,
      })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Social Media Platforms | SpaceLean",
    description:
      "Discover every official SpaceLean profile across social media, AI platforms, developer communities, review websites, and business directories.",
    url: "https://spacelean.ai/social-media-platforms",
    breadcrumb: breadcrumbSchema,
    mainEntity: itemListSchema,
    publisher: {
      "@type": "Organization",
      name: "SpaceLean",
      url: "https://spacelean.ai",
    },
  };

  return [breadcrumbSchema, organizationSchema, itemListSchema, webPageSchema];
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SocialMediaPlatformsPage() {
  const schemas = generateJsonLd();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* JSON-LD structured data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <SocialPlatformsClient />
    </div>
  );
}
