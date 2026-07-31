# Pre-Release SEO Verification Checklist
### Category: Deploy Quality Assurance (Workflow Process)

This checklist must be reviewed and verified by developers and release leads before merging any changes to the `main` branch or deploying to production. This prevents regressions in metadata, hreflang alternate links, semantic headings, and JSON-LD schemas.

---

## 1. Metadata & Hreflang Validation

* [ ] **Absolute Canonical URLs**: Verify that `<link rel="canonical">` and Open Graph alternates use fully-qualified absolute URLs (e.g., `https://spacelean.ai/solutions/for-gcs`) instead of relative paths (e.g., `/solutions/for-gcs`).
* [ ] **Regional Alternate Link Alignment (`hreflang`)**: Confirm that regional alternates are absolute and cover essential locales (e.g., `en-US`, `en-GB`, `en-IN`, `x-default`) pointing to the matching localized route.
* [ ] **Title Tag Length & Keyword Focus**: Ensure title tags stay within **50–60 characters** and naturally include primary target keywords (e.g., `construction scheduling software`).
* [ ] **Meta Description Formatting**: Ensure meta descriptions stay within **150–160 characters**, use active voice, and do not contain double-spaces or typos that might look unprofessional in search snippets.
* [ ] **Open Graph Card Assets**: Confirm `<meta property="og:image">` links to a valid absolute image path (such as `https://spacelean.ai/marketing.jpg`) and tags are properly configured.

---

## 2. Crawler & Robots Permissions

* [ ] **Robots.txt Rules Synchronicity**: Ensure that `/public/robots.txt` is updated and mirrors the configurations inside the Next.js dynamic `app/robots.ts` router.
* [ ] **Generative AI Bot Permissions**: Verify that custom user-agents for generative engine optimization (GEO) are explicitly allowed:
  * `OAI-SearchBot` (OpenAI search crawlers)
  * `GPTBot` (ChatGPT scrapers)
  * `PerplexityBot` (Perplexity search indexes)
  * `ClaudeBot` (Anthropic scrapers)
* [ ] **Sitemap Path Matching**: Confirm the `Sitemap:` path inside `robots.txt` points to the correct absolute XML sitemap URL (`https://spacelean.ai/sitemap.xml`).

---

## 3. Semantic Heading & HTML Structure

* [ ] **Exactly One `<h1>` Per Page**: Audit the page layout to ensure that there is exactly one visible or readable H1 heading, containing the primary keyword of the page.
* [ ] **No Skipped Heading Levels**: Check that heading tags decrease sequentially (`<h1>` followed by `<h2>`, which can be followed by `<h3>`) without skipping levels (e.g., no H1 to H3 jumps) to preserve outline readability for screen readers and search bots.
* [ ] **Valid Markup & Nested Tags**: Inspect elements to verify that structural lists (`<ul>`, `<ol>`, `<li>`) and text paragraphs (`<p>`) do not have broken syntax or unclosed tags.

---

## 4. Structured Data (JSON-LD Schemas)

* [ ] **FAQPage Validation**: Test FAQPage JSON-LD schemas using Google's [Rich Results Test](https://search.google.com/test/rich-results). Verify question/answer arrays are fully escaped and match visible text on the page.
* [ ] **BreadcrumbList Mapping**: Ensure dynamic paths (like `/solutions/[slug]` and `/compare/[slug]`) inject a BreadcrumbList mapping standard path structures: Home (`/`) -> Category (`/solutions`) -> Leaf page.
* [ ] **SoftwareApplication Schema Categories**: Check that the `applicationCategory` uses valid Schema.org classes (e.g., `"BusinessApplication"` or `"ProjectManagementApplication"`) rather than custom terms.

---

## 5. Accessibility & Asset Optimization

* [ ] **Alt Tags for Core Images**: Verify that all visual images (specifically screenshots, dashboards, and diagram graphics) have descriptive, keyword-rich `alt` text.
* [ ] **GLB 3D Viewer Asset Compression**: Confirm that 3D model resources (`/city_pack_8.glb` or similar) are optimized for web use (preferably under 5MB) and feature responsive `<model-viewer>` dimensions.
* [ ] **Iframe Responsive Wrapper**: Wrap external video embeds in a fluid container (class `relative aspect-video w-full`) to prevent static width breaks on small screen sizes.

---

## 6. Verification Tools

* **Google Rich Results Test**: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
* **Schema.org Validator**: [https://validator.schema.org/](https://validator.schema.org/)
* **W3C Markup Validator**: [https://validator.w3.org/](https://validator.w3.org/)
* **PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
