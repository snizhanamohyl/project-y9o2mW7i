import styled from 'styled-components';

export const FooterSection = styled.footer`
  min-width: 375px;
  text-align: center;
  padding-top: 28px;
  padding-bottom: 18px;
  background-color: var(--dark-accent);

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
  }

  @media (min-width: 1440px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const FooterBoxTab = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ElementBoxTab = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterBoxDesk = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
