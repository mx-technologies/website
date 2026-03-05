import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-black-100 border-t border-white/[0.08] pt-20 pb-10'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16'>

          {/* Column 1: Brand Identity */}
          <div className='flex flex-col gap-6'>
            <Link href='/' className='flex items-center gap-3 group/logo'>
              <div className='relative w-20 h-20 flex items-center justify-center'>
                <Image
                  src='/logo-icon.png'
                  alt='MX Tech Logo'
                  width={80}
                  height={80}
                  className='object-contain transition-transform duration-500 group-hover/logo:scale-110'
                />
              </div>
            </Link>
            <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
              Building high-performance, scalable tech foundations for the next generation of digital-first businesses.
            </p>
            <div className='flex items-center gap-4 mt-2'>
              <a href='https://x.com/@mxtechhq' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 transition-all'>
                <Image src='/icons/x.svg' alt='X' width={18} height={18} />
              </a>
              <a href='https://instagram.com/mxtechnologieshq' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 transition-all'>
                <Image src='/icons/IG.svg' alt='Instagram' width={18} height={18} />
              </a>
              <a href='https://web.facebook.com/profile.php?id=61567463106427' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 transition-all'>
                <Image src='/icons/facebook.svg' alt='Facebook' width={18} height={18} />
              </a>
              <a href='https://linkedin.com/company/mxtechsolutionshq' target='_blank' rel='noopener noreferrer' className='p-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 transition-all'>
                <Image src='/icons/linkedin.png' alt='LinkedIn' width={18} height={18} className='invert opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className={`${SpaceGroteskBold.className} text-white mb-6 text-sm uppercase tracking-widest`}>Solutions</h4>
            <ul className='flex flex-col gap-4'>
              {['Custom Backend & APIs', 'Business Automation', 'AI Workflow Integration', 'Cloud Architecture'].map((item) => (
                <li key={item}>
                  <Link href='/#services' className='text-gray-400 hover:text-indigo-400 transition-colors text-sm'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className={`${SpaceGroteskBold.className} text-white mb-6 text-sm uppercase tracking-widest`}>Company</h4>
            <ul className='flex flex-col gap-4'>
              {['About Us', 'Our Process', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'About Us' ? '/about-us' : item === 'Contact' ? '/#contact-us' : `/#${item.toLowerCase().replace(' ', '-')}`} className='text-gray-400 hover:text-indigo-400 transition-colors text-sm'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className={`${SpaceGroteskBold.className} text-white mb-6 text-sm uppercase tracking-widest`}>Office</h4>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-400 text-sm leading-relaxed'>
                18, Oke Aro Road, Agbado Station,<br />
                Lagos, Nigeria.
              </p>
              <a href='mailto:hello@mxtechsolutionshq.com' className='text-indigo-400 hover:text-indigo-300 transition-colors font-semibold text-sm'>
                hello@mxtechsolutionshq.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className='pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-gray-500 text-xs tracking-tight'>
            © {currentYear} MX Tech Solutions. Built for the future of business.
          </p>
          <div className='flex gap-8'>
            <Link href='/terms' className='text-gray-500 hover:text-white transition-colors text-xs'>
              Terms of Service
            </Link>
            <Link href='/privacy' className='text-gray-500 hover:text-white transition-colors text-xs'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
