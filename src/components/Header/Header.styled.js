import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1440px) {
    gap: 187px;
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  padding-top: 21px;
  padding-bottom: 3px;
  z-index: 100;

  @media (min-width: 768px) {
    padding-top: 19px;
    padding-bottom: 1px;
  }

  @media (min-width: 1440px) {
    padding-top: 14px;
    padding-bottom: 0;
  }
`;
