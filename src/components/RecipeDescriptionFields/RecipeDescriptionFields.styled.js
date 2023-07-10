import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 68px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 32px;
  }
`;

export const FileWrapper = styled.label`
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
`;

export const Preview = styled.img`
  max-width: auto;
  object-fit: cover;
  height: 100%;
  border-radius: 8px;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  height: 40px;

  border-bottom: 1px solid var(--border-bottom-color);

  &:not(:last-child) {
    margin-bottom: 24px;
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
  font-family: Poppins;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
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
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.28px;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
