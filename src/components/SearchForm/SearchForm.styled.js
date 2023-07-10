import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 24px;
  border: 1px solid var(--input-border-color);
  background-color: var(--bg-color);
  width: 295px;
  align-items: center;
  border-radius: 54px 104px 54px 104px;

  &:focus-within {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  &:focus-within button {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
  /* &:-internal-autofill-selected {
    background-color: var(--bg-color) !important;
  } */
`;

export const Button = styled.button`
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
`;
