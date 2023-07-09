import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const SignUpBtn = styled(NavLink)`
  line-height: 1.5;
  display: block;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: none;
  background-color: var(--accent);
  color: var(--bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--dark-accent);
    transition: background-color var(--transition-time) var(--transition-function);
}
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 22px 44px;
  }
`;

export const SignInBtn = styled(NavLink)`
  line-height: 1.5;
  display: block;
  background-color: transparent;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: 2px solid var(--bg-color);
  color: var(--bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--dark-accent);
    border: 2px solid var(--dark-accent);
    transition: background-color, border, var(--transition-time) var(--transition-function);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 22px 44px;
  }
`;
