import styled from 'styled-components';

import bgSpinachImg from 'assets/images/mobile/hero-bg-spinach-1x.png';
import bgSpinachImgRet from 'assets/images/mobile/hero-bg-spinach-2x.png';
import bgSpinachMiniImg from 'assets/images/mobile/hero-bg-spinach-mini-1x.png';
import bgSpinachMiniImgRet from 'assets/images/mobile/hero-bg-spinach-mini-2x.png';
import bgShapeImg from 'assets/images/mobile/bg-shape.svg';
import bgSpinachSharedImg from 'assets/images/mobile/bg-spinach-shared-1x.png';
import bgSpinachSharedImgRet from 'assets/images/mobile/bg-spinach-shared-2x.png';

import bgSpinachImgTab from 'assets/images/tablet/hero-bg-spinach-1x.png';
import bgSpinachImgTabRet from 'assets/images/tablet/hero-bg-spinach-2x.png';
import bgSpinachMiniImgTab from 'assets/images/tablet/hero-bg-spinach-mini-1x.png';
import bgSpinachMiniImgTabRet from 'assets/images/tablet/hero-bg-spinach-mini-2x.png';
import bgShapeImgTab from 'assets/images/tablet/bg-shape.svg';
import bgSpinachSharedImgTab from 'assets/images/tablet/bg-spinach-shared-1x.png';
import bgSpinachSharedImgTabRet from 'assets/images/tablet/bg-spinach-shared-2x.png';

import bgSpinachImgDesk from 'assets/images/desktop/hero-bg-spinach-1x.png';
import bgSpinachImgDeskRet from 'assets/images/desktop/hero-bg-spinach-2x.png';
import bgSpinachMiniImgDesk from 'assets/images/desktop/hero-bg-spinach-mini-1x.png';
import bgSpinachMiniImgDeskRet from 'assets/images/desktop/hero-bg-spinach-mini-2x.png';
import bgShapeImgDesk from 'assets/images/desktop/bg-shape.svg';
import bgSpinachSharedImgDesk from 'assets/images/desktop/bg-spinach-shared-1x.png';
import bgSpinachSharedImgDeskRet from 'assets/images/desktop/bg-spinach-shared-2x.png';

import { retina } from 'vars/styles';

const heroBgMob = `url(${bgSpinachMiniImg}) left 30px no-repeat,
  url(${bgSpinachImg}) right 54px no-repeat,
  url(${bgShapeImg}) right 154px no-repeat,`;

const heroBgMobRet = `url(${bgSpinachMiniImgRet}) left 30px / 48px 202px no-repeat,
  url(${bgSpinachImgRet}) right 54px / 375px 814px no-repeat,
  url(${bgShapeImg}) right 154px no-repeat,`;

const heroBgTab = `url(${bgSpinachMiniImgTab}) left 0 no-repeat,
  url(${bgSpinachImgTab}) right 0 no-repeat,
  url(${bgShapeImgTab}) right top no-repeat,`;

const heroBgTabRet = `url(${bgSpinachMiniImgTabRet}) left 0 / 67px 323px no-repeat,
  url(${bgSpinachImgTabRet}) right 0 / 583px 640px no-repeat,
  url(${bgShapeImgTab}) right top no-repeat,`;

const heroBgDesk = `url(${bgSpinachMiniImgDesk}) left 0 no-repeat,
  url(${bgSpinachImgDesk}) right 0 no-repeat,
  url(${bgShapeImgDesk}) right top no-repeat,`;

const heroBgDeskRet = `url(${bgSpinachMiniImgDeskRet}) left 0 / 116px 398px no-repeat,
  url(${bgSpinachImgDeskRet}) right 0 / 913px 800px no-repeat,
  url(${bgShapeImgDesk}) right top no-repeat,`;

export const Layout = styled.div`
  position: relative;
  padding-top: ${({ $isRecipePage }) => ($isRecipePage ? 0 : '64px')};
  width: 100vw;

  background: ${({ $isMainPage }) => `${$isMainPage ? heroBgMob : ''} 
  url(${bgSpinachSharedImg}) left bottom no-repeat, var(--bg-color)`};

  @media ${retina} {
    background: ${({ $isMainPage }) =>
      `${
        $isMainPage ? heroBgMobRet : ''
      } url(${bgSpinachSharedImgRet}) left bottom / 168px 129px no-repeat, var(--bg-color)`};
  }

  @media (min-width: 768px) {
    background: ${({ $isMainPage }) => `${$isMainPage ? heroBgTab : ''} 
      url(${bgSpinachSharedImgTab}) left bottom no-repeat, var(--bg-color)`};

    @media ${retina} {
      background: ${({ $isMainPage }) =>
        `${
          $isMainPage ? heroBgTabRet : ''
        } url(${bgSpinachSharedImgTabRet}) left bottom / 266px 305px no-repeat, var(--bg-color)`};
    }
  }

  @media (min-width: 1440px) {
    background: ${({ $isMainPage }) => `${$isMainPage ? heroBgDesk : ''} 
      url(${bgSpinachSharedImgDesk}) left bottom no-repeat, var(--bg-color)`};

    @media ${retina} {
      background: ${({ $isMainPage }) =>
        `${
          $isMainPage ? heroBgDeskRet : ''
        } url(${bgSpinachSharedImgDeskRet}) left bottom / 400px 301px no-repeat, var(--bg-color)`};
    }
  }
`;
