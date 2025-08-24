'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = ({
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          'fixed z-[5000] py-10 top-0 xl:top-10 inset-x-0 rounded-lg border-black/.1',
          className
        )}
        style={
          {
            // backdropFilter: 'blur(16px) saturate(180%)',
            // backgroundColor: 'rgba(17, 25, 40, 0.75)',
            // borderRadius: '12px',
            // border: '1px solid rgba(255, 255, 255, 0.125)',
          }
        }
      >
        <div className='container'>
          <nav>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
              <a
                href=''
                className='flex items-center space-x-3 rtl:space-x-reverse'
              >
                <Image
                  src={'/logo-icon.png'}
                  alt='Flowbite Logo'
                  width={90}
                  height={26}
                />
              </a>

              <SidebarMenu />
              <div
                className='hidden w-full lg:block md:w-auto'
                id='navbar-default'
              >
                <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700 '>
                  <li>
                    <Link
                      href='/'
                      className={cn(
                        'block py-2 px-3 rounded md:p-0',
                        pathname === '/'
                          ? 'text-white font-black md:text-white'
                          : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 dark:text-gray-400 md:dark:hover:text-gray-400'
                      )}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/services'
                      className={cn(
                        'block py-2 px-3 rounded md:p-0',
                        pathname === '/services'
                          ? 'text-white font-black md:text-white'
                          : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 dark:text-gray-400 md:dark:hover:text-gray-400'
                      )}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/portfolio'
                      className={cn(
                        'block py-2 px-3 rounded md:p-0',
                        pathname === '/portfolio'
                          ? 'text-white font-black md:text-white'
                          : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 dark:text-gray-400 md:dark:hover:text-gray-400'
                      )}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/careers'
                      className={cn(
                        'block py-2 px-3 rounded md:p-0',
                        pathname === '/careers'
                          ? 'text-white font-black md:text-white'
                          : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 dark:text-gray-400 md:dark:hover:text-gray-400'
                      )}
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blog'
                      className={cn(
                        'block py-2 px-3 rounded md:p-0',
                        pathname === '/blog'
                          ? 'text-white font-black md:text-white'
                          : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 dark:text-gray-400 md:dark:hover:text-gray-400'
                      )}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about-us'
                      className={cn(
                        'block py-2 px-3 rounded md:p-0',
                        pathname === '/about-us'
                          ? 'text-white font-black md:text-white'
                          : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 dark:text-gray-400 md:dark:hover:text-gray-400'
                      )}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact-us'
                      className={cn(
                        'block py-2 px-3 rounded md:p-0',
                        pathname === '/contact-us'
                          ? 'text-white font-black md:text-white'
                          : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 dark:text-gray-400 md:dark:hover:text-gray-400'
                      )}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/pricing'
                      className={cn(
                        'block py-2 px-3 rounded md:p-0',
                        pathname === '/pricing'
                          ? 'text-white font-black md:text-white'
                          : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 dark:text-gray-400 md:dark:hover:text-gray-400'
                      )}
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
