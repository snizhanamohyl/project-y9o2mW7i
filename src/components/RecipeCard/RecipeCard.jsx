import { ImgBox, RecipeImg, Recipe, RecipeLink, RecipeItem} from "./RecipeCard.styled";

export default function RecipeCard({ recipe }) {
    // console.log("🚀 ~ file: RecipeCard.jsx:4 ~ RecipeCard ~ recipe:", recipe)
    const { preview, title, _id } = recipe;

    return (
        <RecipeItem>
            <RecipeLink to={`/recipe/${_id}`}>
                <ImgBox>
                    <RecipeImg src={preview} alt={title}/>
                    <Recipe>{title}</Recipe>
                </ImgBox>
            </RecipeLink>
        </RecipeItem>
    )  
};
