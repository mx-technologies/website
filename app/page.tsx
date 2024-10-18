import Hero from '@/components/ui/Hero';
import Nav from '@/components/ui/Nav';
import { navItems } from '@/data';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <Nav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
