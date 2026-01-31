import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content:
        'Welcome to MX Tech Solutions. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.',
    },
    {
      title: '2. Information We Collect',
      content:
        'We may collect personal information such as your name, email address, phone number, and project details when you contact us or request a consultation. We also collect non-personal data like browser type and IP address via cookies to improve our website experience.',
    },
    {
      title: '3. How We Use Your Information',
      content:
        'Your information is used to provide and improve our services, communicate with you regarding your inquiries, and send occasional updates about our solutions. We do not sell your personal data to third parties.',
    },
    {
      title: '4. Data Protection',
      content:
        'We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.',
    },
    {
      title: '5. Third-Party Services',
      content:
        'We may use trusted third-party service providers to facilitate our website operations (e.g., hosting and analytics). These providers only have access to information necessary to perform their tasks.',
    },
    {
      title: '6. Your Rights',
      content:
        'Depending on your location, you may have rights under GDPR or CCPA to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@mxtechsolutions.com.',
    },
    {
      title: '7. Cookies',
      content:
        'Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain parts of our site.',
    },
    {
      title: '8. Changes to This Policy',
      content:
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
    },
  ];

  return (
    <main className='bg-[#1a1a1a] min-h-screen text-white pt-24 pb-20'>
      {/* Background Hero Section */}
      <section className='relative flex items-center justify-center py-20 px-4'>
        <h2 className='absolute text-[8rem] md:text-[14rem] font-bold text-transparent select-none leading-none whitespace-nowrap stroke-text opacity-5'>
          PRIVACY
        </h2>
        <div className='relative z-10 text-center'>
          <h1
            className={
              'text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple to-blue-400 ' +
              SpaceGroteskBold.className
            }
          >
            PRIVACY POLICY
          </h1>
          <p className='text-gray-2 text-lg max-w-xl mx-auto'>
            Last updated: January 31, 2026. Your trust is our priority.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className='max-w-4xl mx-auto px-6 md:px-12'>
        <div className='grid gap-8'>
          {sections.map((section, index) => (
            <div
              key={index}
              className='p-8 rounded-2xl bg-black-200 border border-white/10 hover:border-purple/50 transition-all duration-300'
            >
              <h3
                className={
                  'text-2xl font-bold mb-4 text-purple ' +
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
        <div className='mt-16 p-10 rounded-3xl bg-gradient-to-br from-purple/20 to-transparent border border-purple/30 text-center'>
          <h2
            className={
              'text-3xl font-bold mb-4 ' + SpaceGroteskBold.className
            }
          >
            Have Questions?
          </h2>
          <p className='text-white-100 mb-8 max-w-2xl mx-auto'>
            If you have any questions about our privacy practices, please reach
            out to our data protection team.
          </p>
          <a
            href='mailto:privacy@mxtechsolutions.com'
            className='inline-block px-8 py-3 bg-purple text-black font-bold rounded-full hover:scale-105 transition-transform'
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
