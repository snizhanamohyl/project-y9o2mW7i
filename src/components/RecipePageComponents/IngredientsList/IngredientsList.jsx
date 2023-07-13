import RecipePageIngredientsItem from '../IngredientsItem/IngredientsItem';
import { IngredientsList } from './IngredientsList.styled';
export default function RecipePageIngredientsList({ ingredients }) {
  return (
    <IngredientsList>
      {ingredients?.map(ingredient => (
        <RecipePageIngredientsItem
          key={ingredients.id}
          ingredient={ingredient}
        />
      ))}
    </IngredientsList>
  );
}
