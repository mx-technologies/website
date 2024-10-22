'use client';

import { Drawer, Sidebar } from 'flowbite-react';
import { useState } from 'react';
import {
  HiChartPie,
  HiLogin,
  HiPencil,
  HiShoppingBag,
  HiUsers,
} from 'react-icons/hi';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        data-collapse-toggle='navbar-default'
        type='button'
        className='text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        aria-controls='navbar-default'
        aria-expanded='false'
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>

      <Drawer edge open={isOpen} onClose={handleClose} className='z-50'>
        <Drawer.Header titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label='Sidebar with multi-level dropdown example'
            className='[&>div]:bg-transparent [&>div]:p-0'
          >
            <div className='flex h-full flex-col justify-between py-2'>
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item
                      href='#'
                      icon={HiChartPie}
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Sidebar.Item>
                    <Sidebar.Item
                      href='#services'
                      icon={HiShoppingBag}
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Sidebar.Item>
                    <Sidebar.Item
                      href='#tech-stack'
                      icon={HiUsers}
                      onClick={() => setIsOpen(false)}
                    >
                      Tech Stack
                    </Sidebar.Item>
                    <Sidebar.Item
                      href='#the-team'
                      icon={HiLogin}
                      onClick={() => setIsOpen(false)}
                    >
                      The team
                    </Sidebar.Item>
                    <Sidebar.Item
                      href='#works'
                      icon={HiPencil}
                      onClick={() => setIsOpen(false)}
                    >
                      Works
                    </Sidebar.Item>
                    <Sidebar.Item
                      href='#about-us'
                      icon={HiPencil}
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Sidebar.Item>
                    <Sidebar.Item
                      href='#contact-us'
                      icon={HiPencil}
                      onClick={() => setIsOpen(false)}
                    >
                      Contact Us
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
