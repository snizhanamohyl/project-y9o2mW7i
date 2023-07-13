import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 1;
  margin-top: 72px;
  @media (min-width: 768px) {
    font-size: 44px;
    margin-top: 100px;
  }
`;

export const Conteiner = styled.div`
  padding-top: 32px;
  padding-bottom: 100px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 200px;
    gap: 32px;

    @media (min-width: 1440px) {
      gap: 100px 13.33px;
    }
  }
`;
