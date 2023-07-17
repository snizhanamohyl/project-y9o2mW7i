import {
  ImageIngredient,
  IngredientName,
  ListItem,
  QuantityIngredient,
} from './IngredientsItem.styled';

import CheckboxLabels from '../Checkbox/Checkbox';
import { addIngredient, deleteIngredient } from 'redux/ShopingList/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShoppingList } from 'redux/ShopingList/selectors';

export default function RecipePageIngredientsItem({ ingredient }) {
  const { recipeId } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const shoppingList = useSelector(getShoppingList);
  const { id, measure } = ingredient;
  const newId = (id._id + recipeId).slice(12, 36);

  const newStructure = {
    ...ingredient.id,
    measure,
    newId: newId,
  };

  const handleCheckboxClick = () => {
    setIsChecked(prev => !prev);
    isChecked
      ? dispatch(deleteIngredient(newId))
      : dispatch(addIngredient(newStructure));
  };

  useEffect(() => {
    setIsChecked(
      shoppingList.find(el => el.newId === newStructure.newId) ? true : false
    );
  }, [newStructure.newId, shoppingList]);

  return (
    <>
      <ListItem>
        <div>
          <ImageIngredient alt={id.name} src={id.img} />
          <IngredientName>{id.name}</IngredientName>
        </div>
        <div>
          <QuantityIngredient>{measure}</QuantityIngredient>
          <CheckboxLabels
            key={newId}
            id={newId}
            onClick={handleCheckboxClick}
            isChecked={isChecked}
          />
        </div>
      </ListItem>
    </>
  );
}
