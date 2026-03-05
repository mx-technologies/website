'use client';

import { Drawer } from 'flowbite-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import { AiFillHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';
import { FaFolderOpen, FaServicestack } from 'react-icons/fa';

const SidebarMenu = ({ activeSection }: { activeSection: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setIsOpen(false);

  const isLinkActive = (item: { name: string; link: string }) => {
    if (item.link === '/') return pathname === '/' && (activeSection === '' || activeSection === '#');
    if (item.link.startsWith('#')) return pathname === '/' && activeSection === item.link;
    return pathname === item.link;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type='button'
        className='p-2 flex flex-col gap-1 items-end group/btn'
        aria-label='Open main menu'
      >
        <span className='w-5 h-[3px] bg-white rounded-full transition-all duration-300 group-hover/btn:w-3' />
        <span className='w-3 h-[3px] bg-white rounded-full transition-all duration-300 group-hover/btn:w-5' />
      </button>

      <Drawer
        edge
        open={isOpen}
        onClose={handleClose}
        className='z-[6000] bg-black/90 backdrop-blur-2xl border-l border-white/10 w-full sm:w-80'
      >
        <div className='p-6 h-full flex flex-col'>
          <div className='flex items-center justify-between mb-12'>
            <span className='text-white font-bold text-xl tracking-tighter'>
              MENU<span className='text-gray-600'>.</span>
            </span>
            <button
              onClick={handleClose}
              className='p-2 text-gray-400 hover:text-white transition-colors'
            >
              <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          <nav className='flex-1'>
            <ul className='space-y-4'>
              {[
                { name: 'Home', link: '/', icon: AiFillHome },
                { name: 'Services', link: '/#services', icon: FaServicestack },
                { name: 'Process', link: '/#process', icon: FaServicestack },
                { name: 'Works', link: '/#works', icon: FaFolderOpen },
                { name: 'About Us', link: '/about-us', icon: AiOutlineInfoCircle },
                { name: 'Contact Us', link: '/#contact-us', icon: AiOutlineMail },
              ].map((item) => {
                const active = isLinkActive(item);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      onClick={handleClose}
                      className={cn(
                        'flex items-center gap-4 p-4 rounded-2xl transition-all group',
                        active
                          ? 'bg-white/10 border border-white/20 text-white'
                          : 'bg-white/[0.02] border border-white/[0.05] text-gray-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.1]'
                      )}
                    >
                      <item.icon className={cn(
                        'text-xl transition-colors',
                        active ? 'text-white' : 'text-gray-500 group-hover:text-white'
                      )} />
                      <span className='text-lg font-medium tracking-tight'>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className='mt-auto pt-8 border-t border-white/5'>
            <p className='text-gray-500 text-[10px] mb-4 uppercase tracking-[0.2em] font-bold'>Connect With Us</p>
            <div className='flex gap-3'>
              <a href='https://x.com/@mxtechhq' target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all'>
                <img src='/icons/x.svg' alt='X' className='w-4 h-4' />
              </a>
              <a href='https://instagram.com/mxtechnologieshq' target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all'>
                <img src='/icons/IG.svg' alt='Instagram' className='w-4 h-4' />
              </a>
              <a href='https://web.facebook.com/profile.php?id=61567463106427' target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all'>
                <img src='/icons/facebook.svg' alt='Facebook' className='w-4 h-4' />
              </a>
              <a href='https://linkedin.com/company/mxtechsolutionshq' target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all'>
                <img src='/icons/linkedin.png' alt='LinkedIn' className='w-4 h-4 invert opacity-50 hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
