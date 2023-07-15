import styled from 'styled-components';

export const CloseButton = styled.button`
position: absolute;
    top: 24px;
    right: 24px;
    border: none;
    padding: 0;
    background-color: inherit;
`;

export const CloseIcon = styled.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const UploadWrap = styled.label`
   border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;`;

export const UploadInput = styled.input`
display: none;
`;

export const Form = styled.form`
    display: block;
    width: 100%;
`

export const InputWrapper = styled.div`
     position: relative;
`;

export const NameEditInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid grey;
  border-radius: 6px;
  outline: none;
  padding-left: 40px;
  display: flex;
  justify-content: center;
  transition: color var(--transition-time) var(--transition-function);
  color: var(--dark-accent);
  line-height: normal;
  letter-spacing: -0.28px;
  opacity: 0.800000011920929;

  &:hover,
  &:focus {
    border: 1px solid var(--accent);
  }

  @media screen and (min-width: 768px) {
    height: 58px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const UserIcon = styled.svg`
    position: absolute;
    top: 50%;
    left: 14px;
    height: 18px;
    width: 18px;
    translate: 0 -50%;
`;

export const PencilIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 14px;
  height: 17px;
  width: 17px;
  translate: 0 -50%;
`;

export const SaveButton = styled.button`
  display: flex;
  width: 100%;
  height: 49px;
  margin-top: 24px;

  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--accent);
  color: var(--bg-color);
  line-height: 1.28;
  transition: color var(--transition-time) var(--transition-function);

  &:hover,
  &:focus {
    color: var(--dark-accent);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;
