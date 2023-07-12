import styled from 'styled-components';

export const ImgBox = styled.li`
  position: relative;
  width: 344px;
  height: 322px;
  background-color: grey;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 336px;
    height: 332px;

    @media (min-width: 1440px) {
      width: 300px;
      height: 323px;
    }
  }
`;

export const RecipeImg = styled.img`
  width: 344px;
  height: 322px;
`;

export const Recipe = styled.p`
  position: absolute;
  bottom: 26px;
  left: 18px;

  width: 306px;
  height: 52px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: var(--white);
  border-radius: 8px;

  font-weight: 500;
  line-height: 20px;
  font-size: 16px;

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 268px;
  }
`;
