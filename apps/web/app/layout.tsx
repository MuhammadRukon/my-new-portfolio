import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './global.css';
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
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
