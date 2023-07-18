const { styled } = require('styled-components');

export const EditBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 37px;
  margin-bottom: 28px;
  font-weight: 500;
  line-height: 1.6;
  color: var(--text-primary);
  fill: var(--text-primary);
  transition: color, fill, var(--transition-time) var(--transition-function);

  @media screen and (min-width: 768px) {
    gap: 53px;
  }

  &:hover,
  &:focus {
    color: var(--accent);
    fill: var(--accent);
  }
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
  border: none;
  color: var(--bg-color);
  cursor: pointer;
  transition: background-color,
    var(--transition-time) var(--transition-function);

  &:hover,
  &:focus {
    background-color: var(--footer-nav-hover);
  }
`;
