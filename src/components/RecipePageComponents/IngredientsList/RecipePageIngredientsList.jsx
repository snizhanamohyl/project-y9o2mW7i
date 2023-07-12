import RecipePageIngredientsItem from '../IngredientsItem/RecipePageIngredientsItem';
import {
  CheckBox,
  Ingredients,
  IngredientsList,
  IngredientsListHead,
  NameColumn,
  Quantity,
} from './RecipePageIngredientsList.styled';

export default function RecipePageIngredientsList() {
  return (
    <IngredientsListHead>
      <NameColumn>
        <Ingredients>Ingredients</Ingredients>
        <Quantity>Number</Quantity>
        <CheckBox>Add to list</CheckBox>
      </NameColumn>
      <IngredientsList>
        <RecipePageIngredientsItem />
      </IngredientsList>
    </IngredientsListHead>
  );
}
