const { styled } = require('styled-components');

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 18px;
  padding-left: 16px;
  padding-right: 16px;
  width: 375px;

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
