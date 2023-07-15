import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SeeAllLink = styled(NavLink)`
  transition: var(--transition-time) var(--transition-function);
  display: block;
  text-align: center;
  margin-left: auto;
  width: 94px;
  height: 38px;
  padding: 10px 24px;
  background-color: var(--accent);
  border-radius: 6px;
  color: var(--bg-color);
  margin-top: 24px;

  &:hover {
    background-color: var(--dark-accent);
  }

  &:focus {
    background-color: var(--dark-accent);
  }

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    font-size: 14px;
    margin-top: 50px;
  }
`;
