import { useEffect, useState } from 'react';
import RecipePageIngredientsItem from '../IngredientsItem/IngredientsItem';
import { IngredientsList } from './IngredientsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getShoppingList } from 'redux/ShopingList/selectors';
import { getAllShoppingList } from 'redux/ShopingList/operations';
export default function RecipePageIngredientsList({ ingredients, id }) {
  const dispatch = useDispatch();
  const [ingredientsList, setIngredientsList] = useState([]);
  const shoppingList = useSelector(getShoppingList);
  useEffect(() => {
    if (ingredientsList.length === 0) {
      dispatch(getAllShoppingList());
      setIngredientsList(shoppingList);
    }
    if (ingredientsList.length === shoppingList.length) {
      return;
    }
    dispatch(getAllShoppingList());
    setIngredientsList(shoppingList);
  }, [dispatch, shoppingList, ingredientsList.length]);
  return (
    <IngredientsList>
      {ingredients?.map(ingredient => (
        <RecipePageIngredientsItem
          key={ingredient.id._id}
          ingredient={ingredient}
          idRecipe={id}
        />
      ))}
    </IngredientsList>
  );
}
