import styled from 'styled-components';
import bgSpinachImg from '../../images/hero-bg-spinach-mob.png';
import bgSpinachMiniImg from '../../images/hero-bg-spinach-mini-mob.png';
import bgShapeImg from '../../images/bg-shape-mob.svg';
import bgSpinachImgTab from '../../images/hero-bg-spinach-tab.png';
import bgSpinachMiniImgTab from '../../images/hero-bg-spinach-mini-tab.png';
import bgShapeImgTab from '../../images/bg-shape-tab.svg';
import bgSpinachImgDesk from '../../images/hero-bg-spinach-desk.png';
import bgSpinachMiniImgDesk from '../../images/hero-bg-spinach-mini-desk.png';
import bgShapeImgDesk from '../../images/bg-shape-desk.svg';

const heroBgMob = `url(${bgSpinachMiniImg}) left 30px no-repeat,
  url(${bgSpinachImg}) left 54px no-repeat,
  url(${bgShapeImg}) right 154px no-repeat, var(--bg-color);`;

const heroBgTab = `url(${bgSpinachMiniImgTab}) left 0 no-repeat,
  url(${bgSpinachImgTab}) right 0 no-repeat,
  url(${bgShapeImgTab}) right top no-repeat, var(--bg-color);`;

const heroBgDesk = `url(${bgSpinachMiniImgDesk}) left 0 no-repeat,
  url(${bgSpinachImgDesk}) right 0 no-repeat,
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

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    background: ${({ ismainpage }) =>
      ismainpage === 'true' ? heroBgTab : 'var(--bg-color)'};
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;

    background: ${({ ismainpage }) =>
      ismainpage === 'true' ? heroBgDesk : 'var(--bg-color)'};
  }
`;
