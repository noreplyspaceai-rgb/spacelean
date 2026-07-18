"use client";

import { motion, useInView } from "framer-motion";
import {
  Globe,
  ExternalLink,
  Search,
  Sparkles,
  ChevronDown,
  X,
  Radio,
  Link2,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useMemo } from "react";
import {
  socialPlatforms,
  PLATFORM_CATEGORIES,
  type SocialPlatform,
  type PlatformCategory,
} from "@/data/socialPlatforms";

// ─── Design tokens ───────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

// ─── Status badge ────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  Registered: {
    label: "Registered",
    icon: "✓",
    className:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 ring-1 ring-emerald-100",
  },
  "Coming Soon": {
    label: "Coming Soon",
    icon: "⏳",
    className:
      "bg-amber-50 text-amber-700 border border-amber-200 ring-1 ring-amber-100",
  },
  Planned: {
    label: "Planned",
    icon: "○",
    className:
      "bg-stone-50 text-stone-500 border border-stone-200 ring-1 ring-stone-100",
  },
};

// ─── Category icons (inline SVG for zero-dependency rendering) ────────────────
const CATEGORY_ICONS: Record<PlatformCategory, React.ReactNode> = {
  "Social Networks": (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  ),
  "Developer Communities": (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "Design Communities": (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  "Content Platforms": (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
};

const getPlatformIcon = (id: string): React.ReactNode => {
  switch (id) {
    case "linkedin":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "pinterest":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case "whatsapp":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.843.002-2.63-1.023-5.101-2.886-6.968C16.63 1.928 14.155.903 11.525.903c-5.44 0-9.866 4.415-9.87 9.846-.002 1.798.478 3.553 1.39 5.12l-1.013 3.705 3.822-.998c1.554.848 3.208 1.298 4.793 1.298z"/>
        </svg>
      );
    case "github":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "stackoverflow":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.986 21.865v-6.407h2.992v9.394H.022v-9.394h2.992v6.407H18.986zm-12.52-5.426l9.103 1.904.617-2.93-9.103-1.904-.617 2.93zm1.398-5.065l8.077 4.146 1.349-2.697-8.077-4.146-1.349 2.697zm2.721-4.525l6.39 6.388 2.122-2.122-6.39-6.388-2.122 2.122zm4.12-3.51l4.13 8.08 2.697-1.349-4.13-8.08-2.697 1.349zm6.182-1.916l-1.904 9.103 2.93.617 1.904-9.103-2.93-.617z"/>
        </svg>
      );
    case "reddit":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-5.99-1.72l1.24-3.91 3.99.85c-.01.22.07.45.24.62.4.4.96.51 1.47.35.52-.16.9-.6.99-1.12.1-.53-.12-1.07-.57-1.35-.45-.28-1.03-.24-1.43.1l-4.47-.95c-.2-.04-.41.05-.51.23l-1.52 4.81c-2.31.06-4.5.7-6.2 1.71-.56-.76-1.46-1.24-2.42-1.24-1.65 0-3 1.35-3 3 0 1.05.54 2.01 1.42 2.57-.02.16-.03.32-.03.48 0 3.84 4.45 6.97 9.97 6.97 5.53 0 9.97-3.13 9.97-6.97 0-.16-.01-.32-.03-.48.88-.56 1.42-1.52 1.42-2.57zm-18 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm11 4.5c-1.78 1.78-5.22 1.78-7 0-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0 1.39 1.39 4.19 1.39 5.58 0 .2-.2.51-.2.71 0 .2.2.2.51 0 .71zm-1.5-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5z"/>
        </svg>
      );
    case "quora":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.171 18.966c-1.547 1.637-3.766 2.651-6.223 2.651-1.399 0-2.709-.328-3.874-.913l-1.921 1.921c-.378.378-.992.378-1.37 0s-.378-.992 0-1.37l1.325-1.325c-2.029-1.916-3.284-4.636-3.284-7.655 0-5.785 4.69-10.475 10.475-10.475s10.475 4.69 10.475 10.475c0 2.894-1.173 5.515-3.076 7.421c-.376.378-.988.38-1.368.004-.38-.376-.382-.988-.006-1.368c1.554-1.558 2.513-3.702 2.513-6.057 0-4.713-3.82-8.533-8.533-8.533s-8.533 3.82-8.533 8.533c0 2.37.969 4.512 2.535 6.069.378.376.382.988.006 1.368-.376.38-.988.384-1.368.008-1.93-1.93-3.111-4.593-3.111-7.533 0-5.727 4.643-10.37 10.37-10.37s10.37 4.643 10.37 10.37c0 2.356-.786 4.53-2.112 6.275zm-6.223.109c1.94 0 3.633-.871 4.75-2.24l.006.006c.38-.376.384-.988.008-1.368-.376-.38-.988-.384-1.368-.008-1.077 1.055-2.529 1.699-4.132 1.699-3.277 0-5.933-2.656-5.933-5.933 0-3.277 2.656-5.933 5.933-5.933s5.933 2.656 5.933 5.933c0 1.258-.393 2.428-1.06 3.393-.334.484-.216 1.15.268 1.484s1.15.216 1.484-.268c.953-1.381 1.517-3.048 1.517-4.846 0-4.514-3.66-8.174-8.174-8.174s-8.174 3.66-8.174 8.174zm-2.029-4.877c-.503 0-.913.41-.913.913s.41.913.913.913.913-.41.913-.913-.41-.913-.913-.913z"/>
        </svg>
      );
    case "substack":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      );
    case "medium":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"/>
        </svg>
      );
    case "youtube":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case "beacons":
      return <Link2 className="w-4 h-4" />;
    case "microblog":
      return <Link2 className="w-4 h-4" />;
    case "sourceforge":
      return <Link2 className="w-4 h-4" />;
    default:
      return <Globe className="w-4 h-4" />;
  }
};

// ─── Platform Card ────────────────────────────────────────────────────────────
function PlatformCard({
  platform,
  index,
}: {
  platform: SocialPlatform;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const badge = STATUS_CONFIG[platform.status];

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07, ease: EASE }}
      className="group relative flex flex-col rounded-2xl bg-white border border-black/[0.07] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      style={{ borderTopWidth: 3, borderTopColor: "#06b6d4" }}
    >
      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-9 h-9 rounded-xl bg-black/[0.03] border border-black/[0.07] flex items-center justify-center flex-shrink-0 text-neutral-500 group-hover:text-cyan-600 transition-colors">
              {getPlatformIcon(platform.id)}
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-neutral-900 text-sm leading-tight truncate">
                {platform.name}
              </h3>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-medium mt-0.5 truncate">
                {platform.category}
              </p>
            </div>
          </div>
          {/* Status badge */}
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap ${badge.className}`}
          >
            <span>{badge.icon}</span>
            {badge.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-neutral-500 text-xs leading-relaxed flex-1 mb-4">
          {platform.description}
        </p>

        {/* CTA */}
        {platform.url ? (
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit SpaceLean on ${platform.name} (opens in new tab)`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white text-xs font-semibold px-4 py-2.5 hover:bg-cyan-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
          >
            Visit Profile
            <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden />
          </a>
        ) : (
          <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-100 text-neutral-400 text-xs font-semibold px-4 py-2.5 cursor-default select-none">
            {platform.status === "Coming Soon" ? "Coming Soon" : "Planned"}
          </span>
        )}
      </div>
    </motion.div>
  );
}



// ─── Hero Section ─────────────────────────────────────────────────────────────
function SocialPlatformsHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 border-b border-black/[0.06]">
      {/* Background graphic */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.4) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 right-0 w-[600px] h-[400px] rounded-full bg-cyan-100 blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-indigo-100 blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-neutral-400">
            <li>
              <Link href="/" className="hover:text-neutral-700 transition-colors">
                SpaceLean
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-neutral-600 font-medium">Social Media Platforms</li>
          </ol>
        </nav>

        <motion.div {...fadeUp(0.05)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-5 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" aria-hidden />
            Official Profiles
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-6xl font-normal tracking-tight leading-tight text-cyan-500 max-w-3xl mb-4"
        >
          Social Media{" "}
          <span className="font-bold text-5xl sm:text-7xl text-cyan-500">
            Platforms
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-4 max-w-2xl"
        >
          <span className="block border-l-4 border-cyan-400 pl-4">
            <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
              Discover every official SpaceLean profile across social networks,
              business directories, AI platforms, developer communities, review
              websites, and industry directories.
            </span>
          </span>
        </motion.p>

        <motion.div {...fadeUp(0.22)} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#platforms"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white text-sm font-semibold px-5 py-2.5 hover:bg-cyan-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            aria-label="Scroll to platform listing"
          >
            View Platforms
            <ChevronDown className="w-4 h-4" aria-hidden />
          </a>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
            {socialPlatforms.filter((p) => p.url).length} registered profiles
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Search & Filter Bar ──────────────────────────────────────────────────────
function SearchAndFilter({
  query,
  setQuery,
  activeCategory,
  setActiveCategory,
}: {
  query: string;
  setQuery: (v: string) => void;
  activeCategory: "All" | PlatformCategory;
  setActiveCategory: (v: "All" | PlatformCategory) => void;
}) {
  const categories: Array<"All" | PlatformCategory> = ["All", ...PLATFORM_CATEGORIES];

  return (
    <div className="sticky top-[72px] z-20 bg-white/90 backdrop-blur-md border-b border-black/[0.06] py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Search */}
        <div className="relative flex-shrink-0 max-w-md lg:max-w-xs w-full">
          <label htmlFor="platform-search" className="sr-only">
            Search platforms
          </label>
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
            aria-hidden
          />
          <input
            id="platform-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search platforms…"
            autoComplete="off"
            className="w-full rounded-xl border border-black/10 bg-white pl-9 pr-8 py-2 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400 transition"
            aria-label="Search platforms"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category filter — horizontal scroll on mobile */}
        <div
          role="tablist"
          aria-label="Filter by category"
          className="flex items-center gap-2.5 overflow-x-auto scrollbar-none pb-1 lg:pb-0 flex-nowrap -mx-4 px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0 scroll-smooth"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-1 ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-black/[0.04] text-neutral-600 hover:bg-black/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Client Component ────────────────────────────────────────────────────
export default function SocialPlatformsClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | PlatformCategory>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return socialPlatforms.filter((p) => {
      // Only include platforms that have redirect links (url is defined)
      const hasRedirect = !!p.url;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      return hasRedirect && matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const CHANNEL_IDS = ["linkedin", "instagram", "pinterest", "whatsapp", "youtube"];

  const { channels, profiles } = useMemo(() => {
    const channelsList: SocialPlatform[] = [];
    const profilesList: SocialPlatform[] = [];

    filtered.forEach((p) => {
      if (CHANNEL_IDS.includes(p.id)) {
        channelsList.push(p);
      } else {
        profilesList.push(p);
      }
    });

    return { channels: channelsList, profiles: profilesList };
  }, [filtered]);

  return (
    <>
      <SocialPlatformsHero />
      <SearchAndFilter
        query={query}
        setQuery={setQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Platform listing */}
      <main
        id="platforms"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        aria-label="Platform listing"
      >
        {channels.length > 0 || profiles.length > 0 ? (
          <div className="space-y-16">
            {/* Registered Channels Section */}
            {channels.length > 0 && (
              <section aria-labelledby="registered-channels">
                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <Radio className="w-4 h-4" />
                  </span>
                  <div>
                    <h2
                      id="registered-channels"
                      className="text-lg font-semibold text-neutral-900 tracking-tight leading-tight"
                    >
                      Registered Channels
                    </h2>
                    <p className="text-[11px] text-neutral-400 font-medium">
                      {channels.length} channel{channels.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {channels.map((platform, i) => (
                    <PlatformCard key={platform.id} platform={platform} index={i} />
                  ))}
                </div>
              </section>
            )}

            {/* Registered Profiles Section */}
            {profiles.length > 0 && (
              <section aria-labelledby="registered-profiles">
                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <Link2 className="w-4 h-4" />
                  </span>
                  <div>
                    <h2
                      id="registered-profiles"
                      className="text-lg font-semibold text-neutral-900 tracking-tight leading-tight"
                    >
                      Registered Profiles
                    </h2>
                    <p className="text-[11px] text-neutral-400 font-medium">
                      {profiles.length} profile{profiles.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {profiles.map((platform, i) => (
                    <PlatformCard key={platform.id} platform={platform} index={i} />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center" role="status">
            <Globe className="w-10 h-10 text-neutral-300 mb-4" aria-hidden />
            <p className="text-neutral-500 font-medium mb-1">No platforms found</p>
            <p className="text-neutral-400 text-sm">
              Try a different search term or select&nbsp;
              <button
                onClick={() => { setQuery(""); setActiveCategory("All"); }}
                className="text-cyan-600 underline underline-offset-2 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
              >
                All
              </button>
              &nbsp;to see every platform.
            </p>
          </div>
        )}

        {/* Stats summary */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: "Total Platforms", value: socialPlatforms.filter((p) => p.url).length },
            { label: "Registered Channels", value: socialPlatforms.filter((p) => p.url && CHANNEL_IDS.includes(p.id)).length },
            { label: "Registered Profiles", value: socialPlatforms.filter((p) => p.url && !CHANNEL_IDS.includes(p.id)).length },
            { label: "Active Categories", value: new Set(socialPlatforms.filter((p) => p.url).map((p) => p.category)).size },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-2xl bg-black/[0.02] border border-black/[0.07] px-5 py-4 text-center"
            >
              <p className="text-2xl font-bold text-cyan-500 mb-1">{value}</p>
              <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-medium">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </main>
    </>
  );
}
