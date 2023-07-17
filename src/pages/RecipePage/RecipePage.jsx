import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageComponents/Hero/Hero';
import RecipePageInstruction from 'components/RecipePageComponents/Instruction/Instruction';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import RecipePageIngredients from 'components/RecipePageComponents/Ingredients/Ingredients';
import getRecipeById from 'services/getRecipeById';
import EmptyPage from '../../components/EmptyPage/EmptyPage';
import { Container } from './RecipePage.styled';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    getRecipeById(recipeId)
      .then(data => {
        data ? setRecipe(data) : setRecipe('');
      })
      .catch(err => console.log(err.message));
  }, [recipeId]);

  return (
    <>
      {recipe ? (
        <>
          <RecipePageHero recipe={recipe} id={recipe._id} />
          <SharedContainer>
            <RecipePageIngredients
              ingredients={recipe.ingredients}
              id={recipeId}
            />
            <RecipePageInstruction recipe={recipe} />
          </SharedContainer>
        </>
      ) : (
        <Container>
          <EmptyPage description={'Somthing get wrong, refresh your page'} />
        </Container>
      )}
    </>
  );
}
