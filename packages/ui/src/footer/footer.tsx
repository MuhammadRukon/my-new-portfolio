'use client';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 10px 0;
`;
export default function Footer(): React.ReactElement {
  return (
    <StyledFooter>
      <p>Muhammad Sheikh Rukon. No rights reserved.</p>
    </StyledFooter>
  );
}
