import { styled } from 'styled-components';

export const SwitchBody = styled.label`
  width: 61px;
  height: 27px;
  position: relative;
  border-radius: 50px;
  background-color: var(--color-toggler-bg);
  box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1) inset;
  cursor: pointer;

  ${({ $customerStyles }) => $customerStyles}
`;

export const Switch = styled.span`
  display: block;
  outline: none;
  width: 21px;
  height: 21px;
  position: absolute;
  top: 50%;
  left: ${({ mode }) => (mode === 'light' ? '3px' : 'calc(100% - 3px)')};
  border-radius: 50%;
  background: linear-gradient(180deg, #fff 0%, #e8eaea 100%);
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  transform: ${({ mode }) =>
    mode === 'light' ? 'translate(0, -50%)' : 'translate(-100%, -50%)'};
  transition: all var(--transition-time) var(--transition-function);
`;

export const Input = styled.input`
  opacity: 0;
`;
