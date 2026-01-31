'use client';

import { SpaceGroteskBold } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const Works = () => {
  const workPage = (page: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = page;
    }
  };

  return (
    <section id='works' className='container mx-auto p-8 py-16'>
      {/* <!-- Title --> */}
      <h2
        className={`${SpaceGroteskBold.className} text-center text-4xl font-bold mb-12`}
      >
        Works we have done
      </h2>

      {/* Container */}
      <div className='flex justify-center'>
        <div className='flex flex-col sm:flex-row gap-8 max-w-5xl w-full'>
          {/* Card 1 */}
          <div className='flex-1 p-6 rounded-lg text-center'>
            <Image
              src='/images/doexcess.png'
              alt='Doexcess Screenshot'
              className='rounded-lg mb-6 w-full h-96 object-contain lg:object-cover object-top'
              width={500}
              height={400}
            />
            <h2
              className={`${SpaceGroteskBold.className} text-left text-xl font-bold mb-4`}
            >
              Doexcess - An autopilot for business&apos; processes
            </h2>
            <p className='text-left text-gray-400 mb-6'>
              Doexcess is an all-in-one platform that helps individuals, teams,
              and organizations optimize tasks, streamline workflows, and work
              more efficiently — all from a single app.
            </p>
            <button
              onClick={() => workPage('https://doexcess.com')}
              className={`${SpaceGroteskBold.className} px-6 py-3 bg-gradient-to-r from-[#0F34ED] to-pink-500 text-white font-bold w-full gradient-border rounded-lg`}
            >
              Check me out!
            </button>
          </div>

          {/* Card 2 */}
          <div className='flex-1 p-6 rounded-lg text-center'>
            <Image
              src='/images/cva.png'
              alt='CVA Screenshot'
              className='rounded-lg mb-6 w-full h-96 object-contain lg:object-cover object-top'
              width={500}
              height={400}
            />
            <h2
              className={`${SpaceGroteskBold.className} text-left text-xl font-bold mb-4`}
            >
              Christ&apos;s Victorious Army — A Believers&apos; Community
            </h2>
            <p className='text-left text-gray-400 mb-6'>
              Christ&apos;s Victorious Army is a word-based, full-gospel
              Christian ministry—interdenominational and
              non-denominational—committed to honoring God and helping believers
              grow spiritually and live in wholehearted service to Him.
            </p>
            <button
              onClick={() => workPage('https://christsvictoriousarmy.org')}
              className={`${SpaceGroteskBold.className} px-6 py-3 bg-gradient-to-r from-[#0F34ED] to-pink-500 text-white font-bold w-full gradient-border rounded-lg`}
            >
              Check me out!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
