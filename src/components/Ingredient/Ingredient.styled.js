import styled from 'styled-components';
import InputNumber from 'components/InputNumber/InputNumber';
import ValidationError from 'components/ValidationError/ValidationError';

export const Item = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  gap: 14px;
`;

export const InputWrapper = styled.div`
  position: relative;

  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 53px;
  max-width: 194px;

  background-color: var(--input-bg-color);
  border-radius: 6px;

  &:first-child {
    flex: 1;
  }

  & > div {
    position: static;
    & > div {
      width: 100%;
    }
  }

  & ul {
    padding-left: 46px;
  }

  @media screen and (min-width: 768px) {
    max-width: 398px;
    height: 59px;
  }
`;

export const NumericInput = styled(InputNumber)`
  width: 40px;

  color: var(--text-primary);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const RemoveBtn = styled.button`
  margin-left: auto;
  display: inline-flex;

  background-color: transparent;
  border: none;
  outline: none;
  transition: color var(--transition-time) var(--transition-function);

  &:hover,
  &:focus {
    color: var(--accent);
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: #333333;
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ErrorMessage = styled(ValidationError)`
  top: 100%;
`;
