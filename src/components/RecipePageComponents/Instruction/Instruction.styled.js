import styled from 'styled-components';
export const RecipeInstruction = styled.section`
  max-width: 375px;
  padding: 0 0 100px 0;

  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 0 50px 0;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 0 262px 0;

    display: flex;
    gap: 50px;
    div {
      max-width: 757px;
    }
  }
`;

export const Title = styled.h2`
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
  color: var(--recipe-instruction-color);
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
    @media (min-width: 1440px) {
      margin-bottom: 21px;
    }
  }
  &:before {
    counter-increment: myCounter;
    content: counter(myCounter);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7px;
    height: 21px;
    padding: 2px 10.5px 2px 10.5px;
    margin-right: 14px;
    color: var(--white);
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    line-height: normal;
    border-radius: 50%;
    background: var(--accent);

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ImageIngredient = styled.img`
  width: 343px;
  height: 250px;
  @media (min-width: 768px) {
    width: 433px;
    height: 332px;
  }
`;
