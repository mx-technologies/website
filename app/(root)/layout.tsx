'use client';

import Hero from '@/components/ui/Hero';
import Nav from '@/components/ui/Nav';
import { navItems } from '@/data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const hero = pathname === '/' ? <Hero /> : '';
  return (
    <main>
      <div
        className={cn(
          'relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5',
          pathname === '/' && 'xl:h-[100vh]'
        )}
      >
        <div className='md:max-w-7xl w-full '>
          <Nav navItems={navItems} />
          {hero}
        </div>
      </div>
      {children}
    </main>
  );
};

export default RootLayout;
