import { styled } from 'styled-components';

import spot from 'assets/images/mobile/green-spot.svg';

export const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 18px;
  padding-left: 16px;
  padding-right: 16px;
  width: 375px;
  ${({ $isBg }) =>
    $isBg
      ? `&:before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    transform: rotate(-25deg);
    background-color: var(--dark-accent);
    position: absolute;
    left: 244px;
    top: 75px;
    border-radius: 3px;

    @media (min-width: 768px) {
      width: 12px;
      height: 12px;
      position: absolute;
      left: 437px;
      top: 91px;
    }

    @media (min-width: 1440px) {
      position: absolute;
      left: 807px;
      top: 141px;
    }
  }`
      : ''}

  background: ${({ $isBg }) =>
    $isBg
      ? `url(${spot}) 120px 12px no-repeat, url(${spot}) 349px 45px no-repeat`
      : ''};

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    background: ${({ $isBg }) =>
      $isBg
        ? `url(${spot}) 219px 21px / 14px 14px no-repeat, url(${spot}) 726px 34px / 14px 14px no-repeat`
        : ''};
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    background: ${({ $isBg }) =>
      $isBg
        ? `url(${spot}) 328px 54px / 14px 14px no-repeat, url(${spot}) 1250px 65px / 14px 14px no-repeat`
        : ''};
  }
`;
