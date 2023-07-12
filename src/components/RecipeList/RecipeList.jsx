import RecipeTitle from "components/RecipeTitle/RecipeTitle";
import SeeAllBtn from "components/SeeAllBtn/SeeAllBtn";
import PreviewCards from "../PreviewCards/PreviewCards";
import { RecipeItem } from "./RecipeList.styled";

export default function ReceiptList({ title, breakfastArr,miscellaneousArr, chickenArr, dessertsArr}) {   
    console.log(breakfastArr);
    
   
    return (
        <> 
        <RecipeItem>
        <RecipeTitle name={title[0]}/>
        <PreviewCards elem={breakfastArr}/>            
        <SeeAllBtn/>        
        </RecipeItem>

            
        <RecipeItem>
        <RecipeTitle name={title[1]}/>
        <PreviewCards elem={miscellaneousArr}/>            
        <SeeAllBtn/>         
        </RecipeItem>


        <RecipeItem>
        <RecipeTitle name={title[2]}/>
        <PreviewCards elem={chickenArr}/>            
        <SeeAllBtn/>         
        </RecipeItem>

            
        <RecipeItem>
        <RecipeTitle name={title[3]}/>
        <PreviewCards elem={dessertsArr}/>            
        <SeeAllBtn/>         
        </RecipeItem>
         </>
      
    ) 
};