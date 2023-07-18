import { useParams } from 'react-router';
import RecipePageIngredientsItem from '../IngredientsItem/IngredientsItem';
import { IngredientsList } from './IngredientsList.styled';
export default function RecipePageIngredientsList({ ingredients }) {
  const { recipeId } = useParams();

  return (
    <IngredientsList>
      {ingredients?.map(ingredient => {
        const { id, measure } = ingredient;
        const newId = (id._id + recipeId).slice(12, 36);

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
