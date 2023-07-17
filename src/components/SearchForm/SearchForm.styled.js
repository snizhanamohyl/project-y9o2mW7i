import styled from 'styled-components';

export const Form = styled.form`
  ${({ issearchpage }) =>
    issearchpage === 'true'
      ? `   margin: 50px auto 0 auto;
`
      : ''};
  width: 295px;
  height: 52px;
  display: flex;
  align-items: center;
  border: 1px solid var(--input-border-color);
  border-radius: 54px 104px 54px 104px;
  border-right: none;
  background-color: var(--search-input-bg);
  box-shadow: 0px 4px 97px rgba(34, 37, 42, 0.03);
  transition: border-color var(--transition-time) var(--transition-function);

  &:focus-within,
  &:hover,
  &:focus {
    border-color: var(--input-border-color-focus);
  }

  @media (min-width: 768px) {
    width: 362px;
    height: 59px;
  }

  @media (min-width: 1440px) {
    width: 510px;
    height: 70px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 17px 32px;
  font-size: 12px;
  line-height: normal;
  color: var(--text-primary);
  outline: none;
  border: none;
  background-color: transparent;

  &::placeholder {
    color: var(--placeholder-color);
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 17px 38px;
  }

  @media (min-width: 1440px) {
    padding: 23px 48px;
  }
`;

export const Button = styled.button`
  height: calc(100% + 2px);
  padding: 16px 32px;
  font-size: 14px;
  line-height: normal;
  color: var(--bg-color);
  background-color: ${({ issearchpage }) =>
    issearchpage === 'true' ? 'var(--search-btn)' : 'var(--search-main-btn)'};
  border-radius: 54px 104px 54px 104px;
  transition: background-color var(--transition-time) var(--transition-function);

  &:hover,
  &:focus {
    background-color: ${({ issearchpage }) =>
      issearchpage === 'true' ? 'var(--dark-accent)' : 'var(--accent)'};
    color: var(--search-btn-hover);
  }

  @media (min-width: 768px) {
    padding: 18px 52px;
  }

  @media (min-width: 1440px) {
    padding: 23px 52px;
  }
`;
