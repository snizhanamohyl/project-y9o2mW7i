import { styled } from 'styled-components';

export const Btn = styled.button`
  transition: color var(--transition-time) var(--transition-function);
  color: inherit;

  & path {
    stroke: currentColor;
  }

  &:hover,
  &:focus {
    color: var(--accent);
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;
