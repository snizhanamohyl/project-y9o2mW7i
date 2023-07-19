import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const InputWrapper = styled.label`
  position: relative;

  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  border: none;
  outline: none;
  background-color: transparent;

  svg {
    margin-left: 8px;
    stroke: var(--accent);
  }
`;

export const InputField = styled.input`
  width: 100%;

  color: var(--add-ingr-input-color);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  background-color: transparent;
  border: none;
  outline: none;

  opacity: 0;
  transition: opacity var(--transition-time) var(--transition-function);

  &:focus {
    opacity: 1;

    & + span {
      opacity: 0;
      pointer-events: none;
    }
  }

  &::placeholder {
    color: var(--add-placeholder-color);
    opacity: var(--add-input-opacity);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Value = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  display: flex;
  align-items: center;
  height: 100%;

  color: var(--black);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Placeholder = styled(Value)`
  color: var(--add-placeholder-color);
  opacity: var(--add-input-opacity);
`;

export const ListWrapper = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 10;

  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: center;

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
`;

export const Option = styled.li`
  padding: 3px 0;

  color: var(--select-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 12);
  letter-spacing: -0.24px;
  opacity: 0.5;

  &:hover {
    color: var(--select-options-hover);
    opacity: 1;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FailureMessage = styled.p`
  height: 50px;
  display: flex;
  align-items: center;

  color: var(--select-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  opacity: var(--add-input-opacity);
  text-align: center;

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

  @media screen and (min-width: 768px) {
    max-height: 172px;
  }
`;
