'use client';
import { type JSX } from 'react';
import styled from 'styled-components';

type Props = {
  src: string;
  width?: number;
  height?: number;
};

const StyledImgContainer = styled.div<{ width?: number; height?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
`;

const StyledImg = styled.img`
  width: 70%;
  height: 100%;
  display: block;
  margin: 0 auto;
  object-fit: contain;
`;

export default function Logo({ width, height, src }: Props): JSX.Element {
  return (
    <StyledImgContainer width={width} height={height}>
      <StyledImg src={src} alt="logo" />
    </StyledImgContainer>
  );
}
