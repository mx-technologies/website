'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ButtonGenerateEffect = ({
  el,
  className,
}: {
  el: JSX.Element;
  className?: string;
}) => {
  const [scope] = useAnimate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setShowButton(true);
      setIsVisible(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const renderEl = () => {
    return (
      <div>
        <motion.div ref={scope}>{el}</motion.div>
      </div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      {/* mt-4 to my-4 */}
      <div>
        {/* remove  text-2xl from the original */}
        <div
          className={`dark:text-white text-black leading-snug tracking-wide transition duration-300 ease-out transform hover:scale-105  ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          {renderEl()}
        </div>
      </div>
    </div>
  );
};
