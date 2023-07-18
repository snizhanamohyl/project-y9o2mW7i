import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoFooterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 32px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 24px;
  }
`;

export const LogoText = styled.p`
  color: var(--main-light-color);
  margin-left: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;

  @media (min-width: 768px) {
    margin-left: 12px;
    font-size: 28px;
  }
`;
