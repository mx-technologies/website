import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';

const Team = () => {
  return (
    <section className='bg-black text-white py-16'>
      <h2
        className={`${SpaceGroteskBold.className} text-center text-4xl font-bold mb-6`}
      >
        Meet the Team
      </h2>
      <div className='bg-white diagonal-section pt-60 lg:pb-80 pb-60'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* <!-- Team Member 1 --> */}
            <div className='text-black p-6 rounded-lg'>
              <img
                src='/images/emmanuel.png'
                alt='Emmanuel Olaleye'
                className='rounded-lg mb-4  w-full'
              />
              <h2
                className={`${SpaceGroteskBold.className} text-xl font-bold text-left`}
              >
                Emmanuel Olaleye
              </h2>
              <p className='text-left text-gray-600'>
                Co-founder & CEO | Software Engineer | Project Manager
              </p>
              <div className='flex justify-start space-x-4 mt-4'>
                <button className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'>
                  <img src={'/icons/x.svg'} alt='x' />
                  {/* <!-- Twitter Icon --> */}
                </button>
                <button className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'>
                  <img src={'/icons/facebook.svg'} alt='facebook' />
                  {/* <!-- Facebook Icon --> */}
                </button>
              </div>
            </div>

            {/* <!-- Team Member 2 --> */}
            <div className='text-black p-6 rounded-lg'>
              <img
                src='/images/sodiq.png'
                alt='Sodiq Yekini'
                className='rounded-lg mb-4 w-full'
              />
              <h2
                className={`${SpaceGroteskBold.className} text-xl font-bold text-left`}
              >
                Sodiq Yekini
              </h2>
              <p className='text-left text-gray-600'>
                Co-founder | COO | Backend Developer
              </p>
              <div className='flex justify-start space-x-4 mt-4'>
                <button className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'>
                  <img src={'/icons/x.svg'} alt='x' />
                  {/* <!-- Twitter Icon --> */}
                </button>
                <button className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'>
                  <img src={'/icons/facebook.svg'} alt='facebook' />
                  {/* <!-- Facebook Icon --> */}
                </button>
              </div>
            </div>

            {/* <!-- Team Member 3 --> */}
            <div className='text-black p-6 rounded-lg'>
              <img
                src='/images/BGraphics.png'
                alt='Bgraphics'
                className='rounded-lg border border-gray-800 mb-4 w-full lg:h-[46vh] object-cover'
              />
              <h2
                className={`${SpaceGroteskBold.className} text-xl font-bold text-left`}
              >
                Benjamin Okunowo
              </h2>
              <p className='text-left text-gray-600'>UI / Brand Designer</p>
              <div className='flex justify-start space-x-4 mt-4'>
                <button className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'>
                  <img src={'/icons/x.svg'} alt='x' />
                  {/* <!-- Twitter Icon --> */}
                </button>
                <button className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'>
                  <img src={'/icons/facebook.svg'} alt='facebook' />
                  {/* <!-- Facebook Icon --> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
