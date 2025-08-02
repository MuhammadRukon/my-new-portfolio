import type { Metadata } from 'next';
import React from 'react';
import { Poppins } from 'next/font/google';
import './global.css';
import Header from './components/header/header';
import { Footer } from '@repo/ui/footer/footer';

export const metadata: Metadata = {
  title: 'Muhammad Rukon',
  description: 'A portfolio website of Muhammad, using Next.js and Turborepo',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        <div
          style={{
            // minHeight: 'calc(100vh - 87.5px)',
            minHeight: '100vh',
            margin: '50px 10px 10px 10px',
          }}
        >
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
