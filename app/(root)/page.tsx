import AboutUs from '@/components/ui/AboutUs';
import ContactUs from '@/components/ui/ContactUs';
import Services from '@/components/ui/Services';
import TechStack from '@/components/ui/TechStack';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import Works from '@/components/ui/Works';

export default function Home() {
  return (
    <main>
      <WhyChooseUs />
      <Services />
      <TechStack />
      <Works />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
