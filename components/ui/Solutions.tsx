'use client';
import { SpaceGroteskBold } from '@/lib/utils';
import { Database, Workflow, Bot, ArrowRight } from 'lucide-react';
import React from 'react';

const pillars = [
  {
    title: 'Custom Backend & API Development',
    description: 'We build the robust, scalable engines that power your web and mobile applications. High-performance architecture designed for growth.',
    icon: <Database className="text-indigo-500" size={32} />,
    color: 'indigo',
    link: '#process'
  },
  {
    title: 'Business Process Automation',
    description: 'Eliminate manual bottlenecks with custom automation workflows. We connect your tools and streamline operations with surgical precision.',
    icon: <Workflow className="text-pink-500" size={32} />,
    color: 'pink',
    link: '#process'
  },
  {
    title: 'AI Workflow Integration',
    description: 'Leverage LLMs and custom AI agents to automate decision-making, content generation, and customer support within your existing systems.',
    icon: <Bot className="text-purple-500" size={32} />,
    color: 'purple',
    link: '#process'
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-black-100 relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className={`${SpaceGroteskBold.className} text-3xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Our Core <span className="mx-color">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Modern problems require specialized technical solutions. We&apos;ve honed our expertise in three critical pillars that support business scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative flex flex-col p-10 rounded-[2rem] bg-black-200/50 border border-white/5 hover:border-indigo-500/50 transition-all duration-500 group shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {pillar.icon}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-pink-500/20 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>

              <h3 className={`${SpaceGroteskBold.className} text-2xl text-white mb-6 group-hover:text-indigo-400 transition-colors`}>
                {pillar.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-grow">
                {pillar.description}
              </p>

              <button
                onClick={() => window.location.href = pillar.link}
                className="flex items-center gap-2 text-white font-bold group/btn py-2"
              >
                <span>See How We Do It</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Card Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
