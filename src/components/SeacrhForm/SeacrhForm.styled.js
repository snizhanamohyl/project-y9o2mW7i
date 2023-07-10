import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: 50px auto 0 auto;
  padding-left: 48px;
  width: 510px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  border-radius: 54px 104px 54px 104px;
  transition: box-shadow var(--transition-function) var(--transition-time);
  &:focus-within,
  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Input = styled.input`
  width: 295px;
  font-size: 16px;
  border: none;
  outline: none;
  color: var(--pre-title-color);
`;

export const Button = styled.button`
  width: 161px;
  height: 70px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--bg-color);
  background-color: var(--accent);
  border-radius: 54px 104px 54px 104px;
  transition: box-shadow var(--transition-function) var(--transition-time);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
