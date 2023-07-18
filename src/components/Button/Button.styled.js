import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 12px 48px;
  display: inline-flex;
  align-items: center;

  color: var(--bg-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: var(--dark-accent);
  border: none;
  border-radius: 24px 44px;
  outline: none;

  transition: background-color var(--transition-time) var(--transition-function);

  &:hover,
  &:focus {
    background-color: var(--footer-nav-hover);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 64px;
  }
`;
