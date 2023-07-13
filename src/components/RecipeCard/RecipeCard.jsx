import { ImgBox, RecipeImg, Recipe} from "./RecipeCard.styled";

export default function RecipeCard({ recipe: { preview, title }}) {
    return (
        <ImgBox>
            <RecipeImg src={preview} alt={title}/>
            <Recipe>{title}</Recipe>
        </ImgBox>
    )  
};
