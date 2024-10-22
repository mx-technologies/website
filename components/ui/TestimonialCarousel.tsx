'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const TestimonialCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className='p-2 w-full md:max-w-3xl'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='flex items-center space-x-4 bg-white text-black rounded-lg shadow-lg p-6 max-w-3xl'>
              {/* <!-- Profile Picture --> */}
              <img
                className='w-20 h-20 rounded-full object-cover'
                src='/testimonials/profile1.png'
                alt='Profile Picture'
              />

              {/* <!-- Testimonial Text --> */}
              <div className='flex flex-col'>
                <p className='text-lg italic'>
                  “<span className='font-bold'>Mx Technologies</span> helped us
                  streamline our operations with a custom solution that fit
                  perfectly with our needs. Their team was professional,
                  responsive, and delivered beyond expectations. Highly
                  recommend!”
                </p>
                <p className='mt-4 text-gray-500'>
                  — John D., CEO of Tech Solutions
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className='hidden md:block' />
      <CarouselNext className='hidden md:block' />
    </Carousel>
  );
};

export default TestimonialCarousel;
