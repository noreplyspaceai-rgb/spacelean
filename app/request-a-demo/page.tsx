import DemoRequest from '@/components/DemoRequest';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Demo - SPACE LEAN',
  description: 'Schedule a personalized demo of SPACE LEAN, the AI-powered task management platform. See how our intelligent Kanban boards, smart scheduling, and AI task generation can transform your workflow.',
  alternates: {
    canonical: '/request-a-demo',
  },
  openGraph: {
    title: 'Request a Demo - SPACE LEAN',
    description: 'Schedule a personalized demo of SPACE LEAN, the AI-powered task management platform.',
    type: 'website',
  },
};

import { Suspense } from 'react';

export default function RequestDemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DemoRequest />
    </Suspense>
  );
}
