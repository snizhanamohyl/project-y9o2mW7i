import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  border: none;
  outline: none;
  background-color: transparent;

  span {
    transition: color var(--transition-time) var(--transition-function),
      opacity var(--transition-time) var(--transition-function);
  }

  svg {
    margin-left: 8px;
    stroke: var(--accent);
    transition: stroke var(--transition-time) var(--transition-function);
  }

  &:hover,
  &:focus {
    span {
      color: var(--accent-green);
      opacity: 0.8;
    }
  }
`;

export const ButtonText = styled.span`
  color: var(--add-input-color);
  font-size: 12px;
  font-style: normal;
  line-height: 12px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ListWrapper = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 10;

  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

  background-color: var(--select-options-bg);
  border-radius: 6px;
  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
    rgba(0, 0, 0, 0.03);

  @media screen and (min-width: 768px) {
    top: calc(100% + 10px);
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 4px 14px;
  min-width: 100%;
  width: max-content;

  @media screen and (min-width: 768px) {
    padding: 8px 18px;
  }
`;

export const Option = styled.li`
  padding: 4px 0;

  color: ${({ $active }) => ($active ? 'var(--accent)' : 'var(--select-color)')};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  opacity: 0.5;
  transition: color var(--transition-time) var(--transition-function);
  cursor: pointer;

  &:hover {
    color: var(--select-options-hover);
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
