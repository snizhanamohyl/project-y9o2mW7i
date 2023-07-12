import MainTitle from 'components/MainTitle/MainTitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import FollowUs from 'components/FollowUs/FollowUs';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import { Wrapper, Grid } from './AddRecipePage.styled.js';
import SharedContainer from 'components/SharedContainer/SharedContainer.jsx';

export default function AddRecipePage() {
  return (
    <SharedContainer>
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
    </SharedContainer>
  );
}
