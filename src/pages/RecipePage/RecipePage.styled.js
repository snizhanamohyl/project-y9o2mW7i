import styled from 'styled-components';
import background from '../../assets/images/hero-2x.png';

export const SectionHero = styled.section`
  width: 375px;
  height: 391px;
  padding: 80px 38px 90px 38px;
  text-align: center;

  margin-left: auto;
  margin-right: auto;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;

    background-image: url(${background});
    background-position: center;
    background-size: contain;
    background-color: #e8e8e6;
    background-repeat: no-repeat;
  }
`;

export const MainTitle = styled.h2`
  margin-bottom: 18px;

  color: var(--accent);

  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
`;

export const RecipeDescription = styled.p`
  margin-bottom: 24px;
  margin-right: 0;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;
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
`;
export const ContainerTimePrepare = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: ;
  font-size: 10px;

  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;
`;

export const IngredientsListHead = styled.section`
  padding: 32px 0 50px 0;
  background-color: var(--bg-color);
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
`;

export const Ingredients = styled.h3`
  width: 76px;
  font-size: 10px;
  font-weight: 600;

  line-height: normal;
  letter-spacing: 0.3px;
  margin-right: 122px;
`;
export const Quantity = styled.h3`
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
  margin-right: 18px;
`;

export const CheckBox = styled.h3`
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
`;

export const IngredientsList = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 343px;
  height: 86px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-around;
  background-color: var(--light-green-bg);
  border-radius: 8px;
`;

export const RecipeInstruction = styled.section`
  padding-bottom: 100px;
  background-color: var(--bg-color);
`;

export const Title = styled.h3`
  margin-bottom: 32px;
  color: var(--pre-title-color);
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
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
  &:not(:last-child) {
    margin-bottom: 17px;
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
  }
`;

export const Container = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;
