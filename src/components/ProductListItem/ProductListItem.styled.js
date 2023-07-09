import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  gap: 46px;

  @media screen and (min-width: 768px) {
    gap: 110px;
  }

  @media screen and (min-width: 1440px) {
    gap: 174px;
  }
`;

export const NumberContainer = styled.span`
  height: 23px;
  width: 37px;
  padding: 4px 0;
  background-color: var(--accent);
  border-radius: 4px;
  text-align: center;
  color: var(--bg-color);
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  @media screen and (min-width: 768px) {
    height: 35px;
    width: 68px;
    font-size: 18px;
    line-height: 26px;
  }

  @media screen and (min-width: 1440px) {
    height: 35px;
    width: 68px;
    font-size: 18px;
    line-height: 26px;
  }
`;

export const ProductImg = styled.img`
  display: block;
  width: 60px;
  height: 60px;

  @media screen and (min-width: 768px) {
    width: 93px;
    height: 97px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: top;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

