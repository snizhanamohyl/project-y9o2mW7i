import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  width: ${({ isfooter }) => (isfooter ? '32px' : '40px')};
  height: ${({ isfooter }) => (isfooter ? '32px' : '40px')};
  padding: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isfooter }) => (isfooter ? '#EBF3D4' : '#8BAA36')};
  border-radius: 12px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    padding: 7px;
  }
`;

export const SvgLogo = styled.svg`
  width: 100%;
  height: 100%;
`;
