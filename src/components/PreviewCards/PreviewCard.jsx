import SeeAllBtn from "components/SeeAllBtn/SeeAllBtn";
import ReceiptTitle from "components/RecipeTitle/RecipeTitle";
import RecipeCard from "components/RecipeCard/RecipeCard";
import {
    RecipeList,
    RecipeElem
} from "./PreviewCard.styled";


export default function PreviewCards({elem}) {
    
    return (
     <RecipeList>
        {elem.map((el, index) => <RecipeElem key={el.id}>
        {elem.length === 4 &&  <ReceiptTitle name={el.title} />} 
        {elem.length === 8 && index % 2 === 0 && <ReceiptTitle name={el.title} />}
        {elem.length === 16 && (index === 0 || index === 4 || index === 8 || index === 12) && <ReceiptTitle name={el.title} />} 
          <RecipeCard img={el.img} dish={el.dish}/>    
        {elem.length === 4 && <SeeAllBtn/>}       
        {elem.length === 8 && index % 2 !== 0 && <SeeAllBtn />}
        {elem.length === 16 && (index === 3 || index === 7 || index === 11 || index === 15) && <SeeAllBtn />}      
        </RecipeElem>)}
        </RecipeList>

    )
};
