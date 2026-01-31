import { SpaceGrotesk } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-8'>
      <div className='max-w-[90%] mx-auto px-4 flex flex-col-reverse md:flex-row gap-10 md:gap-0 justify-between items-center'>
        {/* Social Media Icons */}
        <div className='flex space-x-4'>
          <a
            href='https://x.com/@mxtechhq'
            className='bg-gray-700 rounded-full p-3 hover:bg-gray-600 transition'
          >
            <img src='/icons/x.svg' className='w-5' alt='X' />
          </a>
          <a
            href='https://instagram.com/mxtechnologieshq'
            className='bg-gray-700 rounded-full p-3 hover:bg-gray-600 transition'
          >
            <img src='/icons/IG.svg' className='w-5' alt='IG' />
          </a>
          <a
            href='https://web.facebook.com/profile.php?id=61567463106427'
            className='bg-gray-700 rounded-full p-3 hover:bg-gray-600 transition'
          >
            <img src='/icons/facebook.svg' className='w-5' alt='facebook' />
          </a>
        </div>

        {/* Newsletter Section */}
        <div className='flex flex-col justify-start w-40% lg:w-[30%]'>
          <h3 className={`${SpaceGrotesk.className} text-lg font-semibold`}>
            Join our Newsletter
          </h3>
          <div className='flex gap-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-gray-800 text-white px-4 py-2 rounded-md focus:border-purple-400 transition w-full border border-white-200'
            />
            <button className='bg-gradient-to-r from-[#0f34ed] to-[#ed1e79] text-white py-3 px-4 rounded-md hover:from-[#0d29b8] hover:to-[#ed1e79] transition border border-white-200'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Privacy */}
      <div
        className={`${SpaceGrotesk.className} mt-6 flex justify-center gap-6 text-gray-400 text-sm`}
      >
        <Link href='/terms' className='hover:text-white transition'>
          Terms of Service
        </Link>
        <Link href='/privacy' className='hover:text-white transition'>
          Privacy Policy
        </Link>
      </div>

      {/* Copyright */}
      <div
        className={`${SpaceGrotesk.className} mt-4 text-center text-gray-500`}
      >
       
        <p>18, Oke Aro Road, Agbado Station, Lagos, Nigeria</p>
        <p>Copyright 2024 - 2026 © MX Tech Solutions. All rights reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
