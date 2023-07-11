import RecipeCard from "components/RecipeCard/RecipeCard";
import {
    PreviewCardsList,
    PreviewCardsItem
} from "./PreviewCards.styled";


export default function PreviewCards({elem}) {
    
    return (
        <PreviewCardsList>
        {elem.map(el =>
        <PreviewCardsItem key={el.id}>
        <RecipeCard dish={el.dish} img={el.img} />    
        </PreviewCardsItem>
        )}
        </PreviewCardsList>
    )
};


