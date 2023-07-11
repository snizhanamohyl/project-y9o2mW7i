import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 24px;
  padding: 10px 16px;
  width: 100%;
  height: 154px;

  color: var(--black);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  background-color: var(--input-bg-color);
  border-radius: 6px;

  transition: all var(--transition-time) var(--transition-function);
  border: none;
  outline-color: transparent;
  resize: none;
  outline: 1px solid transparent;

  &::placeholder {
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 505px;

    font-size: 18px;
  }

  &:focus {
    background-color: var(--white);
    outline-color: var(--input-border-color-focus);
  }
`;
