import { SpaceGroteskBold } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cloud, Cpu } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id='about-us' className='py-20 md:py-32 px-6 lg:px-20 bg-black-100 relative overflow-hidden'>
      {/* Background Decorative Element */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl -z-10' />

      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className={`${SpaceGroteskBold.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white`}>
            About Us
          </h2>
          <div className='h-1.5 w-24 bg-purple mx-auto rounded-full' />
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-purple'>Who We Are</h3>
            <p className='text-lg text-neutral-400 leading-relaxed mb-6'>
              At <strong className='text-white'>MX Tech Solutions</strong>, we are passionate about
              delivering high-performance, scalable software solutions that
              transform businesses. Our team is a blend of specialized experts in
              <span className='text-white'> backend infrastructure</span>,
              <span className='text-white'> frontend experiences</span>, and
              <span className='text-white'> cloud orchestration</span>.
            </p>
            <p className='text-lg text-neutral-400 leading-relaxed'>
              We don&apos;t just write code; we build the digital foundation that allows
              enterprises to scale effortlessly while maintaining the highest standards
              of security and quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden group'
          >
            <div className='absolute -top-24 -right-24 w-48 h-48 bg-purple/20 rounded-full blur-2xl group-hover:bg-purple/30 transition-colors' />

            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-purple'>Our Mission</h3>
            <p className='text-lg text-neutral-400 leading-relaxed mb-6'>
              To empower companies to <strong>automate the mundane</strong> and <strong>scale the extraordinary</strong>.
              We bridge the gap between complex technology and business efficiency through
              transparent and secure solutions.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
              <div className='flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors'>
                <Shield className='text-purple w-6 h-6 shrink-0' />
                <span className='text-sm font-medium'>Secure Infrastructure</span>
              </div>
              <div className='flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors'>
                <Zap className='text-purple w-6 h-6 shrink-0' />
                <span className='text-sm font-medium'>High-Performance</span>
              </div>
              <div className='flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors'>
                <Cloud className='text-purple w-6 h-6 shrink-0' />
                <span className='text-sm font-medium'>Scalable Cloud</span>
              </div>
              <div className='flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors'>
                <Cpu className='text-purple w-6 h-6 shrink-0' />
                <span className='text-sm font-medium'>AI & Automation</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Highlight / Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-20 p-8 md:p-14 bg-gradient-to-r from-purple/10 to-blue/10 border border-white/5 rounded-[2rem] text-center'
        >
          <div className='inline-block px-4 py-1.5 rounded-full bg-purple/20 border border-purple/30 text-purple text-xs font-bold uppercase tracking-widest mb-6'>
            Our Flagship Product
          </div>
          <h4 className='text-4xl md:text-5xl font-bold mb-6 text-white'>Doexcess</h4>
          <p className='text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed'>
            Through our flagship product <strong className='text-white'>Doexcess</strong> and our tailored consulting,
            we help SMEs and startups create new revenue streams and optimize infrastructure
            with precision-engineered software.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
