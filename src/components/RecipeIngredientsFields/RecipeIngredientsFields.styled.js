import styled from 'styled-components';
import InputNumber from 'components/InputNumber/InputNumber';

export const Section = styled.section`
  margin-bottom: 44px;
  max-width: 610px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const Row = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Block = styled.div`
  padding: 4px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 92px;
  max-height: 32px;

  border: 1px solid var(--button-border-color);
  border-radius: 18px;

  @media screen and (min-width: 768px) {
    padding: 4px 15px;
    width: 110px;
  }
`;

export const Controller = styled.button`
  margin: 0;
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;
  outline: none;

  svg {
    width: 14px;
    height: 14px;

    transition: stroke var(--transition-time) var(--transition-function);
  }

  &:hover,
  &:focus {
    svg {
      stroke: ${({ $decrement }) =>
        $decrement ? 'var(--accent)' : 'var(--hover-dark)'};
    }
  }
`;

export const Value = styled.span`
  color: var(--text-primary);
  font-size: 14px;
  font-style: normal;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Ingredients = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const Item = styled.li`
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
  width: 30px;

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
