import { styled } from 'styled-components';
// import bgSpinachImg from '../../images/hero-bg-spinach-mob.png';
// import bgSpinachMiniImg from '../../images/hero-bg-spinach-mini-mob.png';
// import bgShapeImg from '../../images/bg-shape-mob.svg';
// import bgSpinachImgTab from '../../images/hero-bg-spinach-tab.png';
// import bgSpinachMiniImgTab from '../../images/hero-bg-spinach-mini-tab.png';
// import bgShapeImgTab from '../../images/bg-shape-tab.svg';

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
  padding-bottom: 83px;

  @media (min-width: 768px) {
    align-items: flex-start;
    padding-top: 140px;
    padding-bottom: 195px;
  }

  @media (min-width: 1440px) {
    padding-top: 164px;
    padding-bottom: 268px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 14px;
  letter-spacing: -0.3px;
  color: var(--dark-accent);

  @media (min-width: 768px) {
    font-size: 72px;
    letter-spacing: -0.36px;
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    letter-spacing: -0.5px;
    margin-bottom: 14px;
  }
`;

export const AccentSpan = styled.span`
  color: var(--accent);
`;

export const Descr = styled.p`
  width: 248px;
  margin-bottom: 44px;
  text-align: center;

  @media (min-width: 768px) {
    width: 362px;
    margin-bottom: 32px;
    text-align: left;
  }

  @media (min-width: 1440px) {
    width: 465px;
    margin-bottom: 50px;
  }
`;

export const Image = styled.img`
  @media (min-width: 768px) {
    position: absolute;
    top: 159px;
    right: 0px;
  }

  @media (min-width: 1440px) {
    top: 126px;
    right: 184px;
  }
`;
