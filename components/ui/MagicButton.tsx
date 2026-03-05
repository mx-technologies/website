'use client';
import React from 'react';

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className='relative inline-flex h-12 md:h-14 w-full md:w-max px-1 overflow-hidden rounded-xl p-[1px] focus:outline-none 
      bg-[linear-gradient(90deg, #0F34ED 0%, #ED1E79 100%)] cursor-pointer whitespace-nowrap group transition-all duration-300 hover:shadow-[0_0_25px_rgba(15,52,237,0.4)] active:scale-95'
      onClick={handleClick}
    >
      <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-30 group-hover:opacity-50 transition-opacity' />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-6 md:px-10 text-[13px] md:text-sm font-bold text-white backdrop-blur-3xl gap-2 transition-all duration-300 group-hover:bg-slate-900/90 ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
