import styled from 'styled-components';
import bgSpinachImg from '../../assets/images/mobile/hero-bg-spinach.png';
import bgSpinachMiniImg from '../../assets/images/mobile/hero-bg-spinach-mini.png';
import bgShapeImg from '../../assets/images/mobile/bg-shape.svg';
import bgSpinachImgTab from '../../assets/images/tablet/hero-bg-spinach.png';
import bgSpinachMiniImgTab from '../../assets/images/tablet/hero-bg-spinach-mini.png';
import bgShapeImgTab from '../../assets/images/tablet/bg-shape.svg';
import bgSpinachImgDesk from '../../assets/images/desktop/hero-bg-spinach.png';
import bgSpinachMiniImgDesk from '../../assets/images/desktop/hero-bg-spinach-mini.png';
import bgShapeImgDesk from '../../assets/images/desktop/bg-shape.svg';

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
