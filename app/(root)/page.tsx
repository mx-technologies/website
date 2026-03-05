import ContactUs from '@/components/ui/ContactUs';
import Pricing from '@/components/ui/Pricing';
import Problems from '@/components/ui/Problems';
import Solutions from '@/components/ui/Solutions';
import Works from '@/components/ui/Works';
import Process from '@/components/ui/Process';

export default function Home() {
  return (
    <main>
      <Problems />
      <Solutions />
      <Process />
      <Works />
      <Pricing />
      <ContactUs />
    </main>
  );
}
