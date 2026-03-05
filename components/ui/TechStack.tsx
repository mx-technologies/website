import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section id='tech-stack' className='container mx-auto py-16 text-center '>
      <h2 className={`${SpaceGroteskBold.className} text-4xl font-bold mb-6`}>
        Technology Stack
      </h2>
      <div
        className={`text-xl mb-8 mt-16 mx-gray-color md:max-w-[40%] mx-auto`}
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
        <Image src='/icons/node.png' alt='Node.js' width={48} height={48} />
        <Image src='/icons/python.png' alt='Python' width={48} height={48} />
        <Image src='/icons/react.png' alt='React.js' width={48} height={48} />
        <Image src='/icons/html5.png' alt='HTML5' width={48} height={48} />
        <Image src='/icons/js.png' alt='JavaScript' width={48} height={48} />
        <Image
          src='/icons/typescript.png'
          alt='TypeScript'
          width={48}
          height={48}
        />
        <Image src='/icons/sql.png' alt='MySQL' width={48} height={48} className='bg-white' />
        <Image src='/icons/docker.png' alt='Docker' width={48} height={48} />
        <Image src='/icons/github.png' alt='GitHub' width={48} height={48} />
        <Image
          src='/icons/aws.png'
          alt='AWS'
          width={48}
          height={48}
          className='bg-white object-contain rounded-full'
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
