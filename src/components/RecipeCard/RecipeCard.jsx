import { NavLink } from 'react-router-dom';
import { ImgBox, RecipeImg, Recipe } from './RecipeCard.styled';

export default function RecipeCard({ recipe }) {
  // console.log("🚀 ~ file: RecipeCard.jsx:4 ~ RecipeCard ~ recipe:", recipe)
  const { preview, title, _id } = recipe;

  return (
    <li>
      <NavLink to={`/recipe/${_id}`}>
        <ImgBox>
          <RecipeImg src={preview} alt={title} />
          <Recipe>{title}</Recipe>
        </ImgBox>
      </NavLink>
    </li>
  );
}
