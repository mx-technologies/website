import { SpaceGrotesk, SpaceGroteskBold } from '@/lib/utils';
import { AlertCircle, Zap, ShieldAlert, Cpu, TrendingDown, ArrowRight } from 'lucide-react';
import React from 'react';

const problems = [
  {
    title: 'Manual processes slowing growth',
    description: 'Repetitive tasks are eating up your team\'s time and preventing you from scaling efficiently.',
    icon: <Zap className="text-pink-500" size={24} />,
  },
  {
    title: 'Disconnected tools and software',
    description: 'Your data is fragmented across multiple platforms, leading to errors and lost productivity.',
    icon: <AlertCircle className="text-indigo-500" size={24} />,
  },
  {
    title: 'Poor system architecture',
    description: 'Your current infrastructure is fragile and can\'t support the demands of a growing business.',
    icon: <Cpu className="text-purple-500" size={24} />,
  },
  {
    title: 'Security vulnerabilities',
    description: 'Outdated systems and poor practices leave your business exposed to costly data breaches.',
    icon: <ShieldAlert className="text-pink-500" size={24} />,
  },
  {
    title: 'High operational costs',
    description: 'Inefficiencies are draining your budget and reducing your overall profitability.',
    icon: <TrendingDown className="text-indigo-500" size={24} />,
  },
];

const Problems = () => {
  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <h2 className={`${SpaceGroteskBold.className} text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight`}>
            Scaling Is Hard When Your <span className="mx-color">Systems Are Fragile</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            We understand the frustration of technical debt. We've seen businesses struggle with the same bottlenecks you're facing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-black-200/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {problem.icon}
              </div>
              <h3 className={`${SpaceGroteskBold.className} text-xl text-white mb-4`}>
                {problem.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}

          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600/10 to-pink-500/10 border border-indigo-500/20 flex flex-col items-center justify-center text-center">
            <h3 className={`${SpaceGroteskBold.className} text-2xl text-white mb-4`}>
              Sound familiar?
            </h3>
            <p className="text-gray-300 mb-8">
              You're not alone. We help businesses transform these vulnerabilities into scalable foundations.
            </p>
            <a href="#solutions" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center gap-2">
              Discover the Solution <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-[150px]" />
      </div>
    </section>
  );
};

export default Problems;
