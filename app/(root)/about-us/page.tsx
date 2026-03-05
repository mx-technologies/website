'use client';

import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';
import { History, Target, Compass } from 'lucide-react';
import { Spotlight } from '@/components/ui/Spotlight';

const AboutUsPage = () => {
  return (
    <main className='bg-black-100 min-h-screen relative overflow-hidden'>
      {/**
       *  UI: Spotlights (Matching Home Page)
       */}
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      {/**
       *  UI: Grid Pattern (Matching Home Page)
       */}
      <div
        className='h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center -z-10'
      >
        <div
          className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
        />
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-20 pt-32 pb-20 relative z-10'>

        {/* Hero Section of About Us */}
        <section className='relative py-20 flex flex-col items-center justify-center text-center mb-20'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${SpaceGroteskBold.className} text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight`}
          >
            ABOUT US
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='h-1.5 w-32 bg-gradient-to-r from-purple to-blue-500 rounded-full mb-12'
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='max-w-3xl'
          >
            <p className='text-xl md:text-2xl text-neutral-300 leading-relaxed font-medium'>
              We are a team of passionate engineers and designers dedicated to
              <span className='text-white'> building the future of software</span> through
              automation, scalability, and premium design.
            </p>
          </motion.div>
        </section>

        {/* History Section */}
        <section className='relative mb-32 group'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div className='relative'>
              <div className='absolute -top-16 -left-16 text-[12rem] font-bold text-white/[0.03] select-none pointer-events-none'>
                01
              </div>
              <h2 className={`${SpaceGroteskBold.className} text-4xl font-bold mb-6 text-purple flex items-center gap-4`}>
                <History className='w-8 h-8' /> Our History
              </h2>
              <p className='text-lg text-neutral-400 leading-relaxed mb-6'>
                At <strong className='text-white'>MX Tech Solutions</strong>, we started with a simple vision: to bridge the gap between complex engineering and business value. Our journey began with a focus on deep backend systems and has evolved into a full-cycle software consultancy.
              </p>
              <p className='text-lg text-neutral-400 leading-relaxed'>
                Today, we power startups and enterprises alike, ensuring that every project we undertake meets the highest standards of performance and security.
              </p>
            </div>
            <div className='bg-white/[0.03] border border-white/10 p-1 rounded-3xl overflow-hidden backdrop-blur-sm'>
              <div className='bg-black-100/50 p-8 md:p-12 rounded-[inherit] border border-white/5'>
                <div className='space-y-8'>
                  <div className='flex gap-6'>
                    <div className='w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center shrink-0 border border-purple/30 text-purple font-bold'>2024</div>
                    <div>
                      <h4 className='text-xl font-bold mb-2 text-white'>Foundation</h4>
                      <p className='text-neutral-400'>Established MX Tech Solutions with a core team of senior backend architects.</p>
                    </div>
                  </div>
                  <div className='flex gap-6'>
                    <div className='w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 text-blue-500 font-bold'>2025</div>
                    <div>
                      <h4 className='text-xl font-bold mb-2 text-white'>Expansion</h4>
                      <p className='text-neutral-400'>Launched Doexcess and expanded into AI workflow integration and cloud automation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
          {/* Vision */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white/[0.03] border border-white/10 p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group/card backdrop-blur-sm'
          >
            <div className='absolute -right-10 -top-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl group-hover/card:bg-purple/20 transition-colors' />
            <Target className='w-12 h-12 text-purple mb-8' />
            <h2 className={`${SpaceGroteskBold.className} text-3xl font-bold mb-6 text-white`}>
              Our Vision
            </h2>
            <p className='text-xl text-neutral-400 leading-relaxed'>
              To be a leading force in technology, empowering businesses with
              innovative solutions that drive growth and efficiency globally.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white/[0.03] border border-white/10 p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group/card backdrop-blur-sm'
          >
            <div className='absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover/card:bg-blue-500/20 transition-colors' />
            <Compass className='w-12 h-12 text-blue-500 mb-8' />
            <h2 className={`${SpaceGroteskBold.className} text-3xl font-bold mb-6 text-white`}>
              Our Mission
            </h2>
            <p className='text-xl text-neutral-400 leading-relaxed'>
              To deliver cutting-edge software solutions that solve real-world
              challenges, enhance user experiences, and create lasting impact
              for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
