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
          'fixed z-[5000] py-4  top-0 xl:top-10 inset-x-0 rounded-lg  border-black/.1',
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
        <div className='p-2'>
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
                className='hidden w-full md:block md:w-auto'
                id='navbar-default'
              >
                <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 '>
                  <li className=''>
                    <a
                      href='#'
                      className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
                      aria-current='page'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#services'
                      className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href='#tech-stack'
                      className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      Tech Stack
                    </a>
                  </li>
                  <li>
                    <a
                      href='#the-team'
                      className='block py-2 px-3 text-gray-900 rounded hovteer:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      The Team
                    </a>
                  </li>
                  <li>
                    <a
                      href='#works'
                      className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      Works
                    </a>
                  </li>
                  <li>
                    <a
                      href='#about-us'
                      className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact-us'
                      className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      Contact Us
                    </a>
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
