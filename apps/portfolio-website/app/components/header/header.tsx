'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ResumeButton from '../resume-button/resume-button';
import Logo from '@repo/ui/logo/logo';

import { StyledContainer } from '@repo/ui/container';
import { StyledHeader, StyledLi, StyledNav, StyledUl } from './styled';

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
    <StyledContainer>
      <StyledHeader $isScrolled={isScrolled}>
        <Logo src={'/logo.jpg'} width={50} height={50} />
        <Navbar />
        <ResumeButton />
      </StyledHeader>
    </StyledContainer>
  );
}

function Navbar(): React.ReactElement {
  return (
    <StyledNav>
      <StyledUl>
        {routes.map((route) => (
          <StyledLi key={route.name}>
            <Link href={route.href}>{route.name}</Link>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
}
