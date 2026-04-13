import DemoRequest from '@/components/DemoRequest';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Demo | SpaceLean AI Task Management Platform',
  description: 'Book a free personalized demo of SpaceLean. See how AI-powered task management, smart scheduling, and intelligent Kanban boards help teams deliver projects 40% faster.',
  keywords: [
    'SpaceLean demo',
    'AI task management demo',
    'project management software demo',
    'free demo request',
    'SpaceLean trial',
    'AI productivity tool demo',
  ],
  alternates: {
    canonical: '/request-a-demo',
    languages: {
      "en-US": "/request-a-demo",
      "en-GB": "/request-a-demo",
      "en-IN": "/request-a-demo",
      "x-default": "/request-a-demo",
    },
  },
  openGraph: {
    title: 'Request a Free Demo | SpaceLean AI',
    description: 'See how SpaceLean AI-powered task management helps teams deliver projects 40% faster. Book your free personalized demo today.',
    type: 'website',
    images: ['/marketing.jpg'],
  },
};

const benefits = [
  'AI-powered task breakdown and prioritization',
  'Smart scheduling that adapts to your team',
  'Real-time collaboration across all projects',
  'Custom workflows for any industry',
  'Enterprise-grade security (SOC 2, AES-256)',
  'Dedicated onboarding and support',
];

export default function RequestDemoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Request a Demo - SpaceLean',
    description: 'Book a free personalized demo of SpaceLean AI-powered task management platform.',
    provider: {
      '@type': 'Organization',
      name: 'SpaceLean',
      url: 'https://spacelean.ai',
    },
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Request a Demo',
      target: 'https://spacelean.ai/request-a-demo',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Server-rendered content for SEO */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            See SpaceLean in Action
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a personalized walkthrough of SpaceLean&apos;s AI-powered task management platform. Our team will show you how to streamline workflows, automate task breakdowns, and deliver projects faster.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading...</div>}>
        <DemoRequest />
      </Suspense>
    </>
  );
}
