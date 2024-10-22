import { SpaceGrotesk, SpaceGroteskBold } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
  return (
    <>
      <div className='text-center py-20 bg-[#0F34ED] flex flex-col justify-center items-center border gap-16 p-2'>
        <h2
          className={`text-4xl text-white wcu-title mb-8 ${SpaceGroteskBold.className}`}
        >
          Why Choose Us?
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {/* <!-- Expertise Card --> */}
          <div className='bg-white rounded-lg p-6 shadow-md flex flex-col  items-center'>
            <div className='text-center mb-4'>
              <Image
                src={'/icons/expertise.png'}
                alt='Expertise'
                width={25}
                height={25}
              />
            </div>
            <h3
              className={`text-xl font-black text-gray-800 ${SpaceGroteskBold.className}`}
            >
              EXPERTISE
            </h3>
            <p className='text-gray-600 mt-2'>
              From frontend to backend, we offer comprehensive software services
              backed by a team of seasoned engineers.
            </p>
          </div>

          {/* <!-- Customization Card --> */}
          <div className='bg-white rounded-lg p-6 shadow-md flex flex-col  items-center'>
            <div className='text-center mb-4'>
              <Image
                src={'/icons/custom.png'}
                alt='Custom'
                width={25}
                height={25}
              />
            </div>
            <h3
              className={`text-xl font-black text-gray-800 ${SpaceGroteskBold.className}`}
            >
              CUSTOMIZATION
            </h3>
            <p className='text-gray-600 mt-2'>
              No two businesses are the same, and neither are our solutions. We
              create software tailored to your unique goals.
            </p>
          </div>

          {/* <!-- Results-Oriented Card --> */}
          <div className='bg-white rounded-lg p-6 shadow-md flex flex-col  items-center'>
            <div className='text-center mb-4'>
              <Image
                src={'/icons/result.png'}
                alt='Result'
                width={25}
                height={25}
              />
            </div>
            <h3
              className={`text-xl font-black text-gray-800 ${SpaceGroteskBold.className}`}
            >
              RESULTS-ORIENTED
            </h3>
            <p className='text-gray-600 mt-2'>
              We deliver tangible results, enhancing productivity and maximizing
              your return on investment.
            </p>
          </div>
        </div>

        <div>
          <button className='gradient-border mt-8 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg mx-border shadow-md hover:bg-blue-100'>
            <p className={`mx-color ${SpaceGrotesk.className}`}>
              Reach Out to Us!
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
