import styled from 'styled-components';

export const Form = styled.form`
  width: 295px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  background-color: var(--white);
  border: 1px solid var(--input-border-color);
  border-radius: 54px 104px 54px 104px;
  filter: drop-shadow(0px 4px 97px rgba(34, 37, 42, 0.03));

  &:focus-within {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  &:focus-within button {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    width: 362px;
  }

  @media (min-width: 1440px) {
    width: 510px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 12px;
  line-height: normal;
  color: var(--placeholder-color);
  padding: 17px 32px;
  outline: none;
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 38px;
  }

  @media (min-width: 1440px) {
    padding: 23px 48px;
  }
  /* &:-internal-autofill-selected {
    background-color: var(--bg-color) !important;
  } */
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 16px 32px;
  line-height: normal;
  color: var(--bg-color);
  background-color: var(--dark-accent);
  border-radius: 54px 104px 54px 104px;
  transition: background-color var(--transition-time) var(--transition-function);

  &:hover,
  &:focus {
    background-color: var(--accent);
  }

  @media (min-width: 768px) {
    padding: 18px 52px;
  }

  @media (min-width: 1440px) {
    padding: 23px 52px;
  }
`;
