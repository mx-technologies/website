import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='flex flex-col items-center justify-center py-20 gap-10 h-[80vh]'
    >
      {/* <!-- Heading --> */}
      <h2 className={`${SpaceGroteskBold.className} text-4xl font-bold mb-2`}>
        Testimonials
      </h2>
      <p className='text-gray-400 mb-10'>
        Here’s what people are saying about us!
      </p>

      <TestimonialCarousel />
    </section>
  );
};

export default Testimonials;
