import styled from 'styled-components';

export const Section = styled.section`
  position: relative;

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

  &::-webkit-scrollbar {
    width: 4px;
    right: 5px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scroll-bar-color);
    outline: none;
    border-radius: 4px;
  }

  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 505px;

    font-size: 18px;
  }

  &:hover {
    outline-color: var(--input-border-color-focus);
  }

  &:focus {
    background-color: var(--white);
    outline-color: var(--input-border-color-focus);
  }
`;
