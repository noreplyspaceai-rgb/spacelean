# 30-Day SEO New Action Plan & Technical Checklist

This SEO Action Plan compiles **30 concrete, actionable tasks** based on the SEO quality standards, Lighthouse audits, and search crawler guidelines detailed in the [SEO Skill Guide](.agents/skills/seo/SKILL.md). The plan targets optimization across traditional search engines (Google, Bing) and AI search visibility (ChatGPT Search, Perplexity, Google AI Overviews).

---

## Plan Structure & Focus Areas

| Focus Area | Task Range | Objective |
| :--- | :--- | :--- |
| **Technical SEO & Crawlability** | Tasks 1 - 6 | Core indexability, canonicalization, and XML sitemaps. |
| **On-Page Content & SEO Layout** | Tasks 7 - 12 | Heading structures, meta tags, titles, and image optimization. |
| **Internal Linking & Navigation** | Tasks 13 - 17 | Information architecture, anchor texts, and search relevance. |
| **Structured Data & JSON-LD** | Tasks 18 - 22 | Semantic rich snippets (Organization, Article, FAQ, Breadcrumbs). |
| **Mobile UX & Web Performance** | Tasks 23 - 26 | Mobile viewports, tap target dimensions, font styling, and LCP. |
| **AI Search (GEO) & Internationalization** | Tasks 27 - 30 | AI bot configuration, answer extraction patterns, and hreflang absolute URLs. |

---

## 30-Day SEO Implementation Roadmap

### 📁 Phase 1: Technical SEO & Crawlability (Days 1–6)

#### [x] Task 1: Enforce Self-Referencing Canonical URLs on All Static Page Routes
* **Focus Area**: Technical SEO
* **Target Files**:
  - `app/about/page.tsx`
  - `app/pricing/page.tsx`
  - `app/features/page.tsx`
* **Implementation Details**: Define the `alternates.canonical` field in the static metadata configuration block:
  ```typescript
  export const metadata: Metadata = {
    alternates: {
      canonical: "https://spacelean.ai/about",
    },
  };
  ```
* **Why It Matters**: Prevents duplicate index parameters from fragmenting page authority.

#### [x] Task 2: Standardize Canonical URLs on Dynamic Pages
* **Focus Area**: Technical SEO
* **Target Files**:
  - `app/solutions/[slug]/page.tsx`
  - `app/blogs/[slug]/page.tsx`
  - `app/compare/[slug]/page.tsx`
* **Implementation Details**: Inside the dynamic `generateMetadata` function, resolve the absolute canonical link:
  ```typescript
  export async function generateMetadata({ params }): Promise<Metadata> {
    const slug = (await params).slug;
    return {
      alternates: {
        canonical: `https://spacelean.ai/solutions/${slug}`,
      },
    };
  }
  ```
* **Why It Matters**: Keeps dynamic pages with tracking parameters properly attributed.

#### [x] Task 3: Optimize Dynamic XML Sitemap Generator (`app/sitemap.ts`)
* **Focus Area**: Technical SEO
* **Target Files**:
  - `app/sitemap.ts`
* **Implementation Details**: Ensure all key static routes (`/privacy`, `/terms`, etc.) and dynamic categories (`solutions`, `blogs`, `compare`) are mapped with correct change frequencies (`daily`, `weekly`, `monthly`) and logical priority weights (`0.5` to `1.0`).
* **Why It Matters**: Guides crawlers directly to the most critical business assets first.

#### [x] Task 4: Configure robots.txt to Disallow Private and API Endpoints
* **Focus Area**: Technical SEO
* **Target Files**:
  - `app/robots.ts`
  - `public/robots.txt`
* **Implementation Details**: Expressly restrict crawler access to admin routes, search query logs, and internal backend calls:
  ```text
  Disallow: /api/
  Disallow: /_next/
  Disallow: /admin/
  ```
* **Why It Matters**: Keeps crawl budgets focused on search-facing content.

#### [ ] Task 5: Enforce Lowercase & Hyphens in Page and Asset URL Directories
* **Focus Area**: Technical SEO
* **Target Files**:
  - All folder paths in `/app` and `/public` directories
* **Implementation Details**: Audit directories to ensure they don't contain underscores (`_`) or uppercase characters. E.g., rename files/folders from `spaceLean` to `space-lean`.
* **Why It Matters**: Standardized URLs prevent link mismatches and redirect loops.

#### [x] Task 6: Implement Security Headers for Search Trust Signals
* **Focus Area**: Technical SEO
* **Target Files**:
  - `next.config.ts`
* **Implementation Details**: Inject security headers (`Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`):
  ```typescript
  const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "DENY" },
          ],
        },
      ];
    },
  };
  ```
* **Why It Matters**: High-security headers provide essential web trust ranking signals.

---

### 📁 Phase 2: On-Page Content & SEO Layout (Days 7–12)

#### [x] Task 7: Audit and Optimize Title Tag Lengths and Formats
* **Focus Area**: On-Page SEO
* **Target Files**:
  - `app/layout.tsx`
  - Static page metadata configs
* **Implementation Details**: Ensure titles are under 60 characters and lead with primary keywords:
  - **Syntax**: `[Primary Keyword] | [Secondary Description] | SpaceLean`
* **Why It Matters**: Avoids snippet truncation in SERPs and maximizes target keyword density.

#### [ ] Task 8: Optimize Dynamic Title Generation for Solutions and Blog Posts
* **Focus Area**: On-Page SEO
* **Target Files**:
  - `app/solutions/[slug]/page.tsx`
  - `app/blogs/[slug]/page.tsx`
* **Implementation Details**: Append dynamic attributes in metadata creation (e.g., `"${solution.title} | Construction AI Solutions | SpaceLean"`).
* **Why It Matters**: Ensures unique titles for every dynamically served database row.

#### [x] Task 9: Review and Standardize Meta Descriptions to 150-160 Characters
* **Focus Area**: On-Page SEO
* **Target Files**:
  - `app/layout.tsx` and all page files
* **Implementation Details**: Write compelling, CTR-optimized descriptions containing primary focus words, capped strictly under 160 characters.
* **Why It Matters**: Compelling meta descriptions directly boost organic search click-through rates.

#### [ ] Task 10: Enforce Logical Heading Hierarchies Across Templates
* **Focus Area**: On-Page SEO
* **Target Files**:
  - `components/HeroSection.tsx`
  - All page layout components
* **Implementation Details**: Enforce exactly one `<h1>` tag on every route. Ensure sections flow logically: `<h1>` -> `<h2>` -> `<h3>` without skipping levels (no `<h4>` immediately after `<h2>`).
* **Why It Matters**: Improves search engines' ability to crawl and understand layout structure.

#### [x] Task 11: Add Keyword-Rich Accessibility `alt` Attributes to Images
* **Focus Area**: On-Page SEO
* **Target Files**:
  - All JSX/TSX elements containing `<img>` or Next.js `<Image>` tags
* **Implementation Details**: Replace empty strings `alt=""` or generic text with descriptive, accessibility-compliant descriptions:
  ```html
  <Image ... alt="AI-powered Gantt chart interface showing construction critical path adjustments" />
  ```
* **Why It Matters**: Optimizes Google Image search ranking and aids accessibility.

#### [x] Task 12: Enforce Image Dimension Attributes & Format WebP/AVIF
* **Focus Area**: On-Page SEO / performance
* **Target Files**:
  - Components rendering graphics or product screenshots
* **Implementation Details**: Specify explicit `width` and `height` dimensions. Use Next.js `<Image>` tags to serve optimized WebP/AVIF formats instead of raw PNG/JPG.
* **Why It Matters**: Minimizes layout shifts (CLS) and speeds up Largest Contentful Paint (LCP).

---

### 📁 Phase 3: Internal Linking & Site Structure (Days 13–17)

#### [x] Task 13: Replace Non-Descriptive Anchor Link Texts
* **Focus Area**: On-Page SEO
* **Target Files**:
  - `components/Footer.tsx`
  - `components/Header.tsx`
  - Custom page views
* **Implementation Details**: Replace text like "Click Here" or "Read More" with descriptive, keyword-rich phrases:
  ```html
  <!-- ❌ Avoid -->
  <Link href="/pricing">Click here</Link>
  <!-- ✅ Good -->
  <Link href="/pricing">View SpaceLean construction pricing plans</Link>
  ```
* **Why It Matters**: Explicit anchor texts convey context and rank signals to search spiders.

#### [ ] Task 14: Implement Breadcrumb Navigation UI Components
* **Focus Area**: Internal Linking
* **Target Files**:
  - `components/Breadcrumbs.tsx` (new component)
  - `app/solutions/[slug]/page.tsx`
  - `app/blogs/[slug]/page.tsx`
* **Implementation Details**: Create a component to render absolute visual paths (e.g., `Home > Solutions > scheduling-software`) at the top of sub-pages.
* **Why It Matters**: Helps visitors understand site structure and provides deep internal link paths.

#### [ ] Task 15: Create Reciprocal Internal Links between Blogs and Solutions
* **Focus Area**: Internal Linking
* **Target Files**:
  - `lib/blog-data.ts`
  - `lib/solutions-data.ts`
* **Implementation Details**: Add reference lists and relative links connecting construction blogs to their corresponding service solution pages.
* **Why It Matters**: Passes page link equity from high-traffic blogs to transactional product pages.

#### [ ] Task 16: Setup Context-Related Call-to-Action (CTA) Modules
* **Focus Area**: Internal Linking
* **Target Files**:
  - Blog page lists and footer component sections
* **Implementation Details**: Embed conversion cards targeting related product trials based on user reading context.
* **Why It Matters**: Directs organic readers through the conversion funnel while reinforcing page authority.

#### [ ] Task 17: Establish a Static User-Facing HTML Sitemap Directory
* **Focus Area**: Internal Linking
* **Target Files**:
  - `app/sitemap-page/page.tsx`
* **Implementation Details**: Build an HTML layout listing all accessible marketing and resource URLs dynamically.
* **Why It Matters**: Creates a secondary fallback crawl route for deep page indexing.

---

### 📁 Phase 4: Structured Data & JSON-LD (Days 18–22)

#### [ ] Task 18: Audit and Validate Organization Schema on Root Layout
* **Focus Area**: Structured Data
* **Target Files**:
  - `app/layout.tsx`
* **Implementation Details**: Verify the JSON-LD Organization markup is correct, utilizing proper brand parameters, correct logo URLs, and `sameAs` array referencing social media properties.
* **Why It Matters**: Helps search engines establish corporate identity and brand search panels.

#### [ ] Task 19: Integrate Article JSON-LD Schema to Blog Detail Templates
* **Focus Area**: Structured Data
* **Target Files**:
  - `app/blogs/[slug]/page.tsx`
* **Implementation Details**: Inject JSON-LD Article metadata containing post author details, publishing date, headline, and publisher information:
  ```html
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "datePublished": post.publishedAt,
        "author": { "@type": "Person", "name": post.author },
      }),
    }}
  />
  ```
* **Why It Matters**: Enables blog posts to display as search rich results in Google News and feed apps.

#### [x] Task 20: Add Product JSON-LD Schema to Commercial Pricing Sections
* **Focus Area**: Structured Data
* **Target Files**:
  - `app/pricing/page.tsx`
* **Implementation Details**: Embed Product details, including offers, billing amounts, availability, and rating systems where applicable.
* **Why It Matters**: Generates pricing tags and availability badges in organic listing cards.

#### [ ] Task 21: Append FAQ JSON-LD Schema to Page FAQ Sections
* **Focus Area**: Structured Data
* **Target Files**:
  - `components/FAQ.tsx`
  - Dynamic Solutions sections
* **Implementation Details**: Iterate questions arrays to programmatically output schema matching `FAQPage` standards:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...]
  }
  ```
* **Why It Matters**: Earns visual dropdown Q&A links directly in search results.

#### [ ] Task 22: Inject BreadcrumbList JSON-LD Schema on Nested Slugs
* **Focus Area**: Structured Data
* **Target Files**:
  - Dynamic page templates (`app/solutions/[slug]/page.tsx`, etc.)
* **Implementation Details**: Match visual breadcrumbs navigation by serving programmatic JSON-LD BreadcrumbList schemas detailing each path segment.
* **Why It Matters**: Ensures structured pathway links display in Google's main search listings.

---

### 📁 Phase 5: Mobile UX & Web Performance (Days 23–26)

#### [x] Task 23: Verify Viewport Tag and Responsive Meta Configuration
* **Focus Area**: Mobile SEO
* **Target Files**:
  - `app/layout.tsx`
* **Implementation Details**: Verify viewport scales match: `width=device-width, initial-scale=1`.
* **Why It Matters**: Ensures responsive layout sizing fits modern screen configurations perfectly.

#### [ ] Task 24: Enforce Tap Target Sizing on Interactive Actions
* **Focus Area**: Mobile SEO
* **Target Files**:
  - `app/globals.css`
  - Button and navigation class lists
* **Implementation Details**: Ensure all mobile links/buttons span a minimum of `48px x 48px` to guarantee easy physical tap controls:
  ```css
  .interactive-element {
    min-height: 48px;
    min-width: 48px;
    padding: 12px;
  }
  ```
* **Why It Matters**: Fails Lighthouse/SEO metrics when buttons are grouped too closely or too small.

#### [ ] Task 25: Implement Below-the-Fold Lazy Loading for Heavy Media Assets
* **Focus Area**: Mobile SEO / performance
* **Target Files**:
  - Secondary layout features and testimonial sliders
* **Implementation Details**: Set `loading="lazy"` on all elements rendered down-page. Avoid loading tags on above-fold Hero assets.
* **Why It Matters**: Prioritizes key resource downloads, enhancing Core Web Vitals LCP.

#### [ ] Task 26: Set Font Sizes and Line Heights for Mobile Readability
* **Focus Area**: Mobile SEO
* **Target Files**:
  - `app/globals.css`
* **Implementation Details**: Standardize body font sizes to a minimum of `16px` with a line-height of `1.5` to prevent text overlaps.
* **Why It Matters**: Ensures mobile readability, preventing users from needing to zoom in.

---

### 📁 Phase 6: AI Search & International SEO (Days 27–30)

#### [ ] Task 27: Explicitly Allow AI Crawler User-Agents in robots.txt Configuration
* **Focus Area**: AI search visibility (GEO)
* **Target Files**:
  - `app/robots.ts`
  - `public/robots.txt`
* **Implementation Details**: Ensure crawl access rules exist for AI scrapers (`OAI-SearchBot`, `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`).
* **Why It Matters**: Allows next-gen AI search engines to read marketing files and provide direct page citations.

#### [ ] Task 28: Format First-Paragraph Introductions for AI Answer Extraction
* **Focus Area**: AI search visibility (GEO)
* **Target Files**:
  - Dynamic blog detail views and solutions descriptions
* **Implementation Details**: Place a direct, concise summary or definition (1-2 sentences) right at the start of articles to make it easy for AI crawlers to parse.
* **Why It Matters**: Maximizes citation rates in Perplexity and ChatGPT Overviews.

#### [x] Task 29: Create and Verify spec-compliant `/llms.txt` Index
* **Focus Area**: AI search visibility (GEO)
* **Target Files**:
  - `public/llms.txt` (new file)
* **Implementation Details**: Outline a clean, structured list of important company pages and guides in simple Markdown style.
* **Why It Matters**: Provides a clean, machine-readable index for LLM models to digest.

#### [ ] Task 30: Standardize Absolute Hreflang Tag alternate languages
* **Focus Area**: International SEO
* **Target Files**:
  - `app/layout.tsx`
  - Dynamic metadata dynamic blocks
* **Implementation Details**: Use fully qualified URLs (beginning with `https://spacelean.ai`) for the languages dictionary object.
* **Why It Matters**: Google ignores relative URLs in alternate language meta arrays.

---

## Plan Verification Tools & Audit Standards

To ensure each task achieves maximum search quality score, use the following tools:
1. **Google Search Console**: For sitemap submission, crawl checks, and tracking mobile usability.
2. **Google Rich Results Test / Schema.org Validator**: For verifying Organization, Article, FAQ, and Breadcrumb structured schemas.
3. **Lighthouse / PageSpeed Insights**: For measuring LCP, CLS, and verifying font readable scales & tap target dimensions.
