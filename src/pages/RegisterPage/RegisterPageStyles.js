import styled from '@emotion/styled';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';

const Img = styled.img`
  width: 285px;
  height: 250px;
  margin-top: 87px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-top: 96px;
    width: 409px;
    height: 359px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 532px;
    height: 468px;
    margin-right: 115px;
  }
`;

const Section = styled.div`
  height: 490px;
  background-size: cover;
  background-image: url(images/bg-mob.png);
  position: relative;
  @media screen and (min-width: 768px) {
    height: 606px;
  }
  @media screen and (min-width: 1440px) {
    background-image: none;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 335px;
  height: 350px;
  margin: auto;
  background-color: #2a2c36;
  border-radius: 30px;
  padding-top: 32px;
  padding-left: 28px;
  padding-right: 28px;
  position: relative;
  z-index: 10;
  position: relative;
  bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 481px;
    padding-top: 44px;
    padding-left: 50px;
  }
  @media screen and (min-width: 768px) {
    height: 484px;
  }
  @media screen and (min-width: 1440px) {
    position: static;
    margin-bottom: 18px;
  }
`;

const Title = styled.h1`
  color: var(--bg-color);
  font-size: 24;
  line-height: 1.17;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

const Input = styled(Field)`
  box-sizing: border-box;
  font-family: inherit;
  font-size: 14px;
  width: 279px;
  height: 45px;
  margin-bottom: 12px;
  border-radius: 6px;
  border: 0.5px solid var(--bg-color);
  background-color: transparent;
  color: var(--bg-color);
  padding-left: 45px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--bg-color);
    padding-left: 7px;
  }
  :-ms-input-placeholder {
    color: var(--bg-color);
    padding-left: 7px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

const LastInput = styled(Input)`
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 279px;
  height: 45px;
  background-color: var(--accent);
  padding: 12px 106px;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.13;
  color: var(--bg-color);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 56px;
  }
`;

const Link = styled(NavLink)`
  font-family: inherit;
  font-size: 14px;
  color: var(--bg-color);
  margin: auto;
  display: block;
  text-align: center;
  text-decoration: underline;
  margin-top: -10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

const Svg = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 97px;
  left: 40px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 112px;
    left: 67px;
  }
`;

const SvgEmail = styled(Svg)`
  top: 153px;
  @media screen and (min-width: 768px) {
    top: 195px;
  }
`;

const SvgPass = styled(Svg)`
  top: 210px;
  @media screen and (min-width: 768px) {
    top: 277px;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 1440px) {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: 100vh;
    padding-top: 150px;
    background-image: url(images/bg-desk.png);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Error = styled.div`
  font-size: 14px;
  color: #E74A3B;
  position: absolute;
  top: 155px;
`;

const ErrorEmail = styled(Error)`
  top: 237px;
`;

const ErrorPass = styled(Error)`
  top: 320px;
`;


export {
  Img,
  Section,
  Wrapper,
  Title,
  Input,
  LastInput,
  Button,
  Link,
  Svg,
  SvgEmail,
  SvgPass,
  Container,
  Error,
  ErrorEmail,
  ErrorPass,
};
