import {
  addRecipeToFavorites,
  deleteRecipeFromFavorites,
  getAllFavoritList,
} from 'redux/Favorite/operations';
import { BtnAddFavorite } from './BtnAddToFavorite.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllFavorites } from 'redux/Favorite/selectors';

export default function BtnAddToFavorite({ id, recipe }) {
  const dispatch = useDispatch();
  const [recipesList, setRecipesList] = useState([]);
  const favoritesList = useSelector(getAllFavorites);
  const add = favoritesList.find(el => el._id === id);

  function onClick(id) {
    if (!add) {
      dispatch(addRecipeToFavorites(recipe));
    } else {
      dispatch(deleteRecipeFromFavorites(id));
    }
  }

  useEffect(() => {
    if (recipesList.length === 0) {
      dispatch(getAllFavoritList());
      setRecipesList(favoritesList);
    }
    if (recipesList.length === favoritesList.length) {
      return;
    }
    dispatch(getAllFavoritList());
    setRecipesList(favoritesList);
  }, [dispatch, favoritesList, id, recipesList.length]);

  return (
    <BtnAddFavorite
      type="button"
      id={id}
      onClick={() => onClick(id)}
      $toggler={add ? true : false}
    >
      {add ? 'Remove from favorite recipes' : 'Add to favorite recipes'}
    </BtnAddFavorite>
  );
}
