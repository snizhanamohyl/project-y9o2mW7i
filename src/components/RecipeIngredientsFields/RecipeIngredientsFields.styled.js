import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 44px;
  max-width: 610px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const Row = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Block = styled.div`
  padding: 4px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 92px;
  max-height: 32px;

  border: 1px solid var(--button-border-color);
  border-radius: 18px;

  @media screen and (min-width: 768px) {
    padding: 4px 15px;
    width: 110px;
  }
`;

export const Controller = styled.button`
  margin: 0;
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;
  outline: none;

  svg {
    width: 14px;
    height: 14px;

    transition: stroke var(--transition-time) var(--transition-function);
  }

  &:hover,
  &:focus {
    svg {
      stroke: ${({ $decrement }) =>
        $decrement ? 'var(--accent)' : 'var(--hover-dark)'};
    }
  }
`;

export const Value = styled.span`
  color: var(--text-primary);
  font-size: 14px;
  font-style: normal;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Ingredients = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;
