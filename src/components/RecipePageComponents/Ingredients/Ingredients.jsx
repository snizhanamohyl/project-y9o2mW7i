import RecipePageIngredientsList from '../IngredientsList/IngredientsList';
import {
  CheckBox,
  Ingredients,
  IngredientsListHead,
  NameColumn,
  Quantity,
} from './Ingredients.styled';

export default function RecipePageIngredients({ ingredients }) {
  return (
    <IngredientsListHead>
      <NameColumn>
        <Ingredients>Ingredients</Ingredients>
        <Quantity>Number</Quantity>
        <CheckBox>Add to list</CheckBox>
      </NameColumn>
      <RecipePageIngredientsList ingredients={ingredients} />
    </IngredientsListHead>
  );
}
