import Hero from '@/components/ui/Hero';
import Nav from '@/components/ui/Nav';
import Services from '@/components/ui/Services';
import TechStack from '@/components/ui/TechStack';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import { navItems } from '@/data';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 md:h-[100vh]'>
        <div className='max-w-7xl w-full'>
          <Nav navItems={navItems} />
          <Hero />
        </div>
      </div>
      <WhyChooseUs />
      <Services />
      <TechStack />
    </main>
  );
}
