const { styled } = require('styled-components');

export const EditLink = styled.a`
display: block;
`;

export const LogOutBtn = styled.a`
display: flex;
align-items: center;
justify-content: center;
gap: 4px;
 line-height: 1.2;

  background-color: var(--accent);
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: 0px solid var(--bg-color);
  color: var(--bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--dark-accent);
    border: 0px solid var(--dark-accent);
    transition: background-color, border, var(--transition-time) var(--transition-function);
  }

`;

