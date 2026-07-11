import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IINTEKKU Group | Professional Business Solutions',
  description:
    'IINTEKKU Group - Execution. Efficiency. Partnership. Results. Together, We Shall Thrive.',
  keywords: ['business solutions', 'consulting', 'operations', 'professional services'],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-400 rounded-full px-6 py-2 mb-6">
              <span className="text-white text-sm font-semibold">Welcome to IINTEKKU Group</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Excellence Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Partnership</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Execution. Efficiency. Partnership. Results.
            <br />
            <span className="text-primary-400 font-semibold">Together, We Shall Thrive.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/clock"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Global Clock
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-primary-600 text-primary-400 hover:text-white hover:bg-primary-600/10 font-semibold rounded-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Brand Statement */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              { title: 'Execution', desc: 'Delivering results that matter' },
              { title: 'Efficiency', desc: 'Optimizing every process' },
              { title: 'Partnership', desc: 'Building lasting relationships' },
              { title: 'Results', desc: 'Exceeding expectations' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-800 to-dark-700 p-6 rounded-lg border border-dark-600 hover:border-primary-600 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-primary-400 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-dark-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Strategic Solutions',
                desc: 'Tailored business solutions aligned with your goals',
              },
              {
                icon: '⚡',
                title: 'Operational Excellence',
                desc: 'Streamlined processes for maximum efficiency',
              },
              {
                icon: '🤝',
                title: 'Long-term Partnership',
                desc: 'Building relationships beyond transactions',
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-900 to-dark-800 p-8 rounded-xl border border-dark-700 hover:border-primary-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Connect with our team to explore how IINTEKKU Group can accelerate your growth.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
