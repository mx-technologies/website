'use client';

import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';

const Works = () => {
  const workPage = (page: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = page;
    }
  };

  return (
    <section id='works' className='container mx-auto p-8'>
      {/* <!-- Title --> */}
      <h2
        className={`${SpaceGroteskBold.className} text-center text-4xl font-bold mb-12`}
      >
        Works we have done
      </h2>

      {/* <!-- Grid container --> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* <!-- Card 1 --> */}
        <div className='p-6 rounded-lg text-center'>
          <img
            src='/images/fantrip-project.png'
            alt='Fantrip Screenshot'
            className='rounded-lg mb-6 w-full'
          />
          <h2
            className={`${SpaceGroteskBold.className} text-left text-xl font-bold mb-4`}
          >
            An airbnb-like application software for Fantrip
          </h2>
          <p className='text-left text-gray-400 mb-6'>
            Fantrip is an all-in-one platform tailored for sports fans, blending
            travel, community engagement, and exclusive sports content.
          </p>
          <button
            onClick={() => workPage('https://fantrip.app')}
            className={`${SpaceGroteskBold.className} px-6 py-3 bg-gradient-to-r from-[#0F34ED] to-pink-500 text-white font-bold  w-[100%] gradient-border rounded-lg`}
          >
            Check me out!
          </button>
        </div>

        {/* <!-- Card 2 --> */}
        <div className='p-6 rounded-lg text-center'>
          <img
            src='/images/bog-project.png'
            alt='BOG Screenshot'
            className='rounded-lg mb-6 w-full'
          />
          <h2
            className={`${SpaceGroteskBold.className} text-left text-xl font-bold mb-4`}
          >
            A robust building service provider & e-commerce software for BOG
          </h2>
          <p className='text-left text-gray-400 mb-6'>
            A platform where people can monitor and manage their projects
            without being encumbered by time and distance.
          </p>
          <button
            onClick={() => workPage('https://buildonthego.com')}
            className={`${SpaceGroteskBold.className} px-6 py-3 bg-gradient-to-r from-[#0F34ED] to-pink-500 text-white font-bold  w-[100%] gradient-border rounded-lg`}
          >
            Check me out!
          </button>
        </div>

        {/* <!-- Card 3 --> */}
        <div className='p-6 rounded-lg text-center'>
          <img
            src='/images/mywishlistng-project.png'
            alt='Mywishlisting Screenshot'
            className='rounded-lg mb-6 w-full'
          />
          <h2
            className={`${SpaceGroteskBold.className} text-left text-xl font-bold mb-4`}
          >
            Ecommerce web software for Mywishlistng
          </h2>
          <p className='text-left text-gray-400 mb-6'>
            Mywishlistng is a gift registry that allows you to choose the ideal
            gifts for your special occasion.
          </p>

          <button
            onClick={() => workPage('https://mywishlistng.com')}
            className={`${SpaceGroteskBold.className} px-6 py-3 bg-gradient-to-r from-[#0F34ED] to-pink-500 text-white font-bold  w-[100%] gradient-border rounded-lg`}
          >
            Check me out!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
