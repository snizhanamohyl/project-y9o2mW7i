import AddRecipeForm from 'components/AddRecipeForm';
import FollowUs from 'components/FollowUs';
import PopularRecipe from 'components/PopularRecipe';

export default function AddRecipePage() {
  return (
    <>
      <h1>Add recipe</h1>
      <AddRecipeForm />
      <FollowUs />
      <PopularRecipe />
    </>
  );
}
