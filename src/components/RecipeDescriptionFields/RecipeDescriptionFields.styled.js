import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 68px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 358px 1fr;
    gap: 50px;
  }
`;

export const FileWrapper = styled.label`
  position: relative;

  margin: 0 32px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 268px;

  background-color: ${({ $isEmpty }) =>
    $isEmpty ? 'var(--accent)' : 'transparent'};
  border-radius: 8px;
  cursor: pointer;

  svg {
    transition: transform var(--transition-time) var(--transition-function);
  }

  &:hover {
    svg {
      transform: scale(1.05);
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    height: 344px;
  }
`;

export const Preview = styled.img`
  max-width: auto;
  object-fit: cover;
  height: 100%;
  border-radius: 8px;
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;
  height: 40px;

  border-bottom: 1px solid var(--border-bottom-color);
  transition: border-color var(--transition-time) var(--transition-function);

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:hover,
  &:focus-within {
    border-color: var(--input-border-color-focus);
  }

  @media screen and (min-width: 768px) {
    height: 43px;

    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Input = styled.input`
  width: 100%;

  color: var(--black);
  font-family: inherit;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Text = styled.span`
  color: var(--black);
  font-size: 14px;
  letter-spacing: -0.28px;
  opacity: 0.5;

  cursor: default;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
