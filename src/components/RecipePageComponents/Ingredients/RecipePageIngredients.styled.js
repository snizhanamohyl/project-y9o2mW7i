import styled from 'styled-components';
export const IngredientsListHead = styled.section`
  padding: 0px 0 50px 0;
  background-color: var(--bg-color);

  @media (min-width: 768px) {
    padding: 50px 0 96px 0;
  }
  @media (min-width: 1440px) {
    padding: 0 0 100px 0;
  }
`;
export const NameColumn = styled.div`
  display: flex;
  padding: 12px 14px;
  width: 100%;
  margin-bottom: 24px;
  background-color: var(--accent);
  color: var(--bg-color);
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
  border-radius: 8px;
  @media (min-width: 768px) {
    margin-bottom: 24px;

    padding: 21px 32px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 50px;
    height: 60px;
    padding: 21px 40px;
  }
`;

export const Ingredients = styled.h2`
  width: 76px;
  font-size: 10px;
  font-weight: 600;

  line-height: normal;
  letter-spacing: 0.3px;
  margin-right: 122px;
  @media (min-width: 768px) {
    width: 115px;
    margin-right: 312px;
    font-size: 18px;
    letter-spacing: 0.54;
  }
  @media (min-width: 1440px) {
    width: 115px;
    margin-right: 761px;
  }
`;
export const Quantity = styled.h2`
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
  margin-right: 18px;
  @media (min-width: 768px) {
    margin-right: 38px;
    font-size: 18px;
    letter-spacing: 0.54;
  }
  @media (min-width: 1440px) {
    margin-right: 109px;
  }
`;

export const CheckBox = styled.h2`
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
  @media (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 0.54;
  }
`;
