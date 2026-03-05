import { SpaceGrotesk, SpaceGroteskBold } from '@/lib/utils';
import Image from 'next/image';
import { ButtonGenerateEffect } from './ButtonGenerateEffect';

import MagicButton from './MagicButton';
import { Spotlight } from './Spotlight';
import { TextGenerateEffect } from './TextGenerateEffect';

const Hero = () => {
  return (
    <div className='pb-16 pt-24 md:pt-32 lg:pt-56 w-full flex flex-col items-center justify-center overflow-hidden'>
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
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
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
        />
      </div>

      <div
        className='flex justify-center relative my-10 md:my-20 w-full animate-fadeInSlow'
        style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
      >
        {/* <div className='' */}
        <div className='max-w-[92vw] md:max-w-[85vw] lg:max-w-[75vw] flex flex-col items-center justify-center z-10'>
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words='We Build Scalable Software & Automation Systems That Power Growing Businesses'
            className={`${SpaceGroteskBold.className} text-center py-2 text-[32px] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-none font-black tracking-tighter transition-all duration-300`}
          />
          <TextGenerateEffect
            words='We help startups, SMEs, and enterprises automate operations, reduce inefficiencies, and build scalable backend systems.'
            className={`${SpaceGrotesk.className} text-center mt-8 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 font-medium w-full md:w-[90%] lg:w-[80%]`}
          />

          <div className='mt-10 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 w-full px-6 sm:px-0'>
            <ButtonGenerateEffect
              className="w-full sm:w-auto"
              el={
                <a href='#contact-us' className="w-full sm:w-fit block">
                  <MagicButton
                    title='Free Automation Audit'
                    position='right'
                    otherClasses='w-full sm:w-fit px-8 text-sm md:text-lg'
                  />
                </a>
              }
            />
            <ButtonGenerateEffect
              className="w-full sm:w-auto"
              el={
                <a href='https://calendar.google.com/calendar/u/0/appointments/schedules' target='_blank' className="w-full sm:w-fit block">
                  <MagicButton
                    title='Book Strategy Call'
                    position='right'
                    otherClasses='w-full sm:w-fit px-8 text-sm md:text-lg bg-transparent border-white/20 hover:bg-white/10'
                  />
                </a>
              }
            />
          </div>
        </div>
        <Image
          src={'/images/network.svg'}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 md:opacity-30 lg:opacity-40 pointer-events-none scale-150 md:scale-100'
          alt='network'
          width={1000}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
