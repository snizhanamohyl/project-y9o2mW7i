import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: 50px auto 0 auto;
  padding-left: 48px;
  width: 510px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 54px 104px 54px 104px;
  &:focus-within {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  &:focus-within button {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Input = styled.input`
  width: 295px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  outline: none;
  /* &:-internal-autofill-selected {
    background-color: var(--bg-color) !important;
  } */
`;

export const Button = styled.button`
  width: 161px;
  height: 70px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bg-color);
  background-color: var(--accent);
  border-radius: 54px 104px 54px 104px;
  cursor: pointer;
`;
