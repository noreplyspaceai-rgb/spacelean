const workSmarterFeatures = [
  {
    title: "Integrations",
    description:
      "Connect the apps you already use into your Space Lean workflow. Seamlessly sync with Slack, Google Calendar, GitHub, and 50+ more tools.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: "Automation",
    description:
      "No-code automation built into every board. Set triggers and actions to automate repetitive tasks. Focus on what matters, let the AI handle the rest.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Task Mirroring",
    description:
      "View all your tasks from multiple boards in one unified dashboard. Mirror cards to track work across projects and teams effortlessly.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function WorkSmarter() {
  return (
    <section className="py-24 lg:py-32 relative  overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-black/5" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-black/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-black/[0.02] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">
            Productivity Reimagined
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary-text tracking-tighter mb-6 leading-[1.1]">
            Work smarter, <br />
            <span className="text-black/20">not harder.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
            Customize the way you organize with powerful integrations,
            intelligent automation, and seamless task mirroring across all your
            projects.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-1px bg-black/5 border border-black/5 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/[0.02]">
          {workSmarterFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-10 lg:p-12 hover:bg-gray-50/50 transition-colors duration-500 group"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl mb-10 shadow-xl shadow-black/10 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-primary-text tracking-tight mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/20 group-hover:text-black transition-colors duration-500">
                <span>Learn more</span>
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

