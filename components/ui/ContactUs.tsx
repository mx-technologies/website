import { SpaceGrotesk, SpaceGroteskBold } from '@/lib/utils';
import React from 'react';

const ContactUs = () => {
  return (
    <section
      id='contact-us'
      className='container flex flex-col justify-center items-center max-w-[46rem] text-center h-[80vh] mx-auto mb-20'
    >
      {/* <!-- Heading --> */}
      <h2 className={`${SpaceGroteskBold.className} text-4xl font-bold mb-10`}>
        Contact Us
      </h2>

      {/* <!-- Subheading --> */}
      <h2 className={`${SpaceGrotesk.className} text-3xl text-[#AEAEAE] mb-4`}>
        Ready to transform your{' '}
        <span
          className={`${SpaceGroteskBold.className} font-light text-[#494949]`}
        >
          ideas
        </span>{' '}
        into{' '}
        <span
          className={`${SpaceGroteskBold.className} text-[#0F34ED] font-bold`}
        >
          reality?
        </span>
      </h2>

      {/* <!-- Paragraph --> */}
      <p className='text-lg text-[#AEAEAE] mb-4'>
        Let&apos;s get started! Reach out to us for a free consultation, and
        let&apos;s discuss how we can help your business thrive with custom
        software solutions.
      </p>

      {/* <!-- Email Link --> */}
      <p className='text-lg text-[#AEAEAE] mb-4'>
        Send us a mail to{' '}
        <a
          href='mailto:hello@mxtechsolutions.com'
          className='text-white font-semibold'
        >
          hello@mxtechsolutions.com
        </a>
      </p>

      {/* <!-- Call to Action --> */}
      <h3
        className={`${SpaceGrotesk.className} text-3xl font-medium mt-3 mb-5 text-[#AEAEAE]`}
      >
        Can&apos;t wait?
      </h3>

      {/* <!-- WhatsApp Button --> */}
      <a
        href='https://wa.me/+2348129027941'
        className={`${SpaceGrotesk.className} mx-green-gradient text-white py-4 px-6 rounded-lg shadow-lg hover:bg-green-500 border-[#94CEA5] border`}
      >
        Let&apos;s WhatsApp
      </a>
    </section>
  );
};

export default ContactUs;
