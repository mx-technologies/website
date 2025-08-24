import { SpaceGrotesk, SpaceGroteskBold } from '@/lib/utils';
import React from 'react';

const TechStack = () => {
  return (
    <section
      id='tech-stack'
      className='container mx-auto py-16 text-center h-[100vh]'
    >
      <h2 className={`${SpaceGroteskBold.className} text-4xl font-bold mb-6`}>
        Technology Stack
      </h2>
      <div
        className={`${SpaceGrotesk.className} text-xl mb-8 mt-16 mx-gray-color md:max-w-[40%] mx-auto`}
      >
        <p className='text-4xl'>
          At{' '}
          <span
            className={`${SpaceGroteskBold.className} font-bold text-gray-300`}
          >
            MX Tech Solutions,
          </span>
        </p>
        we leverage an array of powerful industry-standard technologies to build
        flexible and scalable solutions.
      </div>

      {/* <!-- Technology Icons --> */}
      <div className='flex justify-center space-x-8 mb-12 overflow-auto py-4'>
        <img src='/icons/node.png' alt='Node.js' className='w-12 h-12' />
        <img src='/icons/python.png' alt='Python' className='w-12 h-12' />
        <img src='/icons/react.png' alt='React.js' className='w-12 h-12' />
        <img src='/icons/html5.png' alt='HTML5' className='w-12 h-12' />
        <img src='/icons/js.png' alt='JavaScript' className='w-12 h-12' />
        <img
          src='/icons/typescript.png'
          alt='TypeScript'
          className='w-12 h-12'
        />
        <img src='/icons/sql.png' alt='MySQL' className='w-12 h-12 bg-white' />
        <img src='/icons/docker.png' alt='Docker' className='w-12 h-12' />
        <img src='/icons/github.png' alt='GitHub' className='w-12 h-12' />
        <img
          src='/icons/aws.png'
          alt='AWS'
          className='w-12 h-12 bg-white object-contain rounded-full'
        />
      </div>

      {/* <!-- Technology Categories --> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left'>
        {/* <!-- Backend Development --> */}
        <div className='p-6 border border-gray-700 rounded-lg'>
          <h3 className='text-lg font-semibold text-pink-500 mb-2'>
            Backend Development
          </h3>
          <p className='text-[#AEAEAE]'>
            Node.js, Python, Flask, Express.js, NestJS
          </p>
        </div>

        {/* <!-- Frontend Development --> */}
        <div className='p-6 border border-gray-700 rounded-lg'>
          <h3 className='text-lg font-semibold text-pink-500 mb-2'>
            Frontend Development
          </h3>
          <p className='text-[#AEAEAE]'>
            React.js, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript
          </p>
        </div>

        {/* <!-- Database Management --> */}
        <div className='p-6 border border-gray-700 rounded-lg'>
          <h3 className='text-lg font-semibold text-pink-500 mb-2'>
            Database Management
          </h3>
          <p className='text-[#AEAEAE]'>MySQL, PostgreSQL, MongoDB</p>
        </div>

        {/* <!-- Cloud Services --> */}
        <div className='p-6 border border-gray-700 rounded-lg'>
          <h3 className='text-lg font-semibold text-pink-500 mb-2'>
            Cloud Services
          </h3>
          <p className='text-[#AEAEAE]'>AWS, Google Cloud</p>
        </div>

        {/* <!-- DevOps --> */}
        <div className='p-6 border border-gray-700 rounded-lg'>
          <h3 className='text-lg font-semibold text-pink-500 mb-2'>DevOps</h3>
          <p className='text-[#AEAEAE]'>Docker, Kubernetes</p>
        </div>

        {/* <!-- Mobile Development --> */}
        <div className='p-6 border border-gray-700 rounded-lg'>
          <h3 className='text-lg font-semibold text-pink-500 mb-2'>
            Mobile Development
          </h3>
          <p className='text-[#AEAEAE]'>React Native</p>
        </div>

        {/* <!-- Version Control --> */}
        <div className='p-6 border border-gray-700 rounded-lg'>
          <h3 className='text-lg font-semibold text-pink-500 mb-2'>
            Version Control
          </h3>
          <p className='text-[#AEAEAE]'>Git, GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
