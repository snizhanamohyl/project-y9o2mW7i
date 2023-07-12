import styled from 'styled-components';
import checkbox from '../../assets/images/mobile/checkbox.svg';
import checkboxTab from '../../assets/images/mobile/checkboxTab.svg';
import bg from '../../assets/images/mobile/bg-hero-recipe.jpg';

export const SectionHero = styled.section`
  height: 455px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 144px 20px 90px 20px;
  text-align: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  background-color: #e7e7e5;
  @media (min-width: 768px) {
    padding: 73px 100px 32px 100px;
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

  @media (min-width: 768px) {
    margin-bottom: 60px;
    width: 278px;
    height: 59px;
    font-size: 18px;
    letter-spacing: -0.36px;
    font-size: 16px;
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

export const IngredientsListHead = styled.section`
  padding: 420px 0 50px 0;
  background-color: var(--bg-color);

  @media (min-width: 768px) {
    padding: 50px 16px 96px 16px;
  }
`;
export const NameColumn = styled.div`
  display: flex;
  padding: 12px 14px;
  width: 100%;
  margin-bottom: 24px;
  background-color: var(--accent);
  color: var(--bg-color);
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
  border-radius: 8px;
  @media (min-width: 768px) {
    margin-bottom: 24px;

    padding: 21px 32px;
  }
`;

export const Ingredients = styled.h3`
  width: 76px;
  font-size: 10px;
  font-weight: 600;

  line-height: normal;
  letter-spacing: 0.3px;
  margin-right: 122px;
  @media (min-width: 768px) {
    margin-right: 312px;
    font-size: 18px;
    letter-spacing: 0.54;
  }
`;
export const Quantity = styled.h3`
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
  margin-right: 18px;
  @media (min-width: 768px) {
    margin-right: 38px;
    font-size: 18px;
    letter-spacing: 0.54;
  }
`;

export const CheckBox = styled.h3`
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
  @media (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 0.54;
  }
`;

export const IngredientsList = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 86px;

  align-items: center;
  justify-content: space-around;
  background-color: var(--light-green-bg);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 100%;
    height: 178px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
    @media (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const ImageIngredient = styled.img`
  width: 57px;
  height: 57px;
  border: none;
  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
  }
`;

export const IngredientName = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.24px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
  }
`;
export const QuantityIngredient = styled.span`
  padding: 4px 4px;
  color: var(--bg-color);
  text-align: right;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  border-radius: 4px;
  background: var(--accent);
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Label = styled.label`
  cursor: pointer;
  display: flex;

  &::before {
    content: '';
    border-radius: 4px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-color: var(--light-green-bg);
    border: 1px solid rgba(126, 126, 126, 0.5);
    @media (min-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
`;
export const CheckBoxInput = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  &:checked {
    & + Label::before {
      content: '';
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--accent);
      width: 18px;
      height: 18px;
      background-image: url(${checkbox});
      background-repeat: no-repeat;
      background-position: center;

      @media (min-width: 768px) {
        width: 35px;
        height: 35px;
        background-image: url(${checkboxTab});
      }
    }
  }
`;

export const RecipeInstruction = styled.section`
  padding-bottom: 100px;
  background-color: var(--bg-color);

  @media (min-width: 768px) {
    padding: 0 16px 50px 16px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 32px;
  color: var(--pre-title-color);
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    letter-spacing: -0.24px;
    margin-bottom: 34px;
  }
`;

export const Instruction = styled.ol`
  margin-bottom: 40px;
  padding: 0;
  counter-reset: myCounter;
`;

export const InstructionItem = styled.li`
  display: flex;
  align-items: flex-start;
  list-style: none;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.17;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  &:not(:last-child) {
    margin-bottom: 17px;
    @media (min-width: 768px) {
      margin-bottom: 20px;
    }
  }
  &:before {
    counter-increment: myCounter;
    content: counter(myCounter);
    display: block;
    align-items: center;

    padding: 2px 7px 1px 7px;
    margin-right: 14px;
    color: var(--white);
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    line-height: normal;

    border-radius: 100px;
    background: var(--accent);
    @media (min-width: 768px) {
      padding: 0.5px 7px 0.5px 7px;
      font-size: 14px;
    }
  }
`;

export const Container = styled.div`
  max-width: 343px;
  min-height: 250px;
  @media (min-width: 768px) {
    max-width: 433px;
    min-height: 332px;
  }

  div {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;

    border-radius: 8px;
  }
  iframe {
    display: block;
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
`;
