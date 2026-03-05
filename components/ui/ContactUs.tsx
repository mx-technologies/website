import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';
import { Mail, MessageCircle, Calendar, GraduationCap } from 'lucide-react';

const ContactUs = () => {
  const contactOptions = [
    {
      title: 'Book a Strategy Call',
      description: 'Schedule a 30-minute consultation to discuss your project architecture.',
      icon: <Calendar className="text-indigo-500" size={32} />,
      link: 'https://calendly.com/hello-mxtechnologies/30min', // Placeholder or real link
      cta: 'Schedule Now',
      color: 'indigo'
    },
    {
      title: 'Send an Email',
      description: 'Reach out for general inquiries or detailed project proposals.',
      icon: <Mail className="text-pink-500" size={32} />,
      link: 'mailto:hello@mxtechsolutionshq.com',
      cta: 'hello@mxtechsolutionshq.com',
      color: 'pink'
    },
    {
      title: 'WhatsApp Us',
      description: 'Need an immediate response? Chat with our team directly on WhatsApp.',
      icon: <MessageCircle className="text-green-500" size={32} />,
      link: 'https://wa.link/gkano0',
      cta: 'Start Chatting',
      color: 'green'
    }
  ];

  return (
    <section id="contact-us" className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className={`${SpaceGroteskBold.className} text-3xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Ready to <span className="mx-color">Transform</span> Your Business?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Whether you&apos;re looking for a technical audit, a custom MVP, or a full-scale automation overhaul, we&apos;re here to make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target={option.link.startsWith('http') ? '_blank' : undefined}
              rel={option.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative p-8 rounded-[2.5rem] bg-black-200/40 border border-white/5 transition-all duration-500 hover:scale-[1.05] hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.1)] flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-3xl bg-black-100 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                {option.icon}
              </div>

              <h3 className={`${SpaceGroteskBold.className} text-xl text-white mb-3`}>
                {option.title}
              </h3>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {option.description}
              </p>

              <div className="mt-auto">
                <span className={`text-sm font-bold ${option.color === 'indigo' ? 'text-indigo-400' :
                  option.color === 'pink' ? 'text-pink-400' : 'text-green-400'
                  } group-hover:underline transition-all underline-offset-4`}>
                  {option.cta}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Free Consultation Badge */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <GraduationCap size={20} className="text-indigo-400" />
            <span className="text-indigo-300 text-sm font-semibold">
              Always includes a 100% free technical consultation
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[160px] -z-1 opacity-50" />
    </section>
  );
};

export default ContactUs;

