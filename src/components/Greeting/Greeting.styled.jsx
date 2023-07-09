import styled from 'styled-components';
import bgDesk from '../../assets/images/welcomePage/bg.jpg';
import bgDeskRetina from '../../assets/images/welcomePage/bg@2x.jpg';
import bgTab from '../../assets/images/welcomePage/bgTab.jpg';
import bgTabRetina from '../../assets/images/welcomePage/bgTab@2x.jpg';
import bgMob from '../../assets/images/welcomePage/bgMob.jpg';
import bgMobRetina from '../../assets/images/welcomePage/bgMob@2x.jpg';

const retinaDisplay = `(min-device-pixel-ratio: 2),(min-resolution: 192dpi), (min-resolution: 2dppx)`;

export const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url('${bgMob}'), var(--bcg-gradient)
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${retinaDisplay} {
    background-image: url('${bgMobRetina}'), var(--bcg-gradient);
  }

  @media screen and (min-width: 768px) {
    background-image: url('${bgTab}'), var(--bcg-gradient);
    
    @media ${retinaDisplay} {
      background-image: url('${bgTabRetina}'), var(--bcg-gradient);
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url('${bgDesk}'),var(--bcg-gradient); 
    
    @media ${retinaDisplay} {
      background-image: url('${bgDeskRetina}'), var(--bcg-gradient);
    }
  }
`;

export const Logo = styled.img`
  width: 54px;
  height: 54px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

export const StyledTitle = styled.h1`
  color: var(--bg-color);
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: -0.56px;
  }
`;

export const StyledText = styled.p`
  width: 305px;
  color: var(--bg-color);
  text-align: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 505px;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: -0.36px;
  }

  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;