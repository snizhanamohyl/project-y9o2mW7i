import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;

  width: 100%;
  height: 86px;
  padding: 34px 29px 34px 18px;

  align-items: center;
  justify-content: space-between;

  background-color: var(--light-green-bg);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 100%;
    height: 178px;
    padding: 71px 58px 72px 41px;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 182px;
    padding: 77px 70px 70px 58px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
    @media (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageIngredient = styled.img`
  width: 57px;
  height: 57px;
  border: none;
  margin-right: 12px;
  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
    margin-right: 24px;
  }
  @media (min-width: 1440px) {
    margin-right: 40px;
    width: 128px;
    height: 128px;
  }
`;

export const IngredientName = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
  }
`;
export const QuantityIngredient = styled.span`
  min-width: 47px;
  max-width: 100px;
  padding: 4px 4px;
  color: var(--bg-color);
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  border-radius: 4px;
  background: var(--accent);
  margin-right: 28px;
  @media (min-width: 768px) {
    min-width: 68px;
    max-width: 150px;
    margin-right: 78px;
    font-size: 18px;
    padding: 4px 8px;
  }
  @media (min-width: 1440px) {
    margin-right: 151px;
  }
`;
export const Label = styled.label`
  cursor: pointer;
  display: flex;

  div {
    display: flex;
    position: relative;
    &:first-child {
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
  &:hover div:first-child {
    & path {
      stroke: var(--accent);
    }
  }
`;
export const CheckBoxInput = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  &:checked + & > div:first-child {
    & path {
      stroke: var(--accent);
    }
  }
`;
