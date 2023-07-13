import RecipePageIngredientsList from '../IngredientsList/RecipePageIngredientsList';
import {
  CheckBox,
  Ingredients,
  IngredientsListHead,
  NameColumn,
  Quantity,
} from './RecipePageIngredients.styled';

export default function RecipePageIngredients() {
  return (
    <IngredientsListHead>
      <NameColumn>
        <Ingredients>Ingredients</Ingredients>
        <Quantity>Number</Quantity>
        <CheckBox>Add to list</CheckBox>
      </NameColumn>
      <RecipePageIngredientsList />
    </IngredientsListHead>
  );
}
