# Google Search Console Audit & Fix Plan: "Not found (404)" Page Indexing Issues

## Executive Summary

Google Search Console (GSC) reported **10 affected URLs** failing indexing due to **"Not found (404)"** status errors. The validation attempt failed between **7/21/26 and 7/25/26**.

A comprehensive audit of the `spacelearn` codebase reveals **two categories of fixes**:
1. **301 Permanent Redirects** (for external/historical incoming requests, legacy slugs, and domain-level typos).
2. **Non-Redirect Root Cause Code Fixes** (fixing internal codebase links, removing stale font preloads, enforcing canonical headers, and refining sitemaps).

---

## Detailed URL-by-URL Technical Analysis

| # | Affected URL | Last Crawled Date | Root Cause Diagnosis | Primary Fix (Non-Redirect & Redirect) |
|---|---|---|---|---|
| **1** | `https://spacelean.ai/spacelean-core` | Aug 25, 2026 | **URL Typo / Missing Hyphen**. The Next.js route is `/space-lean-core`. Internal components contained `href="/spacelean-core"`. | **Code Fix**: Update internal link `href` to `/space-lean-core`. <br>**Redirect**: 301 from `/spacelean-core` → `/space-lean-core`. |
| **2** | `https://spacelean.ai/&` | Aug 25, 2026 | **Malformed Link Crawl**. Caused by unescaped HTML `&` entities or truncated query parameters in markdown/HTML links. | **Code Fix**: Audit & escape unescaped ampersands in links. <br>**Redirect**: 301 from `/&` → `/`. |
| **3** | `https://spacelean.ai/$` | Aug 17, 2026 | **Template String Syntax Error**. Unparsed JS/TS template string `${...}` rendered in HTML `href` attributes. | **Code Fix**: Replace raw string template literals with Next.js `Link` props. <br>**Redirect**: 301 from `/$` → `/`. |
| **4** | `https://spacelean.ai/favicon.ico?favicon.636a61ca.ico` | Jul 21, 2026 | **Expired Next.js Build Asset Chunk**. Next.js generated a hashed icon query string in a previous build that expired after re-compilation. | **Code Fix**: Serve static `/favicon.ico` via Next.js metadata API (`icons.icon`). <br>**Rewrite**: Handle `/favicon.ico*` requests. |
| **5** | `https://spacelean.ai/fonts/Verity-Regular.woff2` | Jun 30, 2026 | **Missing Static Font Preload**. `app/layout.tsx` preloaded `/fonts/Verity-Regular.woff2` and `globals.css` referenced it, but `/public/fonts/` was empty. | **Code Fix**: Remove stale `<link rel="preload">` from `app/layout.tsx` and clean up `@font-face` in `app/globals.css`. |
| **6** | `https://spacelean.ai/blogs/managing-multiple-projects-sanity` | May 16, 2026 | **Renamed Blog Slug**. The active blog slug in `lib/blog-data.ts` is `manage-multiple-projects`. | **Redirect**: 301 to `/blogs/manage-multiple-projects`. <br>**Code Fix**: Audit internal blog links. |
| **7** | `https://spacelean.ai/blogs/delegation-mastery-leaders` | May 12, 2026 | **Renamed Blog Slug**. The active blog slug in `lib/blog-data.ts` is `delegation-guide-leaders`. | **Redirect**: 301 to `/blogs/delegation-guide-leaders`. <br>**Code Fix**: Audit internal blog links. |
| **8** | `https://spacelean.ai/blogs/feedback-culture-teams-guide` | May 10, 2026 | **Renamed / Consolidating Slug**. Active post covering team feedback & async culture is `team-communication-async-sync`. | **Redirect**: 301 to `/blogs/team-communication-async-sync`. |
| **9** | `https://spacelean.ai/solutions/remote-teams` | Apr 14, 2026 | **Temporary Crawl Delay / Sitemap Sync**. Route exists in `lib/solutions-data.ts`; crawled before site deployment completed. | **Code Fix**: Ensure `/solutions/remote-teams` is included in `app/sitemap.ts` and footer nav. |
| **10** | `https://spacelean.ai/blogs/spacelean-vs-notion-ai-task-management-comparison` | Mar 10, 2026 | **Legacy Blog Slug**. The active blog slug in `lib/blog-data.ts` is `spacelean-vs-notion-intelligent-workspace`. | **Redirect**: 301 to `/blogs/spacelean-vs-notion-intelligent-workspace`. |

---

## 6 Alternative Methods for Implementing 301 Redirects

Depending on your hosting infrastructure, deployment pipeline, or performance preferences, there are **6 different ways** to implement 301 redirects for `spacelean.ai`.

---

### Method 1: Netlify Native Edge Redirects (`public/_redirects` or `netlify.toml`)

*(**Recommended for SpaceLean** — since SpaceLean runs on Netlify Edge CDN, this handles 301 redirects at CDN Edge nodes with **0ms server latency** before hitting Next.js).*

Create or update `public/_redirects`:

```plaintext
# public/_redirects
# Syntax: /old-path /new-path 301!

/spacelean-core                                            /space-lean-core                                    301!
/&                                                         /                                                   301!
/$                                                         /                                                   301!
/blogs/managing-multiple-projects-sanity                   /blogs/manage-multiple-projects                    301!
/blogs/delegation-mastery-leaders                          /blogs/delegation-guide-leaders                     301!
/blogs/feedback-culture-teams-guide                       /blogs/team-communication-async-sync               301!
/blogs/spacelean-vs-notion-ai-task-management-comparison   /blogs/spacelean-vs-notion-intelligent-workspace   301!
```

Or via `netlify.toml` in the project root:

```toml
# netlify.toml
[[redirects]]
  from = "/spacelean-core"
  to = "/space-lean-core"
  status = 301
  force = true

[[redirects]]
  from = "/blogs/managing-multiple-projects-sanity"
  to = "/blogs/manage-multiple-projects"
  status = 301
  force = true

[[redirects]]
  from = "/blogs/delegation-mastery-leaders"
  to = "/blogs/delegation-guide-leaders"
  status = 301
  force = true

[[redirects]]
  from = "/blogs/feedback-culture-teams-guide"
  to = "/blogs/team-communication-async-sync"
  status = 301
  force = true

[[redirects]]
  from = "/blogs/spacelean-vs-notion-ai-task-management-comparison"
  to = "/blogs/spacelean-vs-notion-intelligent-workspace"
  status = 301
  force = true
```

---

### Method 2: Next.js Edge Middleware (`middleware.ts`)

Intercepts incoming requests at the Next.js Edge layer. Useful if you want programmatic, regex, or dynamic database-backed redirects.

Create `middleware.ts` in the project root or `src/`:

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const REDIRECT_MAP: Record<string, string> = {
  "/spacelean-core": "/space-lean-core",
  "/&": "/",
  "/$": "/",
  "/blogs/managing-multiple-projects-sanity": "/blogs/manage-multiple-projects",
  "/blogs/delegation-mastery-leaders": "/blogs/delegation-guide-leaders",
  "/blogs/feedback-culture-teams-guide": "/blogs/team-communication-async-sync",
  "/blogs/spacelean-vs-notion-ai-task-management-comparison": "/blogs/spacelean-vs-notion-intelligent-workspace",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (REDIRECT_MAP[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = REDIRECT_MAP[pathname];
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/spacelean-core",
    "/&",
    "/$",
    "/blogs/:path*",
  ],
};
```

---

### Method 3: Next.js Configuration (`next.config.ts`)

Standard Next.js redirect configuration defined in `next.config.ts`:

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/spacelean-core", destination: "/space-lean-core", permanent: true },
      { source: "/&", destination: "/", permanent: true },
      { source: "/$", destination: "/", permanent: true },
      { source: "/blogs/managing-multiple-projects-sanity", destination: "/blogs/manage-multiple-projects", permanent: true },
      { source: "/blogs/delegation-mastery-leaders", destination: "/blogs/delegation-guide-leaders", permanent: true },
      { source: "/blogs/feedback-culture-teams-guide", destination: "/blogs/team-communication-async-sync", permanent: true },
      { source: "/blogs/spacelean-vs-notion-ai-task-management-comparison", destination: "/blogs/spacelean-vs-notion-intelligent-workspace", permanent: true },
    ];
  },
};

export default nextConfig;
```

---

### Method 4: Vercel Configuration (`vercel.json`)

If the site is deployed on Vercel:

```json
{
  "redirects": [
    { "source": "/spacelean-core", "destination": "/space-lean-core", "permanent": true },
    { "source": "/blogs/managing-multiple-projects-sanity", "destination": "/blogs/manage-multiple-projects", "permanent": true },
    { "source": "/blogs/delegation-mastery-leaders", "destination": "/blogs/delegation-guide-leaders", "permanent": true },
    { "source": "/blogs/feedback-culture-teams-guide", "destination": "/blogs/team-communication-async-sync", "permanent": true },
    { "source": "/blogs/spacelean-vs-notion-ai-task-management-comparison", "destination": "/blogs/spacelean-vs-notion-intelligent-workspace", "permanent": true }
  ]
}
```

---

### Method 5: Cloudflare Worker or Page Rules (DNS Edge Redirects)

If DNS passes through Cloudflare, create a Cloudflare Worker or Page Rule:

```javascript
// Cloudflare Worker Script
const REDIRECTS = new Map([
  ["/spacelean-core", "/space-lean-core"],
  ["/blogs/managing-multiple-projects-sanity", "/blogs/manage-multiple-projects"],
  ["/blogs/delegation-mastery-leaders", "/blogs/delegation-guide-leaders"],
  ["/blogs/feedback-culture-teams-guide", "/blogs/team-communication-async-sync"],
  ["/blogs/spacelean-vs-notion-ai-task-management-comparison", "/blogs/spacelean-vs-notion-intelligent-workspace"],
]);

addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (REDIRECTS.has(url.pathname)) {
    const target = REDIRECTS.get(url.pathname);
    event.respondWith(Response.redirect(url.origin + target, 301));
  }
});
```

---

### Method 6: Nginx Reverse Proxy Config (`nginx.conf`)

For custom Docker / VPS deployments using Nginx:

```nginx
# nginx.conf
location = /spacelean-core {
    return 301 https://spacelean.ai/space-lean-core;
}

location = /blogs/managing-multiple-projects-sanity {
    return 301 https://spacelean.ai/blogs/manage-multiple-projects;
}

location = /blogs/delegation-mastery-leaders {
    return 301 https://spacelean.ai/blogs/delegation-guide-leaders;
}

location = /blogs/feedback-culture-teams-guide {
    return 301 https://spacelean.ai/blogs/team-communication-async-sync;
}

location = /blogs/spacelean-vs-notion-ai-task-management-comparison {
    return 301 https://spacelean.ai/blogs/spacelean-vs-notion-intelligent-workspace;
}
```

---

## Non-Redirect Solutions & Codebase Fixes

While 301 redirects catch incoming traffic from external backlinks and search engine indexes, **non-redirect code fixes eliminate the source of broken 404 URLs inside the application**.

### 1. Internal Link Repair (Codebase Audit)
- **Issue**: Googlebot discovers 404 URLs by following internal links rendered on the website. For example, `components/Dashboardshowcase.tsx` contained `href="/spacelean-core"` (missing the hyphen).
- **Code Fix**: Update internal component link `href` from `/spacelean-core` to `/space-lean-core`.

### 2. Remove Stale Asset Preload Links (`app/layout.tsx` & `app/globals.css`)
- **Issue**: `app/layout.tsx` preloads `/fonts/Verity-Regular.woff2` and `/fonts/Verity-Bold.woff2`, but `/public/fonts/` is empty. Every page request forces browsers and Googlebot to issue 404 network requests for missing font files.
- **Code Fix**: Remove stale `<link rel="preload">` tags from `app/layout.tsx` and clean up `@font-face` definitions in `app/globals.css`.

### 3. Self-Referencing Canonical Tags & Metadata Alternates
- **Issue**: Missing canonical tags cause search engine crawlers to index query string variations (e.g. `/favicon.ico?favicon.636a61ca.ico`) as separate URLs.
- **Code Fix**: Verify Next.js `metadata.alternates.canonical` is defined on all dynamic routes (`app/blogs/[slug]/page.tsx`, `app/solutions/[slug]/page.tsx`, `app/compare/[slug]/page.tsx`).

### 4. Dynamic XML Sitemap Health (`app/sitemap.ts`)
- **Issue**: Valid routes like `/solutions/remote-teams` return 404 in Search Console if Googlebot crawls old cached versions prior to deployment.
- **Code Fix**: Ensure `app/sitemap.ts` dynamically fetches all active solution, blog, feature, and comparison slugs with updated `lastModified` timestamps.

---

## Google Search Console Re-Validation Steps

1. **Deploy Updates**: Deploy code fixes and 301 redirects to production (`spacelean.ai`).
2. **Verify Live Responses**:
   - `curl -I https://spacelean.ai/spacelean-core` (Expect HTTP `301 Moved Permanently` -> `/space-lean-core`).
   - `curl -I https://spacelean.ai/solutions/remote-teams` (Expect HTTP `200 OK`).
3. **Submit GSC Validation**:
   - Open **Google Search Console** > **Page Indexing** > **Not found (404)**.
   - Click **Validate Fix**.
   - Googlebot will recrawl the 10 URLs, receive 301 redirects or 200 OK responses, and mark the issue status as **Passed**.
