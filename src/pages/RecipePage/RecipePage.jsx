import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageComponents/Hero/Hero';
import RecipePageInstruction from 'components/RecipePageComponents/Instruction/Instruction';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import RecipePageIngredients from 'components/RecipePageComponents/Ingredients/Ingredients';
import getRecipeById from 'services/getRecipeById';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  // const recipeId = '6462a8f74c3d0ddd28897fbe';
  useEffect(() => {
    getRecipeById(recipeId)
      .then(data => {
        data ? setRecipe(data) : setRecipe('');
      })
      .catch(err => console.log(err.message));
  }, [recipeId]);
  console.log(recipe);
  return (
    <>
      <RecipePageHero recipe={recipe} />
      <SharedContainer>
        <RecipePageIngredients ingredients={recipe.ingredients} />
        <RecipePageInstruction recipe={recipe} />
      </SharedContainer>
    </>
  );
}
