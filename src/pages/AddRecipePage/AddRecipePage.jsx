import MainTitle from 'components/MainTitle';
import AddRecipeForm from 'components/AddRecipeForm';
import FollowUs from 'components/FollowUs';
import PopularRecipe from 'components/PopularRecipe';
import { Wrapper, Grid } from './AddRecipePage.styled.js';

export default function AddRecipePage() {
  return (
    <Wrapper>
      <MainTitle>Add recipe</MainTitle>
      <Grid>
        <AddRecipeForm />
        <div>
          <FollowUs />
          <PopularRecipe />
        </div>
      </Grid>
    </Wrapper>
  );
}
