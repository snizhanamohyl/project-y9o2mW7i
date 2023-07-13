import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 50px 0 100px;

  @media screen and (min-width: 768px) {
    padding: 72px 0 200px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 0 200px;
  }
`;

export const Grid = styled.div`
  padding-top: 72px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 318px;
    column-gap: 120px;
  }
`;
