import styled from 'styled-components';
import bg from '../../../assets/images/mobile/bg-hero-recipe.jpg';

export const SectionHero = styled.section`
  width: 100%;
  height: 455px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  padding: 86px 22px 90px 22px;
  text-align: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  background-color: #e7e7e5;
  @media (min-width: 768px) {
    margin-bottom: 50px;
    padding: 73px 100px 32px 100px;
  }
  @media (min-width: 1440px) {
    padding: 113px 300px 32px 300px;
  }
`;

export const MainTitle = styled.h2`
  margin-bottom: 18px;

  color: var(--accent);

  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 44px;
    letter-spacing: -0.88px;
  }
`;

export const RecipeDescription = styled.p`
  margin-bottom: 24px;
  margin-right: 0;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;
  @media (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 18px;
    letter-spacing: -0.36px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const BtnAddFavorite = styled.button`
  width: 150px;
  height: 35px;
  margin-bottom: 42px;
  color: var(--dark-accent);
  background-color: transparent;

  border-radius: 24px 44px;
  border: 1px solid var(--accent);

  font-size: 10px;
  line-height: normal;
  &:hover {
    color: var(--bg-color);
    background-color: var(--accent);
  }

  @media (min-width: 768px) {
    margin-bottom: 60px;
    width: 278px;
    height: 59px;

    letter-spacing: -0.36px;
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;
export const ContainerTimePrepare = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  svg {
    @media (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;
