'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ResumeButton from '../resume-button/resume-button';
import Logo from '@repo/ui/logo/logo';
import styled from 'styled-components';
import { StyledContainer } from '@repo/ui/container';

const StyledHeader = styled.header<{ isScrolled: boolean }>`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  align-items: center;
  position: fixed;
  top: ${(props) => (props.isScrolled ? '20px' : '0')};
  left: 50%;
  transform: translateX(-50%);
  width: ${(props) => (props.isScrolled ? '80%' : '100%')};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledNav = styled.nav`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const StyledLi = styled.li`
  display: block;
`;

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
      <StyledHeader isScrolled={isScrolled}>
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
