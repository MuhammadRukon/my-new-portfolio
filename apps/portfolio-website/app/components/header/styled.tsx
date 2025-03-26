import styled from 'styled-components';

export const StyledHeader = styled.header<{ $isScrolled: boolean }>`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  align-items: center;
  position: fixed;
  top: ${(props) => (props.$isScrolled ? '20px' : '0')};
  left: 50%;
  transform: translateX(-50%);
  width: ${(props) => (props.$isScrolled ? '80%' : '100%')};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledNav = styled.nav`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const StyledLi = styled.li`
  display: block;
`;
