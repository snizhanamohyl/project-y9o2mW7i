import styled from 'styled-components';
import bgSpinach from 'assets/images/mobile/bg-spinach-footer-1x.png';
import bgSpinachRet from 'assets/images/mobile/bg-spinach-footer-2x.png';
import bgSpinachTab from 'assets/images/tablet/bg-spinach-footer-1x.png';
import bgSpinachTabRet from 'assets/images/tablet/bg-spinach-footer-2x.png';
import bgSpinachDesk from 'assets/images/desktop/bg-spinach-footer-1x.png';
import bgSpinachDeskRet from 'assets/images/desktop/bg-spinach-footer-2x.png';

import { retina } from 'vars/styles';

const bgMob = `url(${bgSpinach}) right top no-repeat`;
const bgMobRet = `url(${bgSpinachRet}) right top / 69px 66px no-repeat`;

const bgTab = `url(${bgSpinachTab}) right top no-repeat`;
const bgTabRet = `url(${bgSpinachTabRet}) right top /147px 78px no-repeat`;

const bgDesk = `url(${bgSpinachDesk}) right top no-repeat`;
const bgDeskRet = `url(${bgSpinachDeskRet}) right top / 234px 114px no-repeat`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;

  padding-bottom: 28px;
  padding-top: 28px;
  background: ${bgMob}, var(--bg-color);

  @media ${retina} {
    background: ${bgMobRet}, var(--bg-color);
  }

  @media (min-width: 768px) {
    height: 78px;
    padding-bottom: 32px;
    padding-top: 32px;
    background: ${bgTab}, var(--bg-color);

    @media ${retina} {
      background: ${bgTabRet}, var(--bg-color);
    }
  }

  @media (min-width: 1440px) {
    height: 114px;
    padding-bottom: 50px;
    padding-top: 50px;
    background: ${bgDesk}, var(--bg-color);

    @media ${retina} {
      background: ${bgDeskRet}, var(--bg-color);
    }
  }
`;

export const ReservedText = styled.p`
  margin-right: 14px;
  line-height: 10px;
  letter-spacing: -0.1px;
  color: var(--bottom-block-color);
  font-size: 10px;
  font-weight: 500;
  opacity: 0.5;

  @media (min-width: 768px) {
    margin-right: 28px;
    font-size: 14px;
  }

  @media (min-width: 1450px) {
    margin-right: 40px;
  }
`;

export const ServiceText = styled.p`
  color: var(--bottom-block-color);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.5;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
