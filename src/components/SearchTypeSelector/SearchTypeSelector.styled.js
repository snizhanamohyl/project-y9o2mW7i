import styled from 'styled-components';
import { Select } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px auto 42px auto;
  width: 223px;
  height: 34px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
    width: 265px;
    height: 41px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 90px;
    width: 310px;
    height: 49px;
  }
`;

export const Label = styled.p`
  color: var(--title-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const Menu = styled(Select)`
  width: 146px;
  height: 34px;
  font-family: Poppins !important;
  letter-spacing: -0.28px;
  background-color: var(--input-bg-color);
  color: var(--black);
  opacity: 0.5;
  @media (min-width: 768px) {
    width: 175px;
    height: 41px;
  }
  @media (min-width: 1440px) {
    width: 198px;
    height: 49px;
  }
`;
