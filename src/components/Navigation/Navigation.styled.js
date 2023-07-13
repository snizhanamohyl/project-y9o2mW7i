import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  transition: color var(--transition-time) var(--transition-function);

  &.active {
    color: var(--accent);
    font-weight: 600;
  }

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 1439px) {
    display: none;
  }
`;
