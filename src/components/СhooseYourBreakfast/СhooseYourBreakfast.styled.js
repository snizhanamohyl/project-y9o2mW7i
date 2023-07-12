import { NavLink } from 'react-router-dom';

const { styled } = require('styled-components');

export const Wrap = styled.div`
  position: absolute;
  bottom: 250px;
  right: 18px;
  width: 225px;
  padding: 8px;
  background-color: var(--bg-color);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 260px;
    padding: 12px;
    bottom: 168px;
    right: 1px;
  }

  @media (min-width: 1440px) {
    width: 298px;
    padding: 16px;
    bottom: 224px;
    right: 22px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.24px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media (min-width: 1440px) {
    line-height: 1.43;
  }
`;

export const TextAccent = styled.span`
  color: var(--accent);
`;

export const SeeRecipesLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  transition: color var(--transition-time) var(--transition-function);

  &:hover {
    color: var(--accent);
  }
`;
