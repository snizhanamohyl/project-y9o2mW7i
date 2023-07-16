import styled from 'styled-components';

export const Container = styled.div`
  color: var(--color-text-secondary);

  margin-left: auto;
  margin-right: auto;
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

export const FooterSection = styled.footer`
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
