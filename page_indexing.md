# Google Search Console Page Indexing Fix Plan

This document outlines the diagnosis, root cause analysis, and resolution steps for all pages flagged under **Not Found (404)** and **Crawled - currently not indexed** in Google Search Console (GSC).

---

## 🛑 Category 1: Not Found (404) Errors

These pages return a 404 status code, which wastes Google's crawl budget and signals broken site integrity.

### 1. `https://spacelean.ai/favicon.ico?favicon.636a61ca.ico`
* **Root Cause**: Crawlers and browsers automatically fetch `/favicon.ico` at the root. Since the physical file is missing from the `/public` root directory, Next.js attempts to resolve it dynamically and returns a 404.
* **Resolution**:
  * Generate a standard `favicon.ico` file (32x32 pixels) and place it in the `public/` directory so that `/favicon.ico` serves a 200 OK status directly from static files.
* **Status**: **Action Required** (Create physical file).

### 2. `https://spacelean.ai/fonts/Verity-Regular.woff2`
* **Root Cause**: The layout page ([app/layout.tsx](file:///home/user/Documents/spacelearn/app/layout.tsx)) preloads `/fonts/Verity-Regular.woff2` and `/fonts/Verity-Bold.woff2` fonts, but these font assets are completely missing from the directory, returning a 404.
* **Resolution**:
  * **Option A (Recommended)**: Remove the preload tags from `app/layout.tsx` and custom `@font-face` styles from `app/globals.css`. Integrate Next.js's native `next/font/google` (e.g. loading `Inter` or `Outfit` dynamically), which automatically manages optimization, fallback, preloading, and serves fonts without static 404 paths.
  * **Option B**: Create the missing `/public/fonts` directory and place the physical `Verity-Regular.woff2` and `Verity-Bold.woff2` files inside it.
* **Status**: **Action Required**.

### 3. `https://spacelean.ai/blogs/managing-multiple-projects-sanity`
* **Root Cause**: Stale blog URL.
* **Resolution**: 
  * A permanent 301 redirect is already configured in `next.config.ts` mapping to the new live slug `/blogs/manage-multiple-projects`.
  * Verify that no internal links point to the old URL.
* **Status**: **Redirect Active** (Verify internal links).

### 4. `https://spacelean.ai/blogs/delegation-mastery-leaders`
* **Root Cause**: Stale blog URL.
* **Resolution**: 
  * A permanent 301 redirect is active in `next.config.ts` pointing to `/blogs/delegation-guide-leaders`.
  * Ensure the target page compiles correctly and self-canonicals.
* **Status**: **Redirect Active**.

### 5. `https://spacelean.ai/blogs/feedback-culture-teams-guide`
* **Root Cause**: Deprecated blog post.
* **Resolution**:
  * A permanent 301 redirect is active in `next.config.ts` redirecting to the closest relevant team communication article: `/blogs/team-communication-async-sync`.
* **Status**: **Redirect Active**.

### 6. `https://spacelean.ai/solutions/remote-teams`
* **Root Cause**: The page exists in the codebase (`lib/solutions-data.ts` has slug `"remote-teams"`). The 404 crawl date was **April 14, 2026**, which was before the route was built and deployed.
* **Resolution**:
  * Confirm that `/solutions/remote-teams` is included in the dynamic sitemap generation in `app/sitemap.ts`.
  * Verify the production URL returns a 200 OK status code.
  * Request a manual URL re-index in GSC.
* **Status**: **Valid Route** (Needs manual GSC validation request).

### 7. `https://spacelean.ai/blogs/spacelean-vs-notion-ai-task-management-comparison`
* **Root Cause**: Deprecated blog comparison URL.
* **Resolution**:
  * A permanent 301 redirect is configured in `next.config.ts` redirecting to the current live comparison page: `/blogs/spacelean-vs-notion-intelligent-workspace`.
* **Status**: **Redirect Active**.

### 8. `https://spacelean.ai/blogs/digital-minimalism-professionals`
* **Root Cause**: GSC reported a crawl error on **March 10, 2026**. The page is currently defined in the database (`lib/blog-data.ts`).
* **Resolution**:
  * Ensure the page contains self-referencing canonical tag.
  * Verify it is listed in the sitemap.
  * Request a re-crawl in GSC.
* **Status**: **Valid Route** (Needs validation request).

### 9. `https://spacelean.ai/auth/register`
* **Root Cause**: Stale authentication page. Registration is handled directly via `/request-a-demo`.
* **Resolution**:
  * A permanent 301 redirect is active in `next.config.ts` to `/request-a-demo`.
* **Status**: **Redirect Active**.

---

## 🔍 Category 2: Crawled - Currently Not Indexed

Google crawled these pages but decided not to index them. This occurs when Google determines a page lacks unique content depth, suffers from duplicate signals, has canonical conflicts, or lacks internal link authority.

### 1. `https://spacelean.ai/compare/spacelean-vs-asana`
* **Root Cause**: The comparison page was crawled but withheld from indexing, likely due to thin copy or overlapping keywords with other comparison pages.
* **Resolution**:
  * Expand the comparison description with unique construction-specific benchmarks.
  * Add structured `Product` or `FAQPage` schema markup.
  * Add at least 3 internal links pointing to this page from related blogs and features.
* **Status**: **Needs Content/Schema Upgrade**.

### 2. `https://spacelean.ai/blogs/strategic-goal-prioritization-okrs`
* **Root Cause**: Crawled but not indexed. The page lacks internal link equity.
* **Resolution**:
  * Add at least 3 internal links to this post from other high-authority OKR blog posts (e.g. from `okr-management-complete-guide` or `goal-setting-okrs-teams`).
  * Ensure the canonical tag is self-referencing and the page is included in `sitemap.xml`.
* **Status**: **Needs Internal Links**.

### 3. `https://spacelean.ai/blogs/productivity-hacks-busy-professionals`
* **Root Cause**: Crawled but not indexed.
* **Resolution**:
  * Inject construction project management specific examples to differentiate the content from generic productivity blogs.
  * Link to it from related pages.
* **Status**: **Needs Content Enrichment**.

### 4. `https://spacelean.ai/security`
* **Root Cause**: Trust and security pages are frequently marked `noindex` in Next.js page configurations by default, or lack direct links from main navigation paths.
* **Resolution**:
  * Open `app/security/page.tsx` and ensure metadata does NOT block crawlers. Set:
    ```typescript
    robots: { index: true, follow: true }
    ```
  * Verify that `/security` is included in `app/sitemap.ts`.
  * Ensure `/security` is linked in the global footer.
* **Status**: **Needs Verification/Metadata Check**.

---

## 📈 Search Console Verification Walkthrough

Once the fixes are implemented, trigger the Search Console validation loop:

1. **Step 1: Run Local Validation**
   * Execute `npm run build` locally to verify that all routes compile and sitemap generators resolve without errors.
2. **Step 2: Inspect URL Live**
   * Log into Google Search Console.
   * Enter the URL in the top search bar (URL Inspection Tool).
   * Click **Test Live URL** to confirm Googlebot can fetch the page with a 200 OK status.
3. **Step 3: Validate Fixes**
   * Under the **Index Page Coverage** report, locate the **Not Found (404)** error list.
   * Click **Validate Fix**. Google will prioritize re-crawling these specific redirect targets.
   * Repeat the same verification request for the **Crawled - currently not indexed** list.
