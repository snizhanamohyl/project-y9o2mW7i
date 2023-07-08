import styled from '@emotion/styled';
import { Field} from 'formik';

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
`;

const Section = styled.div`
  height: 490px;
  background-size: cover;
  background-image: url(images/bg-mob.png);
  position: relative;
  @media screen and (min-width: 768px) {
    height: 606px;
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
`;

const Title = styled.h1`
  color: #fafafa;
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
  border: 0.5px solid #fafafa;
  background-color: transparent;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fafafa;
    padding-left: 40px;
  }
  :-ms-input-placeholder {
    color: #fafafa;
    padding-left: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
    font-size: 18px;
    margin-bottom: 24px;
    ::placeholder,
    ::-webkit-input-placeholder {
      padding-left: 50px;
    }
    :-ms-input-placeholder {
      padding-left: 50px;
    }
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
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 56px;
  }
`;

const Link = styled.a`
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
    left: 65px;
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
};
