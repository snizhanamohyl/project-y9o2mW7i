import {
  addRecipeToFavorites,
  deleteRecipeFromFavorites,
  getAllFavoritList,
} from 'redux/Favorite/operations';
import { BtnAddFavorite } from './BtnAddToFavorite.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOff, toggleOn, toggleRevers } from 'redux/toggle/toggle.slice';
import { toggleValue } from 'redux/toggle/selectors';
import { useEffect, useState } from 'react';
import { getAllFavorites } from 'redux/Favorite/selectors';

export default function BtnAddToFavorite({ id, recipe }) {
  const dispatch = useDispatch();
  const toggler = useSelector(toggleValue);

  function onClick() {
    if (toggler === false) {
      dispatch(toggleOn());
      dispatch(addRecipeToFavorites(recipe));
    } else {
      dispatch(toggleOff());
      dispatch(deleteRecipeFromFavorites(id));
    }
  }
  const [recipesList, setRecipesList] = useState([]);
  const favoritesList = useSelector(getAllFavorites);

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
    const added = favoritesList.find(el => el._id === id);
    // added ? toggleRevers() : '';
    console.log(added);
  }, [dispatch, favoritesList, id, recipesList.length]);

  return (
    <BtnAddFavorite type="button" id={id} onClick={onClick} $toggler={toggler}>
      {toggler ? 'Remove from favorite recipes' : 'Add to favorite recipes'}
    </BtnAddFavorite>
  );
}
