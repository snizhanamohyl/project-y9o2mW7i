import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 187px;
`;
