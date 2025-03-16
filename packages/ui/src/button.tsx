'use client';

import { ReactNode, type JSX } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  handleClick?: () => void;
}
const StyledButton = styled.button`
  border: 1px solid rgb(230, 230, 230);
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 6px 14px;
  background-color: white;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  margin-left: auto;
`;

export const Button = ({ children, handleClick = () => {} }: ButtonProps): JSX.Element => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};
