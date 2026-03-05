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
        className='p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white hover:bg-white/[0.08] transition-all flex items-center justify-center backdrop-blur-sm'
        aria-label='Open main menu'
      >
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
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
                { name: 'Process', link: '#process', icon: FaServicestack },
                { name: 'Works', link: '#works', icon: FaFolderOpen },
                { name: 'About Us', link: '/about-us', icon: AiOutlineInfoCircle },
                { name: 'Contact Us', link: '#contact-us', icon: AiOutlineMail },
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
            <p className='text-gray-500 text-sm mb-4 uppercase tracking-widest font-semibold'>Follow Us</p>
            <div className='flex gap-4'>
              {/* Added placeholders for consistency */}
              <div className='w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-pointer'>
                {/* Social Icon placeholder */}
                <span className='text-xs font-bold'>X</span>
              </div>
              <div className='w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-pointer'>
                <span className='text-xs font-bold'>IN</span>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
