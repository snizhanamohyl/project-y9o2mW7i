import RecipePageIngredientsItem from '../IngredientsItem/IngredientsItem';
import { IngredientsList } from './IngredientsList.styled';
export default function RecipePageIngredientsList({ ingredients }) {
  return (
    <IngredientsList>
      {ingredients?.map(ingredient => (
        <RecipePageIngredientsItem
          key={ingredient.id._id}
          ingredient={ingredient}
        />
      ))}
    </IngredientsList>
  );
}
