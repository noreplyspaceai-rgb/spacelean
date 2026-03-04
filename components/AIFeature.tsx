'use client';

import { useState } from 'react';
import Image from 'next/image';

const exampleTasks = [
  'Set up project repository and development environment',
  'Design user authentication flow',
  'Create database schema for users and projects',
  'Implement REST API endpoints',
  'Build responsive UI components',
  'Add unit and integration tests',
  'Deploy to staging environment',
];

export default function AIFeature() {
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTasks, setShowTasks] = useState(false);

  const handleGenerate = () => {
    if (!inputValue.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowTasks(true);
    }, 1500);
  };

  return (
    <section id="ai-feature" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-black/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/5 text-neutral-800 text-sm font-medium rounded-full mb-6 border border-black/10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI-Powered
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight mb-6">
              Let AI break down your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900">
                projects
              </span>
            </h2>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Describe your project in plain language and watch as our AI assistant
              automatically generates a complete breakdown of actionable tasks.
              Save hours of planning and get started faster.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Natural language project description",
                "Automatic task decomposition",
                "Smart priority assignment",
                "Estimated time allocation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-600">
                  <span className="flex-shrink-0 w-5 h-5 bg-black/5 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Demo */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-2xl shadow-black/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-neutral-300 rounded-full" />
                <div className="w-3 h-3 bg-neutral-300 rounded-full" />
                <div className="w-3 h-3 bg-neutral-300 rounded-full" />
                <span className="ml-4 text-sm text-neutral-500">AI Task Generator</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-neutral-600 mb-2">
                    Describe your project:
                  </label>
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="e.g., Build a modern e-commerce website with user authentication, product catalog, and payment integration..."
                    className="w-full h-32 px-4 py-3 bg-white border border-black/10 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-800 resize-none"
                  />
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !inputValue.trim()}
                  className="w-full py-3 px-6 bg-black text-white font-medium rounded-xl hover:bg-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Generating Tasks...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Generate Tasks with AI
                    </>
                  )}
                </button>

                {showTasks && (
                  <div className="mt-4 space-y-2 animate-fadeIn">
                    <p className="text-sm text-neutral-500 mb-3">Generated Tasks:</p>
                    {exampleTasks.map((task, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-black/10"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="text-sm text-neutral-700">{task}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Decorative Image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl shadow-black/10 hidden lg:block">
              <Image
                src="/remote.jpg"
                alt="Project planning collaboration"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
