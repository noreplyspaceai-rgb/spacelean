"use client";

import { useState } from "react";
import Link from "next/link";

const features = [
  {
    id: "kanban",
    title: "Smart Kanban Board",
    description:
      "AI-powered visual workflows that learn your patterns. Watch tasks flow intelligently from backlog to completion with automated suggestions.",
  },
  {
    id: "calendar",
    title: "Intelligent Scheduling",
    description:
      "Let AI optimize your calendar. Smart deadline detection and auto-scheduling ensure you never miss what matters most.",
  },
  {
    id: "ai",
    title: "AI Task Generation",
    description:
      "Simply describe your vision. Our AI instantly breaks complex projects into structured, prioritized action items.",
  },
];

export default function HeroSection() {
  const [activeFeature, setActiveFeature] = useState("kanban");

  return (
    <>
      {/* HERO - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/50 pointer-events-none" />
        <div className="absolute inset-0 pattern-dots pointer-events-none opacity-50" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            The future of work is{" "}
            <em className="not-italic font-serif italic">intelligent</em>.
            <br />
            Let AI{" "}
            <em className="not-italic font-serif italic text-orange-500">
              orchestrate
            </em>{" "}
            your success.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Harness the power of next-generation AI to transform chaos into
            clarity. Your autonomous task companion that thinks ahead, adapts in
            real-time, and keeps you light-years ahead of your deadlines.
          </p>

          {/* CTA Button */}
          <Link
            href="https://cad.spaceaiapp.com/lean"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            Start for free
            <span className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* PRODUCTIVITY POWERHOUSE SECTION */}
      <section className="pt-10 pb-20 lg:pt-12 lg:pb-28 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/80 to-blue-50/30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your AI-Powered Command Center
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience intelligent task management with AI that learns,
              adapts, and automates. Every workflow becomes smarter, every
              deadline stays on track.
            </p>
          </div>

          {/* Feature Showcase */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Feature Cards */}
            <div className="lg:col-span-4 space-y-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    activeFeature === feature.id
                      ? "bg-white shadow-lg border-l-4 border-l-gray-900"
                      : "bg-gray-50 border-l-4 border-l-transparent hover:bg-gray-100"
                  }`}
                >
                  <h3
                    className={`font-semibold text-lg mb-2 ${
                      activeFeature === feature.id
                        ? "text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </button>
              ))}

              {/* Slide Indicators */}
              <div className="flex items-center gap-2 pt-4">
                <div className="w-8 h-1 bg-gray-900 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Right: UI Mockup */}
            <div className="lg:col-span-8">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gray-700/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-600/20 rounded-full blur-2xl" />

                {/* Mock UI Windows */}
                <div className="relative flex gap-4">
                  {/* Inbox Panel */}
                  <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gray-800 text-white px-4 py-3 flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-medium text-sm">Inbox</span>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-400 pb-2 border-b">
                        <span>Add a task, or use</span>
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                          /
                        </span>
                        <span>for actions</span>
                      </div>

                      {/* Task Items */}
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-gray-800">
                          Marketing presentation
                        </p>
                        <p className="text-xs text-gray-500">Due Friday</p>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                            <span className="text-xs text-white">📅</span>
                          </span>
                          <span className="w-5 h-5 bg-orange-400 rounded flex items-center justify-center">
                            <span className="text-xs text-white">⚡</span>
                          </span>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-gray-800">
                          Your stay in Austin
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="w-5 h-5 bg-red-500 rounded flex items-center justify-center">
                            <span className="text-xs text-white font-bold">
                              M
                            </span>
                          </span>
                          <span className="w-5 h-5 bg-orange-400 rounded flex items-center justify-center">
                            <span className="text-xs text-white">⚡</span>
                          </span>
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center">
                            <span className="text-xs text-white">📄</span>
                          </span>
                          <p className="text-sm font-medium text-gray-800">
                            Project poster
                          </p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-7">
                          Keynote presentation draft
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Kanban Board Panel */}
                  <div className="flex-1 bg-gray-100 rounded-xl shadow-lg overflow-hidden hidden md:block">
                    <div className="bg-gray-700 text-white px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">
                          Personal Task Board
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h7"
                        />
                      </svg>
                    </div>
                    <div className="p-3 bg-gray-50">
                      <div className="flex gap-3">
                        {/* To Do Column */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-gray-700">
                              To Do - Today
                            </span>
                            <span className="text-gray-400 text-xs">•••</span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">
                                Prepare analysis of recent campaigns
                              </p>
                              <div className="flex justify-end mt-1">
                                <svg
                                  className="w-4 h-4 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">
                                Write test instructions for Project Ranier
                              </p>
                            </div>
                          </div>
                          <button className="flex items-center gap-1 text-xs text-gray-400 mt-2 hover:text-gray-600">
                            <span>+</span>
                            <span>Add a card</span>
                          </button>
                        </div>

                        {/* This Week Column */}
                        <div className="flex-1 hidden lg:block">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-gray-700">
                              This Week
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">
                                Review Q4 reports
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs text-gray-400">
                                  📎 1
                                </span>
                              </div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">
                                Update team docs
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs text-orange-500">
                                  ⏰ Jun 2
                                </span>
                              </div>
                            </div>
                          </div>
                          <button className="flex items-center gap-1 text-xs text-gray-400 mt-2 hover:text-gray-600">
                            <span>+</span>
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
