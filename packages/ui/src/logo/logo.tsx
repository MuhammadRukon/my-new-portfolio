'use client';
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return <div className={`text-2xl font-bold text-blue-500 ${className}`}>Portfolio</div>;
};
