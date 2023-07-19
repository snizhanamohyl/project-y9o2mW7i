import { useParams } from 'react-router-dom';
import RecipePageIngredientsItem from '../IngredientsItem/IngredientsItem';
import { IngredientsList } from './IngredientsList.styled';
export default function RecipePageIngredientsList({ ingredients }) {
  const { recipeId } = useParams();

  return (
    <IngredientsList>
      {ingredients?.map(ingredient => {
        const { measure } = ingredient;
        const newId = ingredient.id._id + recipeId;
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
