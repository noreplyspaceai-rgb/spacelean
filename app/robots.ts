import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://spacelean.ai";

  return {
    rules: [
      // ── General crawlers ──────────────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/", "/admin/"],
      },

      // ── Citation bots (AI search engines — ALLOW full access) ─────────────
      // These bots cite SpaceLean pages in AI-generated answers and search citations.
      // Never block these: blocking prevents AI citations and user browsing.
      {
        userAgent: [
          "OAI-SearchBot",    // ChatGPT Search citations
          "ChatGPT-User",     // ChatGPT user-initiated web browsing
          "Claude-SearchBot", // Claude search result citations
          "ClaudeBot",        // Anthropic web citations
          "PerplexityBot",    // Perplexity answer citations
          "Perplexity-User",  // Perplexity user-initiated query fetches
          "Google-Extended",  // Gemini/Vertex AI foundation training & grounding (does not affect Google Search or AI Overviews)
          "YouBot",           // You.com AI search
          "Amazonbot",        // Amazon Alexa / Rufus
          "Applebot",         // Apple AI / Siri
          "BingPreview",      // Bing / Copilot preview
          "DuckDuckBot",      // DuckDuckGo AI answers
        ],
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/", "/admin/"],
      },

      // ── Training bots (bulk ingestion — DISALLOW to protect content) ──────
      // These bots consume content for model training, not for citation.
      // Blocking prevents content from being ingested without attribution.
      {
        userAgent: [
          "GPTBot",          // OpenAI bulk training crawler
          "anthropic-ai",    // Anthropic bulk training crawler
        ],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

