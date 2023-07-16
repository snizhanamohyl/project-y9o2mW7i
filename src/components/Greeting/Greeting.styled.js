import styled from 'styled-components';
import bgDesk from 'assets/images/desktop/welcomebg-1x.jpg';
import bgDeskRetina from 'assets/images/desktop/welcomebg-2x.jpg';
import bgTab from 'assets/images/tablet/welcomebg-1x.jpg';
import bgTabRetina from 'assets/images/tablet/welcomebg-2x.jpg';
import bgMob from 'assets/images/mobile/welcomebg-1x.jpg';
import bgMobRetina from 'assets/images/mobile/welcomebg-2x.jpg';
import { retina } from 'vars/styles';

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

  @media ${retina} {
    background-image: var(--bcg-gradient), url('${bgMobRetina}');
  }

  @media screen and (min-width: 768px) {
    background-image: var(--bcg-gradient), url('${bgTab}');

    @media ${retina} {
      background-image: var(--bcg-gradient), url('${bgTabRetina}');
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: var(--bcg-gradient), url('${bgDesk}');

    @media ${retina} {
      background-image: var(--bcg-gradient), url('${bgDeskRetina}');
    }
  }
`;

export const StyledTitle = styled.h1`
  color: var(--bg-color);
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin-top: 28px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 44px;
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
