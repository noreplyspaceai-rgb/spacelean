import type { Metadata } from "next";
import VideosClient from "@/components/videos/VideosClient";
import { videos } from "@/lib/videos-data";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "SpaceLean Videos | Product Demos, BIM & AI Construction Management",
  description:
    "Watch official SpaceLean videos including AI-powered construction scheduling, BIM walkthroughs, product demonstrations, tutorials, and feature showcases.",
  keywords: [
    "SpaceLean videos",
    "SpaceLean product demo",
    "SpaceLean tutorials",
    "AI construction software demo",
    "BIM scheduling tutorial",
    "automatic schedule generation",
    "interactive 3D BIM viewer",
  ],
  alternates: {
    canonical: "https://spacelean.ai/videos",
    languages: {
      "en-US": "https://spacelean.ai/videos",
      "en-GB": "https://spacelean.ai/videos",
      "en-IN": "https://spacelean.ai/videos",
      "x-default": "https://spacelean.ai/videos",
    },
  },
  openGraph: {
    title: "SpaceLean Videos | Product Demos, BIM & AI Construction Management",
    description:
      "Watch official SpaceLean videos including AI-powered construction scheduling, BIM walkthroughs, product demonstrations, tutorials, and feature showcases.",
    url: "https://spacelean.ai/videos",
    siteName: "SpaceLean",
    type: "website",
    images: [
      {
        url: "/marketing.jpg",
        width: 1200,
        height: 630,
        alt: "SpaceLean — Videos & Product Demos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceLean Videos | Product Demos, BIM & AI Construction Management",
    description:
      "Watch official SpaceLean videos including AI-powered construction scheduling, BIM walkthroughs, product demonstrations, tutorials, and feature showcases.",
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
        name: "Videos",
        item: "https://spacelean.ai/videos",
      },
    ],
  };

  // VideoObject schema for each video in the list
  const videoObjectSchemas = videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    "uploadDate": "2026-07-18T00:00:00Z",
    "duration": "PT3M00S",
    "embedUrl": `https://www.youtube.com/embed/${video.id}`,
    "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean",
      "logo": {
        "@type": "ImageObject",
        "url": "https://spacelean.ai/icononly_transparent_nobuffer.png"
      }
    }
  }));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SpaceLean Video Gallery",
    "description": "Watch official SpaceLean product demos, AI-powered construction workflows, BIM walkthroughs, tutorials, and feature demonstrations.",
    "url": "https://spacelean.ai/videos",
    "numberOfItems": videos.length,
    "itemListElement": videos.map((video, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": video.title,
      "url": `https://spacelean.ai/videos#${video.id}`
    }))
  };

  return [breadcrumbSchema, itemListSchema, ...videoObjectSchemas];
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VideosPage() {
  const schemas = generateJsonLd();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* JSON-LD schemas */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <VideosClient />
    </div>
  );
}
