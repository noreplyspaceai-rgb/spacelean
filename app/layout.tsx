import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "SpaceLean | AI-Powered Lean Project Management & Construction Scheduling Software",
  description:
    "SpaceLean is the AI-native Digital Construction Brain that auto-generates construction schedules from BIM models, predicts critical path risks, and optimizes crew scheduling. Free to start — try it today.",
  keywords: [
    "SpaceLean",
    "AI project management software",
    "AI construction scheduling software",
    "Digital Construction Brain",
    "lean project management tool",
    "BIM to schedule automation",
    "4D construction planning AI",
    "AI-powered construction sequencing",
    "construction knowledge graph",
    "predictive critical path software",
    "automated construction planning",
    "AI task management",
    "Synchro 4D alternative",
    "Primavera P6 alternative",
  ],
  authors: [{ name: "SpaceLean Inc." }],
  creator: "SpaceLean Inc.",
  publisher: "SpaceLean Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacelean.ai",
    siteName: "SpaceLean",
    title: "SpaceLean | AI-Powered Lean Project Management & Construction Scheduling",
    description:
      "Auto-generate construction schedules from BIM models in seconds. SpaceLean predicts risks, optimizes crews, and adapts in real time. Free to start.",
    images: [
      {
        url: "/marketing.jpg",
        width: 1200,
        height: 630,
        alt: "SpaceLean — AI-Powered Lean Project Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceLean | AI-Powered Lean Project Management Software",
    description:
      "Auto-generate construction schedules from BIM models in seconds. Predict risks, optimize crews, and adapt in real time.",
    images: ["/marketing.jpg"],
    creator: "@spacelean",
  },
  alternates: {
    canonical: "https://spacelean.ai",
  },
  metadataBase: new URL("https://spacelean.ai"),
  verification: {
    google: "fZiGZZYWb8sosgKhEut7JJEHdH1KGKEAiEmgUYtGMqY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Preload critical fonts to reduce FOIT */}
        <link rel="preload" href="/fonts/Verity-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Verity-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
      </head>
      <body
        suppressHydrationWarning
        className="leading-[0.9] antialiased min-h-screen bg-white text-neutral-900"
      >
        {/* Global blurred gradient + grain background */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          {/* Soft radial gradient backdrop */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(15,23,42,0.08), transparent 55%), radial-gradient(circle at bottom right, rgba(15,23,42,0.06), transparent 55%), linear-gradient(to bottom, #f9fafb, #ffffff)",
            }}
          />

          {/* Blurred accent blobs */}
          <div className="absolute -top-40 -right-24 w-80 h-80 bg-slate-200 rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/3 -left-32 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[420px] h-[220px] bg-slate-200 rounded-[999px] blur-3xl opacity-70" />

          {/* Fine grain layer */}
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "180px 180px",
            }}
          />
        </div>

        <SmoothScroll />
        <CustomCursor />

        {/* Page Content */}
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>

        <WhatsAppButton />
      </body>
    </html>
  );
}
