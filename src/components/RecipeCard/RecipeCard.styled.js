import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RecipeItem = styled.li``;

export const RecipeLink = styled(NavLink)``;

export const ImgBox = styled.div`
  position: relative;
  width: 344px;
  background-color: grey;
  border-radius: 8px;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    width: 336px;
    margin-bottom: 40px;

    @media (min-width: 1440px) {
      width: 300px;
      margin-bottom: 50px;
    }
  }
`;

export const RecipeImg = styled.img`
  width: 344px;
  height: 322px;
  border-radius: 8px;
`;

export const Recipe = styled.p`
  position: absolute;
  bottom: 26px;
  left: 18px;

  width: 306px;
  min-height: 52px;
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
