import { Layout, Clock, Zap, Users, Shield, Globe } from 'lucide-react';

const features = [
  {
    title: 'Smart Kanban Boards',
    description: 'Visual project management optimized for agile workflows. Our AI automatically categorizes and moves tasks based on progress updates, significantly reducing manual board maintenance.',
    icon: <Layout className="w-8 h-8 stroke-1" />,
  },
  {
    title: 'Intelligent Auto-Scheduling',
    description: 'Never manually reschedule again. SpaceLean analyzes your team\'s velocity and calendar availability to automatically detect conflicts and propose realistic deadlines.',
    icon: <Clock className="w-8 h-8 stroke-1" />,
  },
  {
    title: 'Generative Project Planning',
    description: 'Transform a single prompt into a comprehensive project roadmap. Our Large Language Model (LLM) understands context, dependencies, and resource requirements instantly.',
    icon: <Zap className="w-8 h-8 stroke-1" />,
  },
  {
    title: 'Real-Time Team Sync',
    description: 'Seamless collaboration for remote and hybrid teams. Live updates, threaded comments, and integrated video huddles keep everyone aligned without notification fatigue.',
    icon: <Users className="w-8 h-8 stroke-1" />,
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption (AES-256) for all data at rest and in transit. We are SOC2 Type II compliant and offer on-premise deployment options for strict data governance.',
    icon: <Shield className="w-8 h-8 stroke-1" />,
  },
  {
    title: 'Offline-First Architecture',
    description: 'Work from anywhere, even without internet. Our robust local database syncs changes automatically when you reconnect, ensuring zero data loss.',
    icon: <Globe className="w-8 h-8 stroke-1" />,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-black">
            Everything you need to <span className="text-gray-400 decoration-4 underline-offset-8">ship faster</span>.
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            We removed the bloat and added intelligence. SpaceLean is a comprehensive suite of tools designed to replace your disjointed stack of apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-12 lg:p-16 hover:bg-gray-50 transition-colors duration-500 group">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 text-black rounded-2xl mb-10 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
