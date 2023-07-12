import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageComponents/Hero/RecipePageHero';
import RecipePageIngredientsList from 'components/RecipePageComponents/IngredientsList/RecipePageIngredientsList';
import RecipePageInstruction from 'components/RecipePageComponents/Instruction/RecipePageInstruction';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  return (
    <>
      <RecipePageHero />
      <RecipePageIngredientsList />
      <RecipePageInstruction />
    </>
  );
}
