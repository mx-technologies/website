import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';

const TermsAndConditions = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content:
        'By accessing and using the services provided by MX Tech Solutions, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our services.',
    },
    {
      title: '2. Services Provided',
      content:
        'MX Tech Solutions provides software development, IT consulting, and cloud solutions. We reserve the right to modify or discontinue any part of our services at our discretion without prior notice.',
    },
    {
      title: '3. Intellectual Property',
      content:
        'All content, designs, code, and materials produced by MX Tech Solutions are protected by intellectual property laws. Unless otherwise agreed in writing, we retain ownership of all pre-existing technologies and frameworks used in your projects.',
    },
    {
      title: '4. User Obligations',
      content:
        'Users agree not to use our services for any unlawful activities. You are responsible for ensuring that any data or materials provided to us do not infringe upon the rights of any third party.',
    },
    {
      title: '5. Limitation of Liability',
      content:
        'MX Tech Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our maximum liability is limited to the fees paid for the specific service in question.',
    },
    {
      title: '6. Confidentiality',
      content:
        'We respect the confidentiality of your business information. Both parties agree to protect and not disclose any sensitive information shared during the course of our engagement.',
    },
    {
      title: '7. Termination',
      content:
        'We reserve the right to terminate or suspend access to our services for any user who violates these Terms and Conditions. Termination shall not affect any accrued rights or liabilities.',
    },
    {
      title: '8. Governing Law',
      content:
        'These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which MX Tech Solutions operates. Any disputes shall be resolved in the appropriate local courts.',
    },
  ];

  return (
    <main className='bg-[#1a1a1a] min-h-screen text-white pt-24 pb-20'>
      {/* Background Hero Section */}
      <section className='relative flex items-center justify-center py-20 px-4'>
        <h2 className='absolute text-[8rem] md:text-[14rem] font-bold text-transparent select-none leading-none whitespace-nowrap stroke-text opacity-5'>
          TERMS
        </h2>
        <div className='relative z-10 text-center'>
          <h1
            className={
              'text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple ' +
              SpaceGroteskBold.className
            }
          >
            TERMS & CONDITIONS
          </h1>
          <p className='text-gray-2 text-lg max-w-xl mx-auto'>
            Last updated: January 31, 2026. Please read these terms carefully.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className='max-w-4xl mx-auto px-6 md:px-12'>
        <div className='grid gap-8'>
          {sections.map((section, index) => (
            <div
              key={index}
              className='p-8 rounded-2xl bg-black-200 border border-white/10 hover:border-blue-400/50 transition-all duration-300'
            >
              <h3
                className={
                  'text-2xl font-bold mb-4 text-blue-400 ' +
                  SpaceGroteskBold.className
                }
              >
                {section.title}
              </h3>
              <p className='text-gray-2 leading-relaxed text-lg'>
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className='mt-16 p-10 rounded-3xl bg-gradient-to-br from-blue-400/20 to-transparent border border-blue-400/30 text-center'>
          <h2
            className={
              'text-3xl font-bold mb-4 ' + SpaceGroteskBold.className
            }
          >
            Need Clarification?
          </h2>
          <p className='text-white-100 mb-8 max-w-2xl mx-auto'>
            If you have any questions regarding these Terms and Conditions,
            please contact our legal team for more information.
          </p>
          <a
            href='mailto:hello.mxtechsolutions@gmail.com'
            className='inline-block px-8 py-3 bg-blue-400 text-black font-bold rounded-full hover:scale-105 transition-transform'
          >
            Contact Legal
          </a>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
