import Link from "next/link";
import Image from "next/image";
import { FEATURES } from "./space-lean-core/data";
import { comparisons } from "@/lib/compare-data";

const footerLinks = {
  core: {
    title: "Core",
    links: [
      { label: "Space Lean Core", href: "/space-lean-core" },
      ...FEATURES.map((feature) => ({
        label: feature.title,
        href: `/space-lean-core/${feature.slug}`,
      })),
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Technology & VeritasGraph", href: "/technology" },
      { label: "Blog", href: "/blogs" },
      { label: "Videos", href: "/videos" },
    ],
  },
  compare: {
    title: "Compare",
    links: comparisons.map((comparison) => ({
      label: `SpaceLean vs ${comparison.competitorName}`,
      href: `/compare/${comparison.slug}`,
    })),
  },
  otherProducts: {
    title: "Space AI Ecosystem",
    links: [
      { label: "pmspace", href: "https://pmspace.ai" },
      { label: "space-sign", href: "https://space-sign.ai" },
      { label: "space-capture", href: "https://spacecapture.ai" },
      { label: "space-lizit", href: "https://spacelizit.com" },
      { label: "spacehr", href: "https://spacehr.net" },
      { label: "spacelean", href: "https://spacelean.ai" },
      { label: "spacenexus", href: "https://spacenexus.net" },
      { label: "spacecrm", href: "https://spacecrm.net" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "For General Contractors", href: "/solutions/for-gcs" },
      { label: "For Owners", href: "/solutions/for-owners" },
      { label: "For Consultants", href: "/solutions/for-consultants" },
      { label: "For Engineering Teams", href: "/solutions/engineering-teams" },
      { label: "For Remote Teams", href: "/solutions/remote-teams" },
      { label: "For Startups", href: "/solutions/startups" },
      { label: "For Product Teams", href: "/solutions/product-teams" },
      { label: "Industrial Projects", href: "/solutions/industrial" },
      { label: "Infrastructure Projects", href: "/solutions/infrastructure" },
      { label: "Commercial Projects", href: "/solutions/commercial" },
      { label: "Ideal Projects", href: "/solutions/ideal-projects" },
      { label: "Partners Program", href: "/solutions/partners-program" },
    ],
  },
};

const footerBaseLinks = [
  { label: "Features", href: "/features" },
  { label: "Technology & VeritasGraph", href: "/technology" },
  { label: "Pricing", href: "/pricing" },
  { label: "AI Task Generator", href: "/tool" },
  { label: "Engineering Sprint Scheduling", href: "/solutions/engineering-teams" },
  { label: "Sprint Planning Guide", href: "/blogs/sprint-planning-engineering-teams" },
  { label: "Lean PM Software", href: "/blogs/lean-project-management-software" },
  { label: "OKR Management Guide", href: "/blogs/okr-management-complete-guide" },
  { label: "OKR Templates", href: "/blogs/okr-templates-every-team" },
  { label: "OKR vs KPI", href: "/blogs/okr-vs-kpi" },
  { label: "OKR vs SMART Goals", href: "/blogs/okr-vs-smart-goals" },
  { label: "Best OKR Software", href: "/blogs/okr-software-comparison" },
  { label: "Comparisons", href: "/compare" },
  { label: "Blog", href: "/blogs" },
  { label: "Request a Demo", href: "/request-a-demo" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/space-lean-594724418/",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/spacelean1/",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 6.98 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Spacelean-w2g",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "Social Media Platforms",
    href: "/social-media-platforms",
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} aria-hidden="true">
        <title>Social Media Platforms</title>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className=" text-stone-900 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 lg:gap-8 mb-20">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/icononly_transparent_nobuffer.png"
                alt="Space Lean"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-black tracking-tighter text-stone-900">
                SPACE<span className="text-stone-600 font-light">LEAN</span>
              </span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed max-w-xs mb-8">
              AI-powered construction project management and scheduling platform. Convert BIM models into 4D plans, predict critical path risks, and optimize trade crews.
            </p>
            <div className="w-full max-w-xs">
              <label className="block text-[11px] font-bold text-stone-900 uppercase tracking-[0.2em] mb-3">
                Subscribe
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400"
                  suppressHydrationWarning
                />
                <button
                  type="button"
                  className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-700 transition-colors"
                  suppressHydrationWarning
                >
                  Submit
                </button>
              </div>
            </div>

              {/* ── Global Contact Numbers ─────────────────────── */}
              <div className="mt-8">
                <p className="text-[11px] font-bold text-stone-900 uppercase tracking-[0.2em] mb-4">
                  Global Contact Numbers
                </p>
                <ul className="space-y-2">
                  {[
                    { country: "USA",          phone: "+1 646 421 5740" },
                    { country: "Canada",       phone: "+1 (979) 326-9493" },
                    { country: "UAE",          phone: "+971 56 256 7509" },
                    { country: "Saudi Arabia", phone: "+966 56 208 1999" },
                    { country: "Kuwait",       phone: "+965 9724 3755" },
                    { country: "Singapore",    phone: "+65 86 111 900" },
                    { country: "Malaysia",     phone: "+60 10 660 7357" },
                  ].map(({ country, phone }) => (
                    <li key={country}>
                      <a
                        href={`tel:${phone.replace(/[\s()+-]/g, "")}`}
                        aria-label={`Call ${country}: ${phone}`}
                        className="group flex items-center gap-2.5 py-1 rounded transition-colors duration-200"
                      >
                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0 text-stone-400 group-hover:text-purple-500 transition-colors duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.655 1.277-3.018 2.93-3.083L6 3.25l2.318 4.24-.927.927a.75.75 0 00-.17.802 10.528 10.528 0 005.56 5.56.75.75 0 00.802-.17l.927-.927L18.75 16l-.005.82c-.065 1.653-1.428 2.93-3.083 2.93C8.546 19.75 4.25 15.454 4.25 10.138V9.5a.75.75 0 00-1.5 0v.638A9.01 9.01 0 002.25 6.338z" />
                        </svg>
                        <span className="text-sm text-stone-600 group-hover:text-purple-700 transition-colors duration-200">
                          <span className="font-semibold text-stone-900 group-hover:text-purple-800 transition-colors duration-200">
                            {country}
                          </span>
                          {" "}{phone}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>

          {/* Nav Sections */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-[11px] font-bold text-stone-900 uppercase tracking-[0.2em] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-600 hover:text-stone-900 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Powered by VeritasGraph Attribution Line ─────────────────────── */}
        <div className="mb-12 rounded-xl bg-purple-50/80 border border-purple-200/70 px-5 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm sm:text-base text-stone-800 shadow-xs">
          <p className="flex flex-wrap items-center gap-2 leading-relaxed">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-600 text-white font-bold text-xs uppercase tracking-wider">
              Powered by
            </span>
            <a
              href="https://github.com/bibinprathap/VeritasGraph"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-stone-900 hover:text-purple-700 underline decoration-purple-400 underline-offset-4 transition-colors text-base sm:text-lg"
            >
              VeritasGraph
            </a>
            <span className="text-purple-300 font-bold">•</span>
            <span className="font-medium text-stone-700">
              Verifiable AI search with source attribution & GraphRAG knowledge-graph reasoning.
            </span>
          </p>
          <div className="flex items-center gap-4 flex-shrink-0 text-sm font-semibold">
            <Link
              href="/technology"
              className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-900 hover:underline transition-colors"
            >
              How it works →
            </Link>
            <a
              href="https://bibinprathap.github.io/VeritasGraph/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Docs ↗
            </a>
          </div>
        </div>





        {/* Bottom Strip */}
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[12px] text-stone-600 font-medium">
              © 2026 SpaceLean AI Inc.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {footerBaseLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[12px] text-stone-600 hover:text-stone-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[12px] text-stone-600 hover:text-stone-900 transition-colors">Terms of Service</Link>
              <Link href="/security" className="text-[12px] text-stone-600 hover:text-stone-900 transition-colors">Security</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-stone-600 hover:text-stone-900 transition-colors duration-300"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
