import AboutUs from '@/components/ui/AboutUs';
import ContactUs from '@/components/ui/ContactUs';
import Footer from '@/components/ui/Footer';
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
      {/* <Team /> */}
      <Works />
      {/* <Testimonials /> */}
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
