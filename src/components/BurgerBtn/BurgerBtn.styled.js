import { styled } from 'styled-components';

export const Btn = styled.button`
  transition: color var(--transition-time) var(--transition-function);

  &:hover,
  &:focus & > path {
    stroke: red;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;
