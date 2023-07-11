import styled from 'styled-components';

import bgSpinachImg from 'assets/images/mobile/hero-bg-spinach-1x.png';
import bgSpinachImgRet from 'assets/images/mobile/hero-bg-spinach-2x.png';
import bgSpinachMiniImg from 'assets/images/mobile/hero-bg-spinach-mini-1x.png';
import bgSpinachMiniImgRet from 'assets/images/mobile/hero-bg-spinach-mini-2x.png';
import bgShapeImg from 'assets/images/mobile/bg-shape.svg';

import bgSpinachImgTab from 'assets/images/tablet/hero-bg-spinach-1x.png';
import bgSpinachImgTabRet from 'assets/images/tablet/hero-bg-spinach-2x.png';
import bgSpinachMiniImgTab from 'assets/images/tablet/hero-bg-spinach-mini-1x.png';
import bgSpinachMiniImgTabRet from 'assets/images/tablet/hero-bg-spinach-mini-2x.png';
import bgShapeImgTab from 'assets/images/tablet/bg-shape.svg';

import bgSpinachImgDesk from 'assets/images/desktop/hero-bg-spinach-1x.png';
import bgSpinachImgDeskRet from 'assets/images/desktop/hero-bg-spinach-2x.png';
import bgSpinachMiniImgDesk from 'assets/images/desktop/hero-bg-spinach-mini-1x.png';
import bgSpinachMiniImgDeskRet from 'assets/images/desktop/hero-bg-spinach-mini-2x.png';
import bgShapeImgDesk from 'assets/images/desktop/bg-shape.svg';

import { retina } from 'vars/styles';

const heroBgMob = `url(${bgSpinachMiniImg}) left 30px no-repeat,
  url(${bgSpinachImg}) left 54px no-repeat,
  url(${bgShapeImg}) right 154px no-repeat, var(--bg-color);`;

const heroBgMobRet = `url(${bgSpinachMiniImgRet}) left 30px / 48px 202px no-repeat,
  url(${bgSpinachImgRet}) left 54px / 375px 814px no-repeat,
  url(${bgShapeImg}) right 154px no-repeat, var(--bg-color);`;

const heroBgTab = `url(${bgSpinachMiniImgTab}) left 0 no-repeat,
  url(${bgSpinachImgTab}) right 0 no-repeat,
  url(${bgShapeImgTab}) right top no-repeat, var(--bg-color);`;

const heroBgTabRet = `url(${bgSpinachMiniImgTabRet}) left 0 / 67px 323px no-repeat,
  url(${bgSpinachImgTabRet}) right 0 / 583px 640px no-repeat,
  url(${bgShapeImgTab}) right top no-repeat, var(--bg-color);`;

const heroBgDesk = `url(${bgSpinachMiniImgDesk}) left 0 no-repeat,
  url(${bgSpinachImgDesk}) right 0 no-repeat,
  url(${bgShapeImgDesk}) right top no-repeat, var(--bg-color);`;

const heroBgDeskRet = `url(${bgSpinachMiniImgDeskRet}) left 0 / 116px 398px no-repeat,
  url(${bgSpinachImgDeskRet}) right 0 / 913px 800px no-repeat,
  url(${bgShapeImgDesk}) right top no-repeat, var(--bg-color);`;

export const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 18px;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  width: 375px;

  background: ${({ ismainpage }) =>
    ismainpage === 'true' ? heroBgMob : 'var(--bg-color)'};

  @media ${retina} {
    background: ${({ ismainpage }) =>
      ismainpage === 'true' ? heroBgMobRet : 'var(--bg-color)'};
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    background: ${({ ismainpage }) =>
      ismainpage === 'true' ? heroBgTab : 'var(--bg-color)'};

    @media ${retina} {
      background: ${({ ismainpage }) =>
        ismainpage === 'true' ? heroBgTabRet : 'var(--bg-color)'};
    }
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;

    background: ${({ ismainpage }) =>
      ismainpage === 'true' ? heroBgDesk : 'var(--bg-color)'};

    @media ${retina} {
      background: ${({ ismainpage }) =>
        ismainpage === 'true' ? heroBgDeskRet : 'var(--bg-color)'};
    }
  }
`;
