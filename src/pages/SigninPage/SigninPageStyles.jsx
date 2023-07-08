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
  height: 315px;
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
    height: 419px;
    padding-top: 44px;
    padding-left: 50px;
  }
  @media screen and (min-width: 1440px) {
    position: static;
    margin-bottom: 18px;
  }
`;

const Title = styled.h1`
  color: #fafafa;
  font-size: 24;
  line-height: 1.17;
  margin-bottom: 40px;
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
  border: 0.5px solid #fafafa;
  background-color: transparent;
  color: #fafafa;
  padding-left: 45px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fafafa;
    padding-left: 7px;
  }
  :-ms-input-placeholder {
    color: #fafafa;
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
  background-color: #8baa36;
  padding: 12px 106px;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.13;
  color: #fafafa;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 56px;
  }
`;

const Link = styled(NavLink)`
  font-family: inherit;
  font-size: 14px;
  color: #fafafa;
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
  top: 118px;
  left: 40px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 133px;
    left: 65px;
  }
`;

const SvgPass = styled(Svg)`
  top: 174px;
  @media screen and (min-width: 768px) {
    top: 216px;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 1440px) {
    box-sizing:border-box;
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
  SvgPass,
  Container,
};
