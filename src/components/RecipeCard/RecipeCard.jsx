
import { ImgBox, RecipeImg, Recipe, Link } from './RecipeCard.styled';

export default function RecipeCard({ recipe }) {
  const { preview, title, _id } = recipe;

  return (
    <li>
      <Link to={`/recipe/${_id}` || `*`}>
        <ImgBox>
          <RecipeImg src={preview} alt={title || "Recipe not found"} />
          <Recipe>{title || "Recipe not found"}</Recipe>
        </ImgBox>
      </Link>
    </li>
  );
}
