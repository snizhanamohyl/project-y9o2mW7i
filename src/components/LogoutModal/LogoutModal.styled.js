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


export const ConfirmTitle = styled.p`
  margin-bottom: 24px;
  letter-spacing: -0.28px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const LogoutBtn = styled.button`
  width: 137px;
  height: 49px;
  padding: 14px 18px;

  background-color: var(--accent);
  border-radius: 6px;
  border: none;

  line-height: 1.29;
  text-align: center;
  color: var(--bg-color);
  transition: background-color var(--transition-function)
    var(--transition-time);

  @media screen and (min-width: 768px) {
    padding: 18px 39px;
    width: 192px;
    height: 59px;

    font-size: 16px;
    line-height: 1.13;
  }

  &:hover,
  &:focus {
    background-color: var(--text-primary);
  }
`;

export const CancelBtn = styled.button`
  width: 137px;
  height: 49px;
  padding: 14px 18px;

  background-color: var(--cancelBtn);
  border-radius: 6px;
  border: none;

  line-height: 1.29;
  text-align: center;
  color: var(--text-primary);
  transition: background-color border var(--transition-function)
    var(--transition-time);

  @media screen and (min-width: 768px) {
    padding: 18px 39px;
    font-size: 16px;
    line-height: 1.13;
    width: 192px;
    height: 59px;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    border: 1px solid #23262a;
  }
`;