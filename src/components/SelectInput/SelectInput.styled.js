import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  border: none;
  outline: none;
  background-color: transparent;

  svg {
    margin-left: 8px;
    stroke: var(--accent);
  }
`;

export const InputFiled = styled.input`
  color: var(--black);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  background-color: transparent;
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ListWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;

  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

export const List = styled.ul`
  margin: 0;
  padding: 4px 14px;
  min-width: 100%;
  width: max-content;

  background-color: var(--white);
  list-style: none;
  border-radius: 6px;
  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
    rgba(0, 0, 0, 0.03);
`;

export const Option = styled.li`
  padding: 4px 0;

  color: var(--black);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ScrollBar = styled(SimpleBar)`
  min-width: 100%;
  width: max-content;
  max-height: 144px;

  .simplebar-scrollbar::before {
    background-color: var(--scroll-bar-color);
    width: 4px;
  }
  .simplebar-scrollbar.simplebar-visible::before {
    opacity: 1;
  }
`;
