import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SPACE LEAN | AI Task Management & Kanban Board for Teams",
  description: "Transform your workflow with SPACE LEAN - the AI-powered task management system featuring Kanban boards, smart task prioritization, calendar views, and automatic task generation. Boost team productivity by 40%.",
  keywords: ["AI Task Management", "Kanban Board", "Task Management Software", "Project Management", "Team Collaboration", "AI Task Generator", "Productivity Tools"],
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
    url: "https://spacelean.com",
    siteName: "SPACE LEAN",
    title: "SPACE LEAN | AI Task Management & Kanban Board for Teams",
    description: "Transform your workflow with SPACE LEAN - the AI-powered task management system featuring Kanban boards, smart task prioritization, and automatic task generation.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "SPACE LEAN - AI Task Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPACE LEAN | AI Task Management & Kanban Board",
    description: "Transform your workflow with AI-powered task management. Kanban boards, smart prioritization, and automatic task generation.",
    images: ["https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1200&auto=format&fit=crop"],
    creator: "@spacelean",
  },
  alternates: {
    canonical: "https://spacelean.com",
  },
  metadataBase: new URL("https://spacelean.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
