import MainTitle from 'components/MainTitle/MainTitle';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import FollowUs from 'components/FollowUs/FollowUs';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import { Wrapper, Grid } from './AddRecipePage.styled.js';
import SharedContainer from 'components/SharedContainer/SharedContainer.jsx';
import useWindowWidth from 'hooks/useWindowWidth.js';

export default function AddRecipePage() {
  const width = useWindowWidth();

  return (
    <SharedContainer isBg>
      <Wrapper>
        <MainTitle>Add recipe</MainTitle>
        <Grid>
          <AddRecipeForm />
          <div>
            {width >= 1440 && <FollowUs />}
            <PopularRecipe />
          </div>
        </Grid>
      </Wrapper>
    </SharedContainer>
  );
}
