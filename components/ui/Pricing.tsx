'use client';
import { SpaceGroteskBold } from '@/lib/utils';
import { Check, Info } from 'lucide-react';
import React from 'react';
import MagicButton from './MagicButton';

const currencies = [
  { code: 'NGN', symbol: '₦', label: 'NGN', flag: '🇳🇬' },
  { code: 'USD', symbol: 'US$', label: 'USD', flag: '🇺🇸' },
  { code: 'CAD', symbol: 'CA$', label: 'CAD', flag: '🇨🇦' },
  { code: 'GBP', symbol: '£', label: 'GBP', flag: '🇬🇧' },
  { code: 'GHS', symbol: 'GH₵', label: 'GHS', flag: '🇬🇭' },
  { code: 'ZAR', symbol: 'R', label: 'ZAR', flag: '🇿🇦' },
];

const tiers = [
  {
    name: 'Solopreneur / Early Stage',
    prices: {
      USD: '1,499',
      NGN: '2,250,000',
      CAD: '2,000',
      GBP: '1,200',
      GHS: '21,500',
      ZAR: '28,500',
    },
    tagline: 'Ideal for tech partners / founders',
    features: [
      'Custom MVP Backend Development',
      'Basic Workflow Automation',
      '3rd Party API Integrations',
      'Database Schema Design',
      '1 Month Post-Launch Support',
    ],
    cta: 'Start Building',
    featured: false,
  },
  {
    name: 'Growth / SME Scaling',
    prices: {
      USD: '3,499',
      NGN: '5,250,000',
      CAD: '4,750',
      GBP: '2,750',
      GHS: '50,000',
      ZAR: '65,000',
    },
    tagline: 'Best for growing businesses',
    features: [
      'Comprehensive System Architecture',
      'AI Workflow Integration',
      'Custom Dashboard & Admin Tools',
      'Advanced Security Hardening',
      'Performance Optimization',
      'Scalable Infrastructure Setup',
      '3 Months Priority Support',
    ],
    cta: 'Scale Now',
    featured: true,
  },
  {
    name: 'Enterprise / Custom',
    prices: {
      USD: 'Custom',
      NGN: 'Custom',
      CAD: 'Custom',
      GBP: 'Custom',
      GHS: 'Custom',
      ZAR: 'Custom',
    },
    tagline: 'For complex infrastructure',
    features: [
      'Full-Scale Microservices Architecture',
      'Legacy System Modernization',
      'Dedicated Engineering Team',
      '24/7 Premium Support',
      'Compliance & Audit Support',
      'Custom AI Training & Deployment',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
];

const Pricing = () => {
  const [selectedCurrency, setSelectedCurrency] = React.useState(currencies[0]);

  return (
    <section id="pricing" className="py-24 bg-black-100/50 relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={`${SpaceGroteskBold.className} text-3xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Transparent, <span className="mx-color">Value-Driven</span> Pricing
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10">
            Choose the tier that matches your current scale. Every plan is built to be a solid foundation for your next stage of growth.
          </p>

          {/* Currency Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-black-200/60 rounded-2xl border border-white/5 backdrop-blur-sm overflow-x-auto max-w-full no-scrollbar">
              <div className="flex gap-1 min-w-max">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => setSelectedCurrency(currency)}
                    className={`flex items-center gap-2 px-3 py-2 md:px-4 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${selectedCurrency.code === currency.code
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'text-gray-500 hover:text-gray-300'
                      }`}
                  >
                    <span>{currency.flag}</span>
                    {currency.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => {
            const price = tier.prices[selectedCurrency.code as keyof typeof tier.prices];
            return (
              <div
                key={index}
                className={`relative flex flex-col p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-black-200/40 border border-white/5 transition-all duration-500 hover:scale-[1.02] ${tier.featured ? 'border-indigo-500/50 shadow-[0_0_40px_rgba(79,70,229,0.2)]' : ''
                  }`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`${SpaceGroteskBold.className} text-xl text-indigo-400 mb-2`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    {price !== 'Custom' && (
                      <span className={`${SpaceGroteskBold.className} text-3xl text-white/70 mr-1`}>
                        {selectedCurrency.symbol}
                      </span>
                    )}
                    <span className={`${SpaceGroteskBold.className} text-3xl md:text-5xl text-white`}>
                      {price}
                    </span>
                    {price !== 'Custom' && <span className="text-gray-400 text-sm">/ Project Start</span>}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {tier.tagline}
                  </p>
                </div>

                <div className="flex-grow mb-10">
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <Check size={14} className="text-indigo-400" />
                        </div>
                        <span className="text-gray-300 text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <MagicButton
                    title={tier.cta}
                    position="right"
                    otherClasses={`w-full ${tier.featured ? 'grad-primary' : 'bg-black-100/50 hover:bg-black-100/30'}`}
                    handleClick={() => window.location.href = '#contact-us'}
                  />
                </div>

                <div className="mt-6 flex items-center gap-2 justify-center">
                  <Info size={14} className="text-gray-500" />
                  <span className="text-gray-500 text-xs">Flexible installment plans available</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
