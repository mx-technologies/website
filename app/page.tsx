'use client';
import AboutUs from '@/components/ui/AboutUs';
import ContactUs from '@/components/ui/ContactUs';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/ui/Hero';
import Nav from '@/components/ui/Nav';
import Services from '@/components/ui/Services';
import Team from '@/components/ui/Team';
import TechStack from '@/components/ui/TechStack';
import Testimonials from '@/components/ui/Testimonials';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import Works from '@/components/ui/Works';
import { navItems } from '@/data';
import { Router } from 'next/router';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Send page views to Google Analytics
    const handleRouteChange = (url: any) => {
      (window as any).gtag('config', 'G-Q84XGSVJ30', {
        page_path: url,
      });
    };

    (Router as any).events.on('routeChangeComplete', handleRouteChange);

    return () => {
      (Router as any).events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

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
      <Team />
      <Works />
      {/* <Testimonials /> */}
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
