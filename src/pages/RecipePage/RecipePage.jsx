import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageComponents/Hero/Hero';
import RecipePageInstruction from 'components/RecipePageComponents/Instruction/Instruction';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import RecipePageIngredients from 'components/RecipePageComponents/Ingredients/Ingredients';
import getRecipeById from 'services/getRecipeById';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    getRecipeById(recipeId)
      .then(data => {
        if (data) {
          setRecipe(data);
        } else {
          setRecipe('');
          navigate('/notFound');
        }
      })
      .catch(err => console.log(err.message));
  }, [recipeId, navigate]);

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
