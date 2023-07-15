import {
  ImageIngredient,
  IngredientName,
  ListItem,
  QuantityIngredient,
} from './IngredientsItem.styled';

import CheckboxLabels from '../Checkbox/Checkbox';
import { addIngredient, deleteIngredient } from 'redux/ShopingList/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function RecipePageIngredientsItem({ ingredient }) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const { id, measure } = ingredient;
  // const newId = id._id.split('').reverse().join('');

  // const newStructure = { ...ingredient.id, ...ingredient.measure };

  const handleCheckboxClick = ({ _id }, measure) => {
    setIsChecked(prev => !prev);

    if (isChecked) {
      dispatch(deleteIngredient(_id));
    } else {
      dispatch(addIngredient(id, measure));
    }
  };

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
            key={id._id}
            id={id._id}
            onClick={handleCheckboxClick}
            isChecked={isChecked}
          />
        </div>
      </ListItem>
    </>
  );
}
