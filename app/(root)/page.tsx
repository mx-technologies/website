import AboutUs from '@/components/ui/AboutUs';
import ContactUs from '@/components/ui/ContactUs';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/ui/Hero';
import Nav from '@/components/ui/Nav';
import Services from '@/components/ui/Services';
import Team from '@/components/ui/Team';
import TechStack from '@/components/ui/TechStack';
// import Testimonials from '@/components/ui/Testimonials';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import Works from '@/components/ui/Works';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main>
      <WhyChooseUs />
      <Services />
      <TechStack />
      {/* <Team /> */}
      <Works />
      {/* <Testimonials /> */}
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
