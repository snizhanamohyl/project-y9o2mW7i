import styled from 'styled-components';
import bgDesk from '../../images/welcomePage/bg.jpg';
import bgDeskRetina from '../../images/welcomePage/bg@2x.jpg';
import bgTab from '../../images/welcomePage/bgTab.jpg';
import bgTabRetina from '../../images/welcomePage/bgTab@2x.jpg';
import bgMob from '../../images/welcomePage/bgMob.jpg';
import bgMobRetina from '../../images/welcomePage/bgMob@2x.jpg';

const retinaDisplay = `(min-device-pixel-ratio: 2),(min-resolution: 192dpi), (min-resolution: 2dppx)`;



export const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: var(--bcg-gradient), url('${bgMob}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${retinaDisplay} {
    background-image: var(--bcg-gradient), url('${bgMobRetina}');
  }

  @media screen and (min-width: 768px) {
    background-image: var(--bcg-gradient), url('${bgTab}');

    @media ${retinaDisplay} {
      background-image: var(--bcg-gradient), url('${bgTabRetina}');
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: var(--bcg-gradient), url('${bgDesk}');

    @media ${retinaDisplay} {
      background-image: var(--bcg-gradient), url('${bgDeskRetina}');
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