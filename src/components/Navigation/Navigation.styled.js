import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  transition: color var(--transition-time) var(--transition-function);

  &:not(:last-child) {
    margin-right: 30px;
  }

  &.active {
    color: var(--accent);
    font-weight: 600;
  }

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1439px) {
    display: none;
  }
`;
