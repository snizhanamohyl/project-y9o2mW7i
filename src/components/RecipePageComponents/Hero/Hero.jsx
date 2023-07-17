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
} from 'redux/Favorite/operations';

export default function RecipePageHero({ recipe, id }) {
  const { title, description, time } = recipe;
  const dispatch = useDispatch();
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const favoritesList = useSelector(getAllFavorites);

  const onHandleClick = () => {
    isAddedToFavorite
      ? dispatch(deleteRecipeFromFavorites(id))
      : dispatch(addRecipeToFavorites(recipe));
    setIsAddedToFavorite(prev => !prev);
  };

  useEffect(() => {
    setIsAddedToFavorite(
      favoritesList?.find(el => el._id === recipe._id) ? true : false
    );
  }, [favoritesList, recipe._id]);

  return (
    <SectionHero>
      <SharedContainer>
        <MainTitle>{title}</MainTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <BtnAddToFavorite
          type="button"
          onClick={onHandleClick}
          id={id}
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
