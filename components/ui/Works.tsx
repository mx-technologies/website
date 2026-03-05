'use client';

import { SpaceGroteskBold } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const Works = () => {
  const workPage = (page: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = page;
    }
  };

  return (
    <section id='works' className='container mx-auto px-4 py-20 lg:py-32'>
      {/* <!-- Title --> */}
      <h2
        className={`${SpaceGroteskBold.className} text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-16`}
      >
        Works we have done
      </h2>

      {/* Container */}
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full justify-center'>
          {/* Card 1: Doexcess */}
          <div className='flex flex-col p-6 rounded-2xl bg-black-200/50 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-xl'>
            <div className="overflow-hidden rounded-xl mb-6">
              <Image
                src='/images/doexcess.png'
                alt='Doexcess Screenshot'
                className='w-full h-64 md:h-80 lg:h-96 object-cover object-top hover:scale-105 transition-transform duration-500'
                width={600}
                height={400}
              />
            </div>
            <h3
              className={`${SpaceGroteskBold.className} text-left text-xl lg:text-2xl font-bold mb-4 text-white`}
            >
              Doexcess - An autopilot for business&apos; processes
            </h3>
            <p className='text-left text-gray-400 mb-8 flex-grow'>
              Doexcess is an all-in-one platform that helps individuals, teams,
              and organizations optimize tasks, streamline workflows, and work
              more efficiently — all from a single app.
            </p>
            <button
              onClick={() => workPage('https://doexcess.com')}
              className={`${SpaceGroteskBold.className} px-6 py-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-bold w-full rounded-xl hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all`}
            >
              Check me out!
            </button>
          </div>

          {/* Card 2: Headstart Connect */}
          <div className='flex flex-col p-6 rounded-2xl bg-black-200/50 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-xl'>
            <div className="overflow-hidden rounded-xl mb-6">
              <Image
                src='/images/headstartconnect.png'
                alt='Headstart Connect Screenshot'
                className='w-full h-64 md:h-80 lg:h-96 object-cover object-top hover:scale-105 transition-transform duration-500'
                width={600}
                height={400}
              />
            </div>
            <h3
              className={`${SpaceGroteskBold.className} text-left text-xl lg:text-2xl font-bold mb-4 text-white`}
            >
              HeadStart Connect - Mental Health Support Platform
            </h3>
            <p className='text-left text-gray-400 mb-8 flex-grow'>
              An all-in-one mental wellbeing platform providing early screening,
              personalized coping tools, and engaging self-help experiences for
              children, youth, and families.
            </p>
            <button
              onClick={() => workPage('https://headstartconnect.com')}
              className={`${SpaceGroteskBold.className} px-6 py-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-bold w-full rounded-xl hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all`}
            >
              Check me out!
            </button>
          </div>
        </div>
      </div>

      {/* Transition to Pricing Section */}
      <div className="mt-20 flex justify-center">
        <Link
          href="#pricing"
          className={`${SpaceGroteskBold.className} group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] overflow-hidden`}
        >
          <span className="relative z-10 flex items-center gap-3">
            Explore our plans
            <ArrowDown className="group-hover:translate-y-1 transition-transform" size={22} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Works;
