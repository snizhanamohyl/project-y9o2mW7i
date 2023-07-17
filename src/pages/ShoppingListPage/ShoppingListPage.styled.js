import styled from 'styled-components';

export const ShoppingListTitle = styled.h1`
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.56px;
  color: var(--title-color);
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.64px;
    margin-bottom: 72px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.88px;
    margin-bottom: 72px;
  }
`;

export const ShoppingListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 10px;
  background-color: var(--accent);
  border-radius: 8px;
  color: var(--bg-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    padding: 20px;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 17px 40px;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 50px;
  }
`;

export const OptionNameContainer = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1440px) {
    gap: 142px;
  }
`;

export const ShoppingList = styled.ul`
  padding: 0 0px 100px 0;

  @media screen and (min-width: 768px) {
    padding: 0 0 200px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 40px 195px 0;
  }
`;

export const ShoppingListItem = styled.li`
  display: flex;
  align-items: top;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  color: var(--pre-title-color);
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  height: 84px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    height: 0px;
    width: 100%;
    border: 1px solid var(--border-bottom-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    height: 140px;

    &:not(:last-child) {
      margin-bottom: 44px;
    }
  }
`;


