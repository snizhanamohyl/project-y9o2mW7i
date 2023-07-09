import styled from 'styled-components';
import InputNumber from 'components/InputNumber';

export const Section = styled.section`
  margin-bottom: 44px;

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
  align-items: center;
  gap: 14px;

  border: 1px solid var(--button-border-color);
  border-radius: 18px;
`;

export const Controller = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  background-color: transparent;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const Ingredients = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 18px;

  list-style: none;
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

  background-color: var(--input-bg-color);
  border-radius: 6px;

  & > div {
    position: static;
  }

  & ul {
    padding-left: 46px;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
`;

export const NumericInput = styled(InputNumber)`
  width: 30px;

  color: var(--text-primary);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const RemoveBtn = styled.button`
  margin-left: auto;
  padding: 0;
  display: inline-flex;

  background-color: transparent;
  border: none;
  outline: none;

  svg {
    width: 18px;
    height: 18px;
  }
`;
