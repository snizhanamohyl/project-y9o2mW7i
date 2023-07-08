import styled from 'styled-components';

export const ShoppingListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 17px 40px;
  background-color: var(--accent);
  border-radius: 8px;
  color: var(--bg-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 50px;
`;

export const OptionNameContainer = styled.div`
  display: flex;
  gap: 142px;
`;

export const OptionContainer = styled.div`
  display: flex;
  gap: 174px;
`;

export const ShoppingList = styled.ul`
padding: 0 30px;
`

export const ShoppingListItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  color: var(--pre-title-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  height: 140px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 44px;
  }

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    height: 0px;
    width: 100%;
    border: 1px solid var(--border-bottom-color);
  }
`;

export const NumberContainer = styled.span`
  width: 68px;
  padding: 4px 0;
  background-color: var(--accent);
  border-radius: 4px;
  text-align: center;
  color: var(--bg-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`