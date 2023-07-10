import styled from 'styled-components';
import { Select } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px auto 0 auto;
  width: 310px;
  height: 49px;
`;

export const Label = styled.p`
  color: var(--title-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;
`;

export const Menu = styled(Select)`
  width: 198px;
  height: 49px;
  letter-spacing: -0.28px;
  background-color: var(--input-bg-color);
  color: var(--black);
  opacity: 0.5;
`;
