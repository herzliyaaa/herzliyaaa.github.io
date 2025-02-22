import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/shared/Navbar';

import './globals.css';
import NextTopLoader from 'nextjs-toploader';

const sfProSans = localFont({
  src: './fonts/SF-Pro-Text-Medium.woff',
  variable: '--font-sf-pro-sans',
  weight: '100 200 300 400 500 600 700 900',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${sfProSans.variable} ${sfProSans.variable} antialiased `}
      >
        <NextTopLoader color='indigo' height={6} speed={700} />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
