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
  /* position: relative; */
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 14px;
  letter-spacing: -0.3px;
  color: var(--dark-accent);
`;

export const AccentSpan = styled.span`
  color: var(--accent);
`;

export const Descr = styled.p`
  width: 248px;
  margin-bottom: 44px;
  text-align: center;
`;

// export const Image = styled.img`
//   @media (min-width: 768px) {
//     position: absolute;
//     top: 95px;
//     right: -10px;
//   }
// `;
