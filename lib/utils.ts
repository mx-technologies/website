import { type ClassValue, clsx } from 'clsx';
import { Space_Grotesk } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

export const SpaceGrotesk = Space_Grotesk({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export const SpaceGroteskBold = Space_Grotesk({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
