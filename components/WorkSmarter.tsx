const workSmarterFeatures = [
  {
    title: "Integrations",
    description:
      "Connect the apps you already use into your Space Lean workflow. Seamlessly sync with Slack, Google Calendar, GitHub, and 50+ more tools.",
    icon: (
      <svg
        className="w-8 h-8"
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
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Automation",
    description:
      "No-code automation built into every board. Set triggers and actions to automate repetitive tasks. Focus on what matters, let the AI handle the rest.",
    icon: (
      <svg
        className="w-8 h-8"
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
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "Task Mirroring",
    description:
      "View all your tasks from multiple boards in one unified dashboard. Mirror cards to track work across projects and teams effortlessly.",
    icon: (
      <svg
        className="w-8 h-8"
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
    gradient: "from-cyan-500 to-blue-500",
  },
];

export default function WorkSmarter() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            Work Smarter
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Do more with Space Lean
          </h2>
          <p className="text-lg text-gray-600">
            Customize the way you organize with powerful integrations,
            intelligent automation, and seamless task mirroring across all your
            projects.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {workSmarterFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
            >
              {/* Icon with gradient */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} text-white rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
