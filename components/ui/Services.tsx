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

      <div className='grid grid-cols-1 gap-20 max-w-4xl mx-auto'>
        {/* <!-- Service 1 --> */}
        <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6'>
          <Image
            src='/images/custom-software-dev.png'
            alt='Custom Software Development'
            className='rounded-lg shadow-lg w-[50%] md:w-60 lg:w-96'
            width={400}
            height={300}
          />
          <div className='lg:w-[45%] text-center md:text-left'>
            <h3
              className={`${SpaceGroteskBold.className} text-xl font-bold mb-2`}
            >
              CUSTOM SOFTWARE DEVELOPMENT
            </h3>
            <p className='text-gray-600 mb-2 mt-8'>
              Our team develops robust, custom solutions that address your
              specific business challenges.
            </p>
            <p className='text-gray-600'>
              Whether you&apos;re in eCommerce, healthcare, finance, or any
              other sector, we craft software that fits seamlessly into your
              workflows.
            </p>
          </div>
        </div>

        {/* <!-- Service 2 --> */}
        <div className='flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 gap-2'>
          <Image
            src='/images/api.png'
            alt='API Development & Integration'
            className='rounded-lg shadow-lg w-[50%] md:w-60 lg:w-96'
            width={400}
            height={300}
          />
          <div className='lg:w-[50%] mr-auto text-center md:text-left'>
            <h3
              className={`${SpaceGroteskBold.className} text-xl font-bold mb-2`}
            >
              API DEVELOPMENT & INTEGRATION
            </h3>
            <p className='text-gray-600 mb-2'>
              Streamline your processes and connect your existing tools with our
              API development and integration services.
            </p>
            <p className='text-gray-600'>
              We work with modern technology stacks like Node.js, Python, Flask,
              NestJS, ExpressJS, and more to deliver fast, secure, and reliable
              APIs.
            </p>
          </div>
        </div>

        {/* <!-- Service 3 --> */}
        <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6'>
          <Image
            src='/images/web-mobile.png'
            alt='Custom Software Development'
            className='rounded-lg shadow-lg w-[50%] md:w-60 lg:w-96'
            width={400}
            height={300}
          />
          <div className='lg:w-[45%] text-center md:text-left'>
            <h3
              className={`${SpaceGroteskBold.className} text-xl font-bold mb-2`}
            >
              WEB & MOBILE APP DEVELOPMENT
            </h3>
            <p className='text-gray-600 mb-2 mt-8'>
              Develop responsive, feature-rich web and mobile applications with
              our full-stack expertise.
            </p>
            <p className='text-gray-600'>
              We leverage React, Next.js, and Tailwind CSS to create sleek,
              responsive interfaces, ensuring performance and scalability across
              platforms.
            </p>
          </div>
        </div>

        {/* <!-- Service 4 --> */}
        <div className='flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 gap-2'>
          <Image
            src='/images/cloud.png'
            alt='API Development & Integration'
            className='rounded-lg shadow-lg w-[50%] md:w-60 lg:w-96'
            width={400}
            height={300}
          />
          <div className='lg:w-[50%] mr-auto text-center md:text-left'>
            <h3
              className={`${SpaceGroteskBold.className} text-xl font-bold mb-2`}
            >
              DEVOPS & CLOUD SOLUTION
            </h3>
            <p className='text-gray-600 mb-2'>
              Our DevOps team ensures seamless deployment, continuous
              integration (CI/CD), and cloud infrastructure management for
              optimized performance.
            </p>
            <p className='text-gray-600'>
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
