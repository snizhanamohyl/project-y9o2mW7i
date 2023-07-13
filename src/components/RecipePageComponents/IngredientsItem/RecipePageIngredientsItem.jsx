import sprite from '../../../assets/sprite.svg';
import {
  CheckBoxInput,
  ImageIngredient,
  IngredientName,
  Label,
  ListItem,
  QuantityIngredient,
} from './RecipePageIngredientsItem.styled';

import img from '../../../assets/images/ingr.png';
import { useState } from 'react';
import CheckboxLabels from './Checkbox';

export default function RecipePageIngredientsItem() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <ListItem>
        <div>
          <ImageIngredient alt="photo ingredients" src={img} />
          <IngredientName>Salmon</IngredientName>
        </div>
        <div>
          <QuantityIngredient>400 g</QuantityIngredient>
          <CheckboxLabels />
        </div>
      </ListItem>
      <ListItem>
        <div>
          <ImageIngredient alt="photo ingredients" src={img} />
          <IngredientName>Avocado</IngredientName>
        </div>
        <div>
          <QuantityIngredient>400 g</QuantityIngredient>
          <CheckboxLabels />
        </div>
      </ListItem>
    </>
  );
}
