'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ResumeButton from '../resume-button/resume-button';
import { Logo } from '@repo/ui/logo/logo';

import { Container } from '@repo/ui/container';

const routes = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blogs' },
];

export default function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <header
        className={`fixed left-1/2 transform -translate-x-1/2 grid items-center gap-5 transition-all duration-300 ease-in-out 
    ${isScrolled ? 'top-5 w-4/5 rounded-lg shadow-md' : 'top-0 w-full rounded-lg shadow-md'}
    grid-cols-[1fr_2fr_1fr] md:grid-cols-2 px-2`}
      >
        <Logo />
        <Navbar />
        <ResumeButton />
      </header>
    </Container>
  );
}

function Navbar(): React.ReactElement {
  return (
    <nav className="block md:hidden">
      {/* <StyledUl> */}

      <ul className="flex justify-between px-2">
        {routes.map((route) => (
          <li className="block" key={route.name}>
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
