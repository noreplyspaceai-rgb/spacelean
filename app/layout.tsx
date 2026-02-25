import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SPACE LEAN | AI Task Breakdown Tool & Automatic Project Scheduler",
  description:
    "Transform notes into tasks AI-powered efficiency. SPACE LEAN is an automatic project scheduler and AI task breakdown tool featuring Kanban boards and smart prioritization. Boost team productivity by 40%.",
  keywords: [
    "AI task breakdown tool",
    "turn notes into tasks AI",
    "automatic project scheduler",
    "AI Task Management",
    "Kanban Board",
    "Task Management Software",
    "Project Management",
    "Team Collaboration",
    "AI Task Generator",
    "Productivity Tools",
  ],
  authors: [{ name: "Space Lean Inc." }],
  creator: "Space Lean Inc.",
  publisher: "Space Lean Inc.",
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
    siteName: "SPACE LEAN",
    title: "SPACE LEAN | AI Task Management & Kanban Board for Teams",
    description:
      "Transform your workflow with SPACE LEAN - the AI-powered task management system featuring Kanban boards, smart task prioritization, and automatic task generation.",
    images: [
      {
        url: "/marketing.jpg",
        width: 1200,
        height: 630,
        alt: "SPACE LEAN - AI Task Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPACE LEAN | AI Task Management & Kanban Board",
    description:
      "Transform your workflow with AI-powered task management. Kanban boards, smart prioritization, and automatic task generation.",
    images: [
      "/marketing.jpg",
    ],
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
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#fafafa] text-primary-text`}
      >
        <SmoothScroll />
        <CustomCursor />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
