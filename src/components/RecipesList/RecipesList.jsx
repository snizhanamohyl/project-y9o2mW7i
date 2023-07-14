import RecipeCard from 'components/RecipeCard/RecipeCard';
import { CardsList } from './RecipesList.styled';

export default function RecipesList({ recipe }) {
  return (
    <CardsList>
      {recipe?.map(recipe => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </CardsList>
  );
}
