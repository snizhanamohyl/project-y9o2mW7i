import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 200px;
  }
  @media (min-width: 1440px) {
    padding-top: 105px;
    padding-bottom: 105px;
  }
`;

export const MainPageTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  color: var(--title-color);
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 44px;
  }
`;
