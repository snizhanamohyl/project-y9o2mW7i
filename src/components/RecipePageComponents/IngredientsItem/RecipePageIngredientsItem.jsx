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

export default function RecipePageIngredientsItem() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <ListItem>
        <ImageIngredient alt="photo ingredients" src={img} />
        <IngredientName>Avocado</IngredientName>
        <QuantityIngredient>400 g</QuantityIngredient>
        <CheckBoxInput type="checkbox" id="checkbox" />
        <Label for="checkbox"></Label>
      </ListItem>
      <ListItem>
        <ImageIngredient alt="photo ingredients" src={img} />
        <IngredientName>Avocado</IngredientName>
        <QuantityIngredient>400 g</QuantityIngredient>

        <Label for="checkbox2">
          <CheckBoxInput
            type="checkbox"
            id="checkbox2"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div>
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-checkbox2`}></use>
            </svg>
          </div>
        </Label>
      </ListItem>
    </>
  );
}
