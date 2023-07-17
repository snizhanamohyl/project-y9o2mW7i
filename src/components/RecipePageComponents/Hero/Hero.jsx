import {
  BtnAddFavorite,
  MainTitle,
  ContainerTimePrepare,
  RecipeDescription,
  SectionHero,
} from './Hero.styled';
import sprite from '../../../assets/sprite.svg';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteRecipeFromFavorites, addRecipeToFavorites } from '../../../redux/Favorite/operations';
import { getAllFavorites } from '../../../redux/Favorite/selectors';

export default function RecipePageHero({ recipe, id }) {
  const { title, description, time } = recipe;

  const dispatch = useDispatch();
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const favoritesList = useSelector(getAllFavorites);
  const onHandleClick = () => {
    setIsAddedToFavorite(prev => !prev);

    isAddedToFavorite
      ? dispatch(deleteRecipeFromFavorites(id))
      : dispatch(addRecipeToFavorites(recipe));
  };

  useEffect(() => {
    setIsAddedToFavorite(
      favoritesList.find(el => el.id === recipe.id) ? true : false
    );
  }, [favoritesList, recipe.id]);

  return (
    <SectionHero>
      <SharedContainer>
        <MainTitle>{title}</MainTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <BtnAddFavorite type="button" onClick={onHandleClick}>Add to favorite recipes</BtnAddFavorite>
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
