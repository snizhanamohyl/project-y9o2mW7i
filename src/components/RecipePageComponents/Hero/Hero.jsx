import {
  MainTitle,
  ContainerTimePrepare,
  RecipeDescription,
  SectionHero,
} from './Hero.styled';
import sprite from '../../../assets/sprite.svg';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import { useEffect, useState } from 'react';
import BtnAddToFavorite from '../BtnAddToFavorite/BtnAddToFavorite';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavorites } from 'redux/Favorite/selectors';
import {
  addRecipeToFavorites,
  deleteRecipeFromFavorites,
  getAllFavoritList,
} from 'redux/Favorite/operations';
import { useParams } from 'react-router-dom';

export default function RecipePageHero({ recipe }) {
  const { recipeId } = useParams();
  const { title, description, time } = recipe;
  const dispatch = useDispatch();
  const [isAddedToFavorite, setIsAddedToFavorite] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const favoritesList = useSelector(getAllFavorites);

  const onHandleClick = () => {
    if (isAddedToFavorite) {
      dispatch(deleteRecipeFromFavorites(recipeId));
      setIsAddedToFavorite(prev => !prev);
    } else {
      dispatch(addRecipeToFavorites(recipe));
      setIsAddedToFavorite(prev => !prev);
    }
  };

  useEffect(() => {
    if (favoritesList.length === 0) {
      dispatch(getAllFavoritList());
      setIsAddedToFavorite(favoritesList);
    }
  }, [favoritesList, recipeId]);

  return (
    <SectionHero>
      <SharedContainer>
        <MainTitle>{title}</MainTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <BtnAddToFavorite
          type="button"
          onClick={onHandleClick}
          id={recipeId}
          isAddedToFavorite={isAddedToFavorite}
        />

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
