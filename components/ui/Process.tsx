'use client';

import React from 'react';
import { SpaceGroteskBold } from '@/lib/utils';
import { Search, PenTool, Code, CheckCircle, Rocket, ArrowDown } from 'lucide-react';
import Link from 'next/link';

const phases = [
  {
    title: 'Discovery & Audit',
    description: 'We dive deep into your current operations, identifying bottlenecks and hidden inefficiencies through a technical audit.',
    icon: <Search className="text-indigo-500" size={32} />,
    step: 'Phase 01',
  },
  {
    title: 'Strategy & Architecture',
    description: 'We map out the custom architecture and automation workflows, ensuring they align perfectly with your business goals.',
    icon: <PenTool className="text-pink-500" size={32} />,
    step: 'Phase 02',
  },
  {
    title: 'Development & Integration',
    description: 'Our engineers build your scalable backend and automation systems, integrating seamlessly with your existing tech stack.',
    icon: <Code className="text-purple-500" size={32} />,
    step: 'Phase 03',
  },
  {
    title: 'Testing & QA',
    description: 'Rigorous testing ensures everything is bulletproof. We stress-test workflows and APIs to guarantee maximum reliability.',
    icon: <CheckCircle className="text-indigo-500" size={32} />,
    step: 'Phase 04',
  },
  {
    title: 'Deployment & Optimization',
    description: 'We go live with surgical precision and continue to monitor and optimize for peak performance as you scale.',
    icon: <Rocket className="text-pink-500" size={32} />,
    step: 'Phase 05',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black-100">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 px-4">
          <h2 className={`${SpaceGroteskBold.className} text-3xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Our <span className="mx-color">Meticulous</span> Process
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            From first audit to final deployment, we follow a rigorous framework designed to build high-performance, scalable tech foundations.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent hidden lg:block" />

          <div className="flex flex-col gap-12 lg:gap-0">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className="w-full lg:w-[45%] mb-8 lg:mb-0">
                  <div
                    className={`p-8 rounded-3xl bg-black-200/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group shadow-xl ${index % 2 === 0 ? 'text-left' : 'lg:text-right flex flex-col items-end'
                      }`}
                  >
                    <span className="text-indigo-500 font-bold mb-4 block text-sm tracking-widest uppercase">
                      {phase.step}
                    </span>
                    <h3 className={`${SpaceGroteskBold.className} text-2xl text-white mb-4 group-hover:text-indigo-400 transition-colors`}>
                      {phase.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-20 flex items-center justify-center w-16 h-16 rounded-full bg-black-100 border-4 border-black-200 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {phase.icon}
                  </div>
                </div>

                {/* Empty space for layout */}
                <div className="hidden lg:block lg:w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Transition to Works Section */}
        <div className="mt-20 flex justify-center relative z-20">
          <Link
            href="#works"
            className={`${SpaceGroteskBold.className} group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] overflow-hidden`}
          >
            <span className="relative z-10 flex items-center gap-3">
              See the results of our process
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={22} />
            </span>
          </Link>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] -z-1" />
    </section>
  );
};

export default Process;
