import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnCategories = styled(NavLink)`
  transition: var(--transition-time) var(--transition-function);

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0 auto;
  width: 240px;
  height: 60px;
  border: 2px solid var(--accent);
  border-radius: 18px 36px;

  background-color: transperent;
  text-align: center;
  font-size: 16px;
  color: var(--transparent-btn-color);
  cursor: poiner;

  &:hover {
    color: var(--bg-color);
    background-color: var(--accent);
  }

  &:focus {
    color: var(--bg-color);
    background-color: var(--accent);
  }
`;
