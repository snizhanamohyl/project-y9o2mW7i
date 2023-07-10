import { styled } from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 100px 0;
  max-width: 259px;

  @media screen and (min-width: 768px) {
    padding: 100px 0 204px 0;
    max-width: 498px;
  }

  @media screen and (min-width: 1440px) {
    padding: 138px 0 204px 0;
  }
`;

export const ErrorPicThumb = styled.div`
  height: 170px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    height: 327px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    height: 331px;
  }
`;

export const ErrorTitle = styled.p`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: -0.36px;
  color: var(--black);

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    font-size: 24px;
    line-height: 1;
  }
  @media screen and (min-width: 1440px) {
    letter-spacing: -0.48px;
  }
`;

export const ErrorText = styled.p`
  text-align: center;
  color: var(--black);
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;