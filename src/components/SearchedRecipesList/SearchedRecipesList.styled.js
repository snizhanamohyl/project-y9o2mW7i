import { Loader } from 'pages/SigninPage/SigninPage.styled';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 333px;
  margin-top: 50px;
  @media (min-width: 768px) {
    min-height: 322px;
  }
`;

export const Spinner = styled(Loader)`
  position: absolute;
  top: 60%;
  left: 50%;
  right: inherit !important;
  bottom: inherit !important;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    top: 50%;
  }
  @media (min-width: 1440px) {
    top: 60%;
  }
`;
