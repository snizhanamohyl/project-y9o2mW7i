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

  svg {
    margin-left: 8px;
    stroke: var(--accent);
  }
`;

export const ButtonText = styled.span`
  color: var(--black);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  line-height: 12px;
`;

export const List = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;

  margin: 0;
  padding: 4px 14px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  min-width: 100%;
  max-height: 144px;
  width: max-content;

  background-color: var(--white);
  list-style: none;
  border-radius: 6px;
  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
    rgba(0, 0, 0, 0.03);
  overflow: auto;
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
`;
