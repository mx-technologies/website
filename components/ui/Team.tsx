import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';

const Team = () => {
  return (
    <section id='the-team' className='bg-black text-white py-16'>
      <h2
        className={`${SpaceGroteskBold.className} text-center text-4xl font-bold mb-6`}
      >
        Meet the Team
      </h2>
      <div className='lg:clip-polygon-custom bg-white pt-20 lg:pt-60 lg:pb-80 pb-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* <!-- Team Member 1 --> */}
            <div className='text-black p-6 rounded-lg text-center md:text-left'>
              <img
                src='/images/emmanuel.png'
                alt='Emmanuel Olaleye'
                className='rounded-lg mb-4 w-[50%] mx-auto md:w-full'
              />
              <h2
                className={`${SpaceGroteskBold.className} text-xl font-bold text-center md:text-left`}
              >
                Emmanuel Olaleye
              </h2>
              <p className=' text-gray-600 '>
                Co-founder & CEO | Software Engineer | Project Manager
              </p>
              <div className='flex justify-center md:justify-start space-x-4 mt-4'>
                <a
                  href='https://x.com/@manuelextra_'
                  className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'
                >
                  <img src={'/icons/x.svg'} alt='x' />
                  {/* <!-- Twitter Icon --> */}
                </a>
                <a
                  href='https://linkedin.com/in/manuelextra'
                  className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'
                >
                  <FaLinkedin className='text-[#AEAEAE] text-xs' />
                  {/* <!-- Facebook Icon --> */}
                </a>
              </div>
            </div>

            {/* <!-- Team Member 2 --> */}
            <div className='text-black p-6 rounded-lg text-center md:text-left'>
              <img
                src='/images/sodiq.png'
                alt='Sodiq Yekini'
                className='rounded-lg mb-4 w-[50%] mx-auto md:w-full'
              />
              <h2
                className={`${SpaceGroteskBold.className} text-xl font-bold text-center md:text-left`}
              >
                Sodiq Yekini
              </h2>
              <p className=' text-gray-600'>
                Co-founder | COO | Backend Developer
              </p>
              <div className='flex justify-center md:justify-start space-x-4 mt-4'>
                <a
                  href='https://x.com/sod_maq'
                  className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'
                >
                  <img src={'/icons/x.svg'} alt='x' />
                  {/* <!-- Twitter Icon --> */}
                </a>
                <a
                  href='https://www.linkedin.com/in/sodiq-yekini-222aa7196/'
                  className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'
                >
                  <FaLinkedin className='text-[#AEAEAE] text-xs' />
                  {/* <!-- Facebook Icon --> */}
                </a>
              </div>
            </div>

            {/* <!-- Team Member 3 --> */}
            <div className='text-black p-6 rounded-lg text-center md:text-left'>
              <img
                src='/images/BGraphics.png'
                alt='Bgraphics'
                className='rounded-lg border border-gray-800 mb-4 lg:h-[46vh] object-cover w-[50%] mx-auto md:w-full'
              />
              <h2
                className={`${SpaceGroteskBold.className} text-xl font-bold `}
              >
                Benjamin Okunowo
              </h2>
              <p className=' text-gray-600'>UI / Brand Designer</p>
              <div className='flex justify-center md:justify-start space-x-4 mt-4'>
                <a
                  href=''
                  className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'
                >
                  <img src={'/icons/x.svg'} alt='x' />
                  {/* <!-- Twitter Icon --> */}
                </a>
                <a
                  href=''
                  className='p-2 rounded-full bg-[#373737] hover:bg-[#252525] text-black'
                >
                  <FaLinkedin className='text-[#AEAEAE] text-xs' />
                  {/* <!-- Facebook Icon --> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
