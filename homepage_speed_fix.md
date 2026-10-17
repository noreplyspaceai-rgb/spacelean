# Homepage Speed Fix & Performance Optimization Plan

Based on the **sitespeed.io** performance audit of the [SpaceLean](https://spacelean.ai) homepage, here is a detailed breakdown of the bottlenecks and an actionable plan to resolve them.

---

## 📊 Performance Diagnostics Summary

According to the sitespeed.io report, the homepage has the following core performance characteristics:

| Metric | Measured Value | Target Value | Status | Impact & Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Fully Loaded Time** | **5.680 s** | **< 2.500 s** | 🔴 Critical | Total time to load all assets and finish executing scripts. |
| **Total Transfer Size** | **3.7 MB** | **< 1.5 MB** | 🔴 Critical | Extremely heavy payload, mostly caused by unoptimized assets. |
| **Total Requests** | **67** | **< 40** | 🟡 Needs Work | High request count increases network contention and latency. |
| **Total Blocking Time (TBT)** | **556 ms** | **< 200 ms** | 🔴 Critical | High CPU main thread block during initialization. |
| **Largest Contentful Paint (LCP)** | **2.232 s** | **< 1.500 s** | 🟡 Needs Work | Time to render the primary visual element (3D model container). |
| **First Contentful Paint (FCP)** | **1.452 s** | **< 1.000 s** | 🟡 Needs Work | Initial paint is delayed by render-blocking resources. |
| **Render-blocking Duration** | **1.090 s** | **< 0.300 s** | 🔴 Critical | CSS, font files, and initial JS scripts block the HTML parser. |
| **Cumulative Layout Shift (CLS)** | **0.000** | **< 0.100** | 🟢 Excellent | No layout shifts. The page layout is visually stable. |

---

## 🔍 Root Cause Analysis

1. **Massive 3D GLB Model (13.3 MB)**
   - **The Problem**: The homepage eagerly loads `/city_pack_8.glb` within the `<model-viewer>` component. The browser downloads the entire 13.3 MB file on page load, which consumes available bandwidth, blocks critical scripts, and results in a long network "Tail" (3.448 s from LCP to Fully Loaded).
   - **The Catch**: While the model is loading, the container is set to `opacity: 0`, leaving a large blank visual gap on screen.

2. **Heavy Render-Blocking JS (All 250+ Country Flags)**
   - **The Problem**: The [Header.tsx](file:///home/user/Documents/spacelearn/components/Header.tsx) component imports country flag SVGs using `import * as Flags from "country-flag-icons/react/3x2"`. Because flags are mapped dynamically at runtime via `(Flags as Record<string, FlagComponent>)[iso]`, the bundler cannot tree-shake this package. It bundles SVGs for **every country in the world** into the layout bundle, bloating the initial JS chunk.

3. **Eager Video Preloading (2.1 MB)**
   - **The Problem**: The [VideoHero.tsx](file:///home/user/Documents/spacelearn/components/VideoHero.tsx) component uses `<video preload="auto" ...>` for its first slide. This forces the browser to pull down the **2.1 MB** video file (`Space lean Systems Infrastructure Engineering Software.mp4`) as soon as the page is parsed, competing directly with high-priority CSS, font, and script assets.

4. **CPU Main Thread Bottlenecks (Framer Motion & Hydration)**
   - **The Problem**: The homepage features multiple heavy client-side interactive elements (such as `HeroSection` floating particles, rotating SVGs, orbit icons, laptop scroll animations, and dynamic dropdowns). High hydration costs on React 19 lead to **5 CPU long tasks** (longest: 477 ms), keeping the main thread busy and driving up TBT to 556 ms.

5. **Bypassing Image Optimization (`next/image`)**
   - **The Problem**: Key images in [AudienceSection.tsx](file:///home/user/Documents/spacelearn/components/AudienceSection.tsx) (fetching high-res Unsplash URLs with `w=800`) and [Dashboardshowcase.tsx](file:///home/user/Documents/spacelearn/components/Dashboardshowcase.tsx) are rendered with standard `<img>` tags. This bypasses Next.js's automated WebP/AVIF format conversion, responsive resizing, and modern priority optimizations.

---

## 🛠️ Step-by-Step Optimization Plan

---

### Step 1: Optimize the 3D GLB Model & Implement a Poster Fallback

We will replace the heavy **13.3 MB** model with the optimized **560 KB** version and add a static poster image that acts as a placeholder while the script and model load in the background.

#### 1. File Swap
In [components/HeroSection.tsx](file:///home/user/Documents/spacelearn/components/HeroSection.tsx), switch the model source path to use `ImageToStl.com_building-1.glb`:
* **Before**: `src="/city_pack_8.glb"`
* **After**: `src="/ImageToStl.com_building-1.glb"` (This reduces the 3D file size by **95.8%**!)

#### 2. Model Viewer Settings
Configure `<model-viewer>` to load lazily, and supply a lightweight poster image (a pre-rendered WebP screenshot of the model) so that the viewport is populated instantly:

```tsx
// In components/HeroSection.tsx (line 364)
<model-viewer
  ref={modelRef}
  src="/ImageToStl.com_building-1.glb"
  alt="Interactive 3D BIM building model showing digital construction planning and AI project scheduling"
  camera-controls
  auto-rotate
  shadow-intensity="1"
  disable-zoom
  loading="lazy"
  reveal="onload"
  poster="/dashboard.webp" // Fast static placeholder
  style={{ width: "100%", height: "100%", background: "transparent" }}
/>
```

---

### Step 2: Tree-Shake Country Flag Icons in Header

Instead of importing the entire flag set, import only the **7 specific flags** used by the contact dropdown.

#### Code Modifications:
Update [components/Header.tsx](file:///home/user/Documents/spacelearn/components/Header.tsx#L7):

```tsx
// Replace import * as Flags from "country-flag-icons/react/3x2"; with:
import US from "country-flag-icons/react/3x2/US";
import CA from "country-flag-icons/react/3x2/CA";
import AE from "country-flag-icons/react/3x2/AE";
import SA from "country-flag-icons/react/3x2/SA";
import KW from "country-flag-icons/react/3x2/KW";
import SG from "country-flag-icons/react/3x2/SG";
import MY from "country-flag-icons/react/3x2/MY";

// Map them statically to avoid dynamic reflection bundler bloat
const FlagsMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  US,
  CA,
  AE,
  SA,
  KW,
  SG,
  MY,
};

function FlagIcon({ iso, className }: { iso: string; className?: string }) {
  const FlagComponent = FlagsMap[iso];
  if (!FlagComponent) return null;
  return <FlagComponent className={className} />;
}
```

This simple change will strip hundreds of unused SVG country flags from the layout bundle, accelerating the First Contentful Paint.

---

### Step 3: Defer and Lazy-Load Video Assets

The slideshow videos in [VideoHero.tsx](file:///home/user/Documents/spacelearn/components/VideoHero.tsx) should not download during initial page parsing. 

#### Code Modifications:
Update [components/VideoHero.tsx](file:///home/user/Documents/spacelearn/components/VideoHero.tsx#L107-L120):
1. Change `preload` to `"none"` or `"metadata"` on initial load.
2. Initialize preloading dynamically only when the component is hydrated, or when a slide is active.

```tsx
{SLIDES.map((s, i) => (
  <video
    key={s.id}
    ref={(el) => { videoRefs.current[i] = el; }}
    src={s.videoSrc}
    poster={s.poster}
    muted
    loop
    playsInline
    // Avoid preloading all videos eagerly. Preload metadata only.
    preload={i === current ? "auto" : "none"}
    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
      i === current ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  />
))}
```

---

### Step 4: Implement Dynamic Imports for Below-the-Fold Components

Several large client components are loaded below the fold but are hydrated eagerly. We can use Next.js dynamic imports (`next/dynamic`) to split the bundle and load them only when needed.

#### Code Modifications:
In [app/page.tsx](file:///home/user/Documents/spacelearn/app/page.tsx), convert below-the-fold components to dynamic imports with server-side rendering disabled or deferred:

```tsx
import dynamic from "next/dynamic";

// Keep HeroSection, WhyUs, and DashboardShowcase standard to maintain fast LCP/above-the-fold layout
import HeroSection from "@/components/HeroSection";
import WhyUs from "@/components/WhyUs";
import DashboardShowcase from "@/components/Dashboardshowcase";

// Dynamically import heavy below-the-fold features
const AudienceSection = dynamic(() => import("@/components/AudienceSection"), { ssr: true });
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), { ssr: true });
const VideoHero = dynamic(() => import("@/components/VideoHero"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const AskSpaceLeanAI = dynamic(() => import("@/components/AskSpaceLeanAI"), { ssr: false });
```

---

### Step 5: Convert Standard `<img>` Tags to Next.js `<Image>` Components

Next.js `<Image>` component automatically compresses images to WebP/AVIF format and provides responsive resolutions.

#### 1. In AudienceSection:
Update [components/AudienceSection.tsx](file:///home/user/Documents/spacelearn/components/AudienceSection.tsx#L65-L73) to use the optimized loader:

```tsx
import Image from "next/image";

// Inside the audiences map return statement:
<Image
  src={a.image}
  alt={a.title}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  priority={false}
  loading="lazy"
  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500"
  style={{ opacity: isActive ? 0.45 : 0.25 }}
/>
```
*(Note: Container will need styling `relative` which is already present on the parent div).*

#### 2. In DashboardShowcase:
Update [components/Dashboardshowcase.tsx](file:///home/user/Documents/spacelearn/components/Dashboardshowcase.tsx#L112-L121):

```tsx
import Image from "next/image";

// inside screen container
<div className="flex-1 overflow-hidden relative w-full h-full">
  <Image
    src="/dashboard.webp"
    alt="AI-powered construction scheduling dashboard showing Gantt view and critical path details"
    fill
    sizes="(max-width: 1024px) 100vw, 60vw"
    priority={false}
    loading="lazy"
    className="object-cover object-top"
    draggable={false}
  />
</div>
```

---

### Step 6: Streamline CPU Animations and DOM Nodes

In [components/HeroSection.tsx](file:///home/user/Documents/spacelearn/components/HeroSection.tsx), reduce task slicing stress:
1. **Reduce floating particle count**: Modify `FloatingParticles` to render fewer elements (e.g., 4 particles instead of 8).
2. **De-duplicate rotating SVGs**: The SVGs with `animate={{ rotate: 360 }}` run continuously. Simplify their orbital calculations or use standard CSS animations (`animation: spin 30s linear infinite`) which are handled directly by the browser's compositor thread (off the main thread).

---

## 📈 Post-Optimization Performance Projections

By implementing these fixes, we target the following improvements on the next sitespeed.io run:

* **Page weight**: Drops from **3.7 MB** to **< 1.0 MB** (~73% reduction).
* **Fully loaded time**: Speeds up from **5.680 s** to **< 2.000 s**.
* **Largest Contentful Paint (LCP)**: Drops from **2.232 s** to **< 1.200 s**.
* **Total Blocking Time (TBT)**: Drops from **556 ms** to **< 150 ms** (~73% faster interactions).
