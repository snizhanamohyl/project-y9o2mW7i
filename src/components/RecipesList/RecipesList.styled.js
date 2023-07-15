import styled from 'styled-components';

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 28px;
  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1440px) {
    row-gap: 100px;
    column-gap: 13px;
  }
`;
