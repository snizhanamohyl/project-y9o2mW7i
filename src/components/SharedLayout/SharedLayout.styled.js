import styled from 'styled-components';
import bgSpinachImg from '../../images/hero-bg-spinach-mob.png';
import bgSpinachMiniImg from '../../images/hero-bg-spinach-mini-mob.png';
import bgShapeImg from '../../images/bg-shape-mob.svg';
import bgSpinachImgTab from '../../images/hero-bg-spinach-tab.png';
import bgSpinachMiniImgTab from '../../images/hero-bg-spinach-mini-tab.png';
import bgShapeImgTab from '../../images/bg-shape-tab.svg';

export const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 18px;
  padding-left: 16px;
  padding-right: 16px;
  width: 375px;

  background: url(${bgSpinachMiniImg}) left 30px no-repeat,
    url(${bgSpinachImg}) left 54px no-repeat,
    url(${bgShapeImg}) right 154px no-repeat;

  @media (min-width: 768px) {
    background: url(${bgSpinachMiniImgTab}) left -76px no-repeat,
      url(${bgSpinachImgTab}) right 76px no-repeat,
      url(${bgShapeImgTab}) right top no-repeat;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
