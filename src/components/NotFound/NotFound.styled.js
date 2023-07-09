import { styled } from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  margin: 200px 58px 0px 58px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin: 200px 130px 0px 130px;
  }
  @media screen and (min-width: 1440px) {
    margin: 200px 470px 0px 470px;
  }
`;

export const ErrorThumb = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin-bottom: 100px;
`;

export const ErrorTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;

@media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;