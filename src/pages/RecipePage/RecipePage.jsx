import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageComponents/Hero/RecipePageHero';
import RecipePageIngredientsList from 'components/RecipePageComponents/IngredientsList/RecipePageIngredientsList';
import RecipePageInstruction from 'components/RecipePageComponents/Instruction/RecipePageInstruction';
import SharedContainer from 'components/SharedContainer/SharedContainer';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWY3OWMyMjYzNThlZjQxOGNkNjFiMyIsImlhdCI6MTY4OTIyMTU3MCwiZXhwIjoxNjg5MzAwNzcwfQ.Ivc09dx8jurySQ3rE78wDnTdboHTC0s9_yt8-0d4Xm0';

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
