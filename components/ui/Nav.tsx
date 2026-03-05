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
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('');
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  // Intersection Observer to detect active sections
  React.useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = ['services', 'process', 'works', 'contact-us'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
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

  const isLinkActive = (item: { name: string; link: string }) => {
    if (item.link === '/') return pathname === '/' && (activeSection === '' || activeSection === '#');
    if (item.link.startsWith('#')) return pathname === '/' && activeSection === item.link;
    return pathname === item.link;
  };

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
          'fixed z-[5000] top-0 left-0 right-0 py-4 px-4 md:px-6 lg:px-8 transition-all duration-300',
          className
        )}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='relative group'>
            {/* Glass Background with multi-layered effect */}
            <div className='absolute inset-0 bg-black/40 backdrop-blur-xl rounded-[24px] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-white/[0.12]' />

            <div className='relative px-6 py-3 md:px-8 flex items-center justify-between'>
              {/* Logo section */}
              <Link href='/' className='flex items-center gap-3 z-50 group/logo'>
                <div className='relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Image
                    src='/logo-icon.png'
                    alt='MX Tech Logo'
                    fill
                    className='object-contain transition-transform duration-500 group-hover/logo:scale-110'
                  />
                </div>

              </Link>

              {/* Desktop Nav Links */}
              <div className='hidden lg:flex items-center px-4 py-2'>
                <ul className='flex items-center gap-2'>
                  {[
                    { name: 'Home', link: '/' },
                    { name: 'Services', link: '/#services' },
                    { name: 'Process', link: '/#process' },
                    { name: 'Works', link: '/#works' },
                    { name: 'About', link: '/about-us' },
                    { name: 'Contact', link: '/#contact-us' },
                  ].map((item) => {
                    const active = isLinkActive(item);
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.link}
                          className={cn(
                            'px-4 py-2 text-[13px] font-semibold tracking-tight transition-all duration-300 relative group/link',
                            active ? 'text-white' : 'text-gray-400 hover:text-white'
                          )}
                        >
                          {item.name}
                          {/* Subtle Underline for active/hover state */}
                          <span className={cn(
                            'absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-300',
                            active ? 'opacity-100' : 'opacity-0 group-hover/link:opacity-100'
                          )} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA & Mobile Menu */}
              <div className='flex items-center gap-4'>
                <div className='hidden md:block'>
                  <Link
                    href='#contact-us'
                    className='relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
                  >
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#4A5568_50%,#E2E8F0_100%)]' />
                    <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 md:px-6 py-1 text-xs md:text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-slate-900'>
                      Get Started
                    </span>
                  </Link>
                </div>

                <div className='lg:hidden'>
                  <SidebarMenu activeSection={activeSection} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
