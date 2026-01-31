'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn, SpaceGroteskBold } from '@/lib/utils';

const recognizedWords = ['MX', 'Tech', 'Solutions,'];

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.length > 5 ? (
          <motion.span className='text-gray-1 opacity-0'>{words}</motion.span>
        ) : (
          wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                // change here if idx is greater than 3, change the text color to #CBACF9
                className={cn(
                  ` ${
                    idx >= 2 && idx < 5 && recognizedWords.includes(word)
                      ? SpaceGroteskBold.className
                      : ''
                  } opacity-0`
                )}
              >
                {word}{' '}
              </motion.span>
            );
          })
        )}
      </motion.div>
    );
  };

  return (
    <div className={cn('', className)}>
      {/* mt-4 to my-4 */}
      <div>
        {/* remove  text-2xl from the original */}
        <div className=' dark:text-white text-black leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
