import styled from 'styled-components';

export const Wrapper = styled.div``;

export const FileWrapper = styled.label`
  margin: 0 32px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 268px;

  background-color: var(--accent);
  border-radius: 8px;
  cursor: pointer;

  svg {
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`;

export const InputWrapper = styled.label`
  margin-bottom: 24;
  padding-bottom: 18px;
  display: flex;

  border-bottom: 1px solid var(--border-bottom-color);
`;

export const Input = styled.input`
  color: var(--black);
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.28px;
  border: none;
  outline: none;

  &::placeholder {
    opacity: 0.5;
  }
`;
