import { ReactNode } from 'react';
import { Mulish } from 'next/font/google';
import localFont from 'next/font/local';

// import { Header, Footer } from '@/layout';

import './globals.css';

const mulish = Mulish({
  subsets: ['cyrillic'],
  weight: ['400', '600', '800'],
  display: 'swap',
  variable: '--font-mulish',
});

const geologica = localFont({
  src: [
    {
      path: '../../public/fonts/Geologica-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Geologica-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-geologica',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${mulish.variable} ${geologica.variable}`}>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
