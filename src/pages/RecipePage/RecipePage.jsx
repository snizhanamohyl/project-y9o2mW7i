import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageComponents/Hero/RecipePageHero';
import RecipePageIngredientsList from 'components/RecipePageComponents/IngredientsList/RecipePageIngredientsList';
import RecipePageInstruction from 'components/RecipePageComponents/Instruction/RecipePageInstruction';
import SharedContainer from 'components/SharedContainer/SharedContainer';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);

  return (
    <>
      <RecipePageHero />
      <SharedContainer>
        <RecipePageIngredientsList />
        <RecipePageInstruction />
      </SharedContainer>
    </>
  );
}
