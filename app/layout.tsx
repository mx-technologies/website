import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from './provider';

const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mx technologies',
  description: 'Welcome to Mx technologies. Where innovation meets precision.',
  icons: {
    icon: '/icons/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/logo.png' sizes='any' />
      </head>
      <body className={roboto.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}