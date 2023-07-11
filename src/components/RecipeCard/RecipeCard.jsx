import { ImgBox, RecipeImg, Recip} from "./RecipeCard.styled";


export default function RecipeCard({img, dish}) {
    
    return (
        <ImgBox>
        <RecipeImg src={img} alt={"img"}/>
        <Recip>{dish}</Recip>
        </ImgBox>
    )  
};