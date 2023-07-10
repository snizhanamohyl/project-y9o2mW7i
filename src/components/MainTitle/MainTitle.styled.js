import styled from 'styled-components';

export const Title = styled.h1`
  color: var(--title-color);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    letter-spacing: -0.88px;
  }
`;
