const { styled } = require('styled-components');

export const EditLink = styled.a`
display: block;
`;

export const LogOutBtn = styled.a`
 display: block;
 line-height: 1.2;
  background-color: var(--accent);
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

`;

