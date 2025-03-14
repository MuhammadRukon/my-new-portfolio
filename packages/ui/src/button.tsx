'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
}

export const Button = ({
  children,
  className,
  handleClick = () => {},
}: ButtonProps) => {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
