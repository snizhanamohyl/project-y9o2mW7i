import styled from 'styled-components';
import { Form, Field } from 'formik';

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
  stroke: var(--text-primary);

  &:hover,
  &:focus {
    stroke: var(--accent);
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const FormStyled = styled(Form)`
  input[type='file'] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: block;
    padding: 0;
  }

  & img {
    width: 88px;
    height: 88px;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
    }
  }
`;

export const UserIcon = styled.svg`
  stroke: var(--icon-grey);
`;

export const PlusIcon = styled.svg`
  position: absolute;
  bottom: -5px;
  right: 110px;
  color: var(--accent-green);

  @media screen and (min-width: 768px) {
    top: 131px;
    right: 198px;
  }

  @media screen and (min-width: 768px) {
    top: 85px;
    left: 208px;
  }

  &:hover {
    color: var(--dark);
  }
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 54px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
`;

export const AvatarLabel = styled.label`
  cursor: pointer;
`;

export const UserImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: var(--iconAvatar);
  border-radius: 50%;
  width: 88px;
  height: 88px;
  transition: stroke var(--transition-time) var(--transition-function);

  &:hover,
  &:focus svg {
    stroke: var(--accent);
  }

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
  }

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;

    & svg {
      width: 47px;
      height: 47px;
    }
  }
`;
export const Avatar = styled.img`
object-fit: cover;
`

export const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const NameLabel = styled.label`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const NameInput = styled(Field)`
  width: 282px;
  height: 48px;
  padding: 14px;
  padding-left: 40px;

  letter-spacing: -0.28px;
  line-height: normal;
  color: var(--text-primary);
  opacity: 0.8;

  outline: none;
  border: 1px solid var(--modal-input-stroke);

  border-radius: 6px;
  background-color: transparent;
  transition: border var(--transition-time) var(--transition-function);

  &:hover,
  &:focus {
    /* border: 1px solid var(--accent);
    stroke: green;
    fill: green; */
    border: 1px solid var(--modal-input-stroke-hover);
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 58px;
    font-size: 18px;
    letter-spacing: -0.36px;
    padding: 18px;
    padding-left: 51px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 16px;
    padding-right: 18px;
    padding-bottom: 16px;
  }
`;

export const UserIconStyled = styled.svg`
  position: absolute;
  width: 18px;
  height: 18px;
  stroke: #23262a;
  top: 50%;
  left: 16.5px;
  transform: translateY(-50%);
  stroke: var(--text-primary);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const EditBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;

  @media screen and (min-width: 768px) {
    right: 18px;
  }
`;

export const EditIcon = styled.svg`
  stroke: var(--cancel-menu-icon);
  width: 17px;
  height: 17px;
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 19px;
    height: 19px;
  }

  &:hover {
    stroke: var(--accent-green);
  }
`;

export const SubmitBtn = styled.button`
  width: 282px;
  height: 49px;
  padding: 14px 84px;

  border-radius: 6px;
  background: var(--accent);
  color: var(--main-light-color);
  line-height: 1.28;
  transition: color var(--transition-time) var(--transition-function);
  border: none;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
    padding: 18px 143px;
    font-size: 16px;
    line-height: 1.12;
  }

  &:hover,
  &:focus {
    color: var(--dark);
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: var(--error-red);
  top: 50%;

  left: ${p => (p.location === 'file' ? '24px' : '0')};
  transform: ${p =>
    p.location === 'file' ? 'translateY(-150%)' : 'translateY(-50%)'};
  font-size: 11px;

  @media screen and (min-width: 768px) {
    left: ${p => (p.location === 'file' ? '40px' : '0')};
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    left: ${p => (p.location === 'file' ? '50px' : '0')};
  }
`;
