import RecipePageIngredientsItem from '../IngredientsItem/IngredientsItem';
import { IngredientsList } from './IngredientsList.styled';
export default function RecipePageIngredientsList({ ingredients, id }) {
  return (
    <IngredientsList>
      {ingredients?.map(ingredient => {
        return <RecipePageIngredientsItem
          key={ingredient?._id}
          ingredient={ingredient}
        // idRecipe={id}
        />
      })}
    </IngredientsList>
  );
}
