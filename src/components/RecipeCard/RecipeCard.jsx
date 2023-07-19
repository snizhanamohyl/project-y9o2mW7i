
import { ImgBox, RecipeImg, Recipe, Link } from './RecipeCard.styled';

export default function RecipeCard({ recipe }) {
  const { preview, title, _id } = recipe;

  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"}) 
  }

  return (
    <li>
      <Link to={`/recipe/${_id}` || `*`} onClick={onClick}>
        <ImgBox>
          <RecipeImg src={preview} alt={title || "Recipe not found"} />
          <Recipe>{title || "Recipe not found"}</Recipe>
        </ImgBox>
      </Link>
    </li>
  );
}
