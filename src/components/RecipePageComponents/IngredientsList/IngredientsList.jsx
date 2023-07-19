import RecipePageIngredientsItem from '../IngredientsItem/IngredientsItem';
import { IngredientsList } from './IngredientsList.styled';
import { nanoid } from 'nanoid';
export default function RecipePageIngredientsList({ ingredients }) {

  return (
    <IngredientsList>
      {ingredients?.map(ingredient => {
        const { measure } = ingredient;
        const newId = nanoid(24);
        const newStructure = {
          ...ingredient.id,
          measure,
          newId: newId,
        };
        return (
          <RecipePageIngredientsItem key={newId} ingredient={newStructure} />
        );
      })}
    </IngredientsList>
  );
}
