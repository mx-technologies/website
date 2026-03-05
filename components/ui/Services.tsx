import { SpaceGroteskBold } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <section id='services' className='py-12 bg-white text-black p-2'>
      <h2
        className={`${SpaceGroteskBold.className} text-4xl font-bold text-center mb-12`}
      >
        Services
      </h2>

      <div className='grid grid-cols-1 gap-16 md:gap-24 lg:gap-32 max-w-5xl mx-auto px-4'>
        {/* <!-- Service 1 --> */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Image
              src='/images/custom-software-dev.png'
              alt='Custom Software Development'
              className='rounded-xl shadow-2xl w-full max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105'
              width={500}
              height={375}
            />
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h3
              className={`${SpaceGroteskBold.className} text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-indigo-600`}
            >
              CUSTOM SOFTWARE DEVELOPMENT
            </h3>
            <p className='text-gray-600 text-lg mb-4'>
              Our team develops robust, custom solutions that address your
              specific business challenges.
            </p>
            <p className='text-gray-600 text-lg'>
              Whether you&apos;re in eCommerce, healthcare, finance, or any
              other sector, we craft software that fits seamlessly into your
              workflows.
            </p>
          </div>
        </div>

        {/* <!-- Service 2 --> */}
        <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Image
              src='/images/api.png'
              alt='API Development & Integration'
              className='rounded-xl shadow-2xl w-full max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105'
              width={500}
              height={375}
            />
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h3
              className={`${SpaceGroteskBold.className} text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-indigo-600`}
            >
              API DEVELOPMENT & INTEGRATION
            </h3>
            <p className='text-gray-600 text-lg mb-4'>
              Streamline your processes and connect your existing tools with our
              API development and integration services.
            </p>
            <p className='text-gray-600 text-lg'>
              We work with modern technology stacks like Node.js, Python, Flask,
              NestJS, ExpressJS, and more to deliver fast, secure, and reliable
              APIs.
            </p>
          </div>
        </div>

        {/* <!-- Service 3 --> */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Image
              src='/images/web-mobile.png'
              alt='Custom Software Development'
              className='rounded-xl shadow-2xl w-full max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105'
              width={500}
              height={375}
            />
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h3
              className={`${SpaceGroteskBold.className} text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-indigo-600`}
            >
              WEB & MOBILE APP DEVELOPMENT
            </h3>
            <p className='text-gray-600 text-lg mb-4'>
              Develop responsive, feature-rich web and mobile applications with
              our full-stack expertise.
            </p>
            <p className='text-gray-600 text-lg'>
              We leverage React, Next.js, and Tailwind CSS to create sleek,
              responsive interfaces, ensuring performance and scalability across
              platforms.
            </p>
          </div>
        </div>

        {/* <!-- Service 4 --> */}
        <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <Image
              src='/images/cloud.png'
              alt='API Development & Integration'
              className='rounded-xl shadow-2xl w-full max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105'
              width={500}
              height={375}
            />
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h3
              className={`${SpaceGroteskBold.className} text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-indigo-600`}
            >
              DEVOPS & CLOUD SOLUTION
            </h3>
            <p className='text-gray-600 text-lg mb-4'>
              Our DevOps team ensures seamless deployment, continuous
              integration (CI/CD), and cloud infrastructure management for
              optimized performance.
            </p>
            <p className='text-gray-600 text-lg'>
              We work with AWS and Google Cloud to deliver efficient and
              scalable cloud-based solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
