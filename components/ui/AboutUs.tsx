import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';

const AboutUs = () => {
  return (
    <section
      id='about-us'
      className='container flex flex-col justify-center text-center h-[100vh]'
    >
      <h2 className={`${SpaceGroteskBold.className} text-4xl font-bold mb-12`}>
        About Us
      </h2>
      <div className='border-[#373737] border p-5 sm:p-14 lg:p-20 rounded-lg shadow-lg max-w-4xl mx-auto text-[#AEAEAE]'>
        <p className='text-lg'>
          At <strong>Mx Technologies</strong>, we are passionate about
          delivering high-performance, scalable software solutions that
          transform businesses. Our team consists of experts in backend
          development, frontend development, cloud services, and ensuring that
          every project we undertake meets the highest standards of quality.
        </p>
        <p className='text-lg mt-4'>
          With a strong focus on innovation and efficiency, we help companies
          automate processes, scale their infrastructure, and create new revenue
          streams through custom-built software.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
