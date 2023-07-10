import { styled } from 'styled-components';
import heroArrowTab from '../../assets/images/tablet/hero-arrow.svg';
import heroArrowDesk from '../../assets/images/desktop/hero-arrow.svg';

export const HeroWrap = styled.div`
  position: relative;
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

  &::after {
    @media (min-width: 768px) {
      content: '';
      position: absolute;
      z-index: 5;
      width: 186px;
      height: 115px;
      bottom: 84px;
      right: 32px;
      background: url(${heroArrowTab}) no-repeat;
    }

    @media (min-width: 1440px) {
      width: 220px;
      height: 148px;
      bottom: 114px;
      right: 70px;
      background: url(${heroArrowDesk}) no-repeat;
    }
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
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    position: absolute;
    top: 95px;
    right: -32px;
  }

  @media (min-width: 1440px) {
    top: 64px;
    right: 84px;
  }
`;
