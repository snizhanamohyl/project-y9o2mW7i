import {
  MainTitle,
  ContainerTimePrepare,
  RecipeDescription,
  SectionHero,
} from './Hero.styled';
import sprite from '../../../assets/sprite.svg';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import BtnAddToFavorite from '../BtnAddToFavorite/BtnAddToFavorite';
import { useParams } from 'react-router-dom';

export default function RecipePageHero({ recipe }) {
  const { recipeId } = useParams();
  const { title, description, time } = recipe;
  console.log(recipe);
  return (
    <SectionHero>
      <SharedContainer>
        <MainTitle>{title}</MainTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <BtnAddToFavorite type="button" id={recipeId} recipe={recipe} />

        <ContainerTimePrepare>
          <svg width={14} height={14}>
            <use href={`${sprite}#icon-clock`}></use>
          </svg>
          <span>{time} min</span>
        </ContainerTimePrepare>
      </SharedContainer>
    </SectionHero>
  );
}
