import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px auto 42px auto;
  width: 223px;
  height: 34px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
    width: 265px;
    height: 41px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 90px;
    width: 310px;
    height: 49px;
  }

  & > div {
    position: static;
    display: flex;
    align-items: center;
    width: 146px;
    height: 34px;
    padding: 14px;
    border-radius: 6px;
    border: 1px solid var(--input-border-color);
    background-color: var(--input-bg-color);
    @media (min-width: 768px) {
      width: 175px;
      height: 41px;
    }
    @media (min-width: 1440px) {
      width: 198px;
      height: 49px;
    }
    & > div {
      width: inherit;
    }
    & > button {
      width: 100%;
      justify-content: space-between;
      & > span {
        font-size: 14px;
        color: var(--black);
        opacity: 0.5;
      }
    }
  }
`;

export const Label = styled.p`
  color: var(--title-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
