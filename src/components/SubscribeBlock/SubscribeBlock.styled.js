import {Field, Form} from "formik";
import styled from 'styled-components';

export const SubscribeMainText = styled.p`
  display: none;

  @media (min-width: 1440px) {
    display: block;

    color: var(--bg-color);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.28;
    margin-bottom: 14px;
  }
`;

export const SubscribeText = styled.p`
  display: none;

  @media (min-width: 1440px) {
    display: block;

    text-align: initial;
    color: var(--bg-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28;
    margin-bottom: 28px;
  }
`;

export const ButtonsFooterContainer = styled.div`
  margin-bottom: 44px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    width: 340px;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 40px;
  }
`;

export const EmailInputBox = styled.div`
  position: relative;
  margin: 0 auto 12px auto;
  width: 204px;
  height: 38px;

  @media (min-width: 768px) {
    width: 260px;
    height: 50px;
    margin: 0 12px 0 0;
  }

  @media (min-width: 1440px) {
    width: 340px;
    height: 60px;
    margin: 0 0 16px 0;
  }
`;

export const FormEl = styled(Form)`
   
   @media (min-width: 768px) {
    display: flex;
  }

   @media (min-width: 1440px) {
    display: block;
  }
`;

export const IconLetter = styled.svg`
  position: absolute;
  color: var(--bg-color);
  top: 10px;
  left: 16px;

  @media (min-width: 768px) {
    top: 12px;
    left: 18px;
  }

  @media (min-width: 1450px) {
    top: 16px;
    left: 15px;
  }
`;

export const EmailInput = styled(Field)`
  background-color: transparent;
  padding-left: 42px;
  border-radius: 10px;
  width: 204px;
  height: 38px;
  border: 1px solid rgba(250, 250, 250, 0.157);
  color: var(--bg-color);
  font-size: 10px;
  outline: none;
  transition: border-color var(--transition-time) var(--transition-function);

  &:hover {
    border-color: rgba(250, 250, 250, 1);
  }

  &:focus {
    border: 1px solid var(--bg-color);
  }

  &::placeholder {
    color: var(--bg-color);
    font-size: 10px;
  }

  @media (min-width: 768px) {
    width: 260px;
    height: 50px;
    padding-left: 50px;
    margin-left: 0;
    margin-bottom: 0;
    font-weight: 400;
    line-height: 1.28;
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
    }
  }


  @media (min-width: 1440px) {
    width: 340px;
    height: 60px;
    padding-left: 52px;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 16px;
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const ErrorEmailInput = styled(EmailInput)`
  border: 1px solid var(--error-red);
`;

export const SubscribeBtn = styled.button`
  width: 204px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid grey;
  background-color: var(--accent);
  border: none;
  color: var(--bg-color);
  text-align: center;
  font-size: 14px;
  line-height: 1.14;
  transition: var(--transition-time) var(--transition-function);

  &:hover {
    color: var(--dark-accent);
  }

  &:focus {
    color: var(--dark-accent);
  }

  @media (min-width: 768px) {
    width: 188px;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.12;
  }

  @media (min-width: 1440px) {
    width: 340px;
    height: 60px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.12;
  }
`;
