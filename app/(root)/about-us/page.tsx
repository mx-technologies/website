import WhyChooseUs from '@/components/ui/WhyChooseUs';
import { SpaceGrotesk, SpaceGroteskBold } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <main className='bg-[#1a1a1a] h-[100vh]'>
      {/* Our History */}
      <section className='relative flex items-center justify-center h-screen md:h-screen text-white px-4'>
        {/* Very faint outlined background text */}
        <h2 className='absolute text-[10rem] md:text-[16rem] font-bold text-transparent select-none leading-none whitespace-nowrap stroke-text opacity-5'>
          Our History
        </h2>

        {/* Main content */}
        <div className='relative max-w-2xl text-center'>
          <h1
            className={
              'text-3xl md:text-4xl font-extrabold mb-6 ' +
              SpaceGroteskBold.className
            }
          >
            ABOUT US
          </h1>

          <p className='text-gray-2 mb-6 leading-relaxed text-lg'>
            At <span className='font-bold '>MX Tech Solutions</span>, we are
            passionate about delivering high-performance, scalable software
            solutions that transform businesses. Our team consists of experts in
            backend development, frontend development, cloud services, and
            ensuring that every project we undertake meets the highest standards
            of quality.
          </p>

          <p className='text-gray-2 leading-relaxed text-lg'>
            With a strong focus on innovation and efficiency, we help companies
            automate processes, scale their infrastructure, and create new
            revenue streams through custom-built software.
          </p>
        </div>
      </section>

      <div className='flex flex-col gap-20 md:gap-80 justify-center md:h-screen'>
        {/* Our Vision */}
        <section className='relative flex items-center justify-center text-white px-4'>
          {/* Very faint outlined background text */}
          <h2 className='absolute text-[10rem] md:text-[16rem] font-bold text-transparent select-none leading-none whitespace-nowrap stroke-text opacity-5'>
            Our Vision
          </h2>

          {/* Main content */}
          <div className='relative max-w-2xl text-center'>
            <p className='text-gray-2 mb-6 leading-relaxed text-xl'>
              To be a leading force in technology, empowering businesses with
              innovative solutions that drive growth and efficiency.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className='relative flex items-center justify-center text-white px-4'>
          {/* Very faint outlined background text */}
          <h2 className='absolute text-[10rem] md:text-[16rem] font-bold text-transparent select-none leading-none whitespace-nowrap stroke-text opacity-5'>
            Our Mission
          </h2>

          {/* Main content */}
          <div className='relative max-w-2xl text-center'>
            <p className='text-gray-2 mb-6 leading-relaxed text-xl'>
              To deliver cutting-edge software solutions that solve real-world
              challenges, enhance user experiences, and create lasting impact
              for businesses worldwide.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
