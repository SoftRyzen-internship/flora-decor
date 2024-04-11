import { Mulish, Geologica } from 'next/font/google';
import { ReactNode } from 'react';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import './globals.css';

const mulish = Mulish({
  subsets: ['cyrillic'],
  weight: ['400', '600', '800'],
  display: 'swap',
  variable: '--font-mulish',
});

const geologica = Geologica({
  subsets: ['cyrillic'],
  weight: ['500', '600'],
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
