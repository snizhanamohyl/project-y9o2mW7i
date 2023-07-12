import { ImgBox, RecipeImg, Recipe} from "./RecipeCard.styled";


export default function RecipeCard({img, dish}) {
 
    return (
        <ImgBox>
        <RecipeImg src={img} alt={"img"}/>
        <Recipe>{dish}</Recipe>
        </ImgBox>
    )  
};