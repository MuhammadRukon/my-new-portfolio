'use client';
import React, { JSX } from 'react';
import { Button } from '@repo/ui/button';

export default function ResumeButton(): JSX.Element {
  return (
    <Button
      handleClick={(): void => {
        alert('resume downloading option under construction');
      }}
    >
      Resume
    </Button>
  );
}
