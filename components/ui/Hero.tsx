import { SpaceGrotesk } from '@/lib/utils';
import Image from 'next/image';
import { ButtonGenerateEffect } from './ButtonGenerateEffect';

import MagicButton from './MagicButton';
import { Spotlight } from './Spotlight';
import { TextGenerateEffect } from './TextGenerateEffect';

const Hero = () => {
  return (
    <div className='pb-20 pt-56'>
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

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words='Welcome to Mx Technologies,'
            className={`${SpaceGrotesk.className} text-center text-[40px] md:text-5xl lg:text-6xl`}
          />
          <TextGenerateEffect
            words='where innovation meets precision'
            className={`${SpaceGrotesk.className} text-center text-[30px] md:text-2xl lg:text-3xl`}
          />
          <TextGenerateEffect
            words='We specialize in creating scalable, reliable, and efficient software
            solutions tailored to meet your business needs.'
            className={`${SpaceGrotesk.className} text-center mt-8 text-[20px] w-[70%]`}
          />

          <div className='mt-10'>
            <ButtonGenerateEffect
              el={
                <a href='#about' className='mt-20'>
                  <MagicButton title='Get started!' position='right' />
                </a>
              }
            />
          </div>
        </div>
        <Image
          src={'network.svg'}
          className='absolute mt-[-30rem] ml-[32rem]'
          alt='network'
          width={800}
          height={300}
        />
      </div>
    </div>
  );
};

export default Hero;
