import Image from 'next/image';

const logos = [
  { name: 'Google', initial: 'G' },
  { name: 'Microsoft', initial: 'M' },
  { name: 'Slack', initial: 'S' },
  { name: 'Notion', initial: 'N' },
  { name: 'Figma', initial: 'F' },
  { name: 'GitHub', initial: 'GH' },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          Trusted by leading teams worldwide
        </p>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center w-24 h-12 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {logo.initial}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900">500K+</div>
            <div className="text-sm text-gray-500 mt-1">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900">10M+</div>
            <div className="text-sm text-gray-500 mt-1">Tasks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900">99.9%</div>
            <div className="text-sm text-gray-500 mt-1">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-500 mt-1">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
