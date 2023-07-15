import styled from 'styled-components';

export const SaveButton = styled.button`
  display: flex;
  width: 282px;
  height: 49px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--accent);
  color: var(--bg-color);
  line-height: 1.28;
  transition: color var(--transition-time) var(--transition-function);

  &:hover,
  &:focus {color: var(--dark-accent)}

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;