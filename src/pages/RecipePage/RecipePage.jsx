import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageComponents/Hero/RecipePageHero';
import RecipePageInstruction from 'components/RecipePageComponents/Instruction/RecipePageInstruction';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import RecipePageIngredients from 'components/RecipePageComponents/Ingredients/RecipePageIngredients';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);

  return (
    <>
      <RecipePageHero />
      <SharedContainer>
        <RecipePageIngredients />
        <RecipePageInstruction />
      </SharedContainer>
    </>
  );
}
