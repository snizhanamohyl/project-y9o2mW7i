const { styled } = require('styled-components');

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 42px;
  gap: 28px;

  @media (min-width: 768px) {
    margin-top: 50px;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    margin-top: 90px;
    gap: 13px;
    & div:not(:last-child) {
      margin-bottom: 100px;
    }
  }
`;
