import RecipeTitle from "components/RecipeTitle/RecipeTitle";
import SeeAllBtn from "components/SeeAllBtn/SeeAllBtn";
import { RecipeItem } from "./PreviewRecipesList.styled";
import RecipesList from "../RecipesList/RecipesList";

export default function PreviewRecipesList({ title, breakfastArr,miscellaneousArr, chickenArr, dessertsArr}) {  
    return (
        <> 
        <RecipeItem>
        <RecipeTitle name={title[0]}/>
        <RecipesList recipes={breakfastArr}/>            
        <SeeAllBtn/>        
        </RecipeItem>

            
        <RecipeItem>
        <RecipeTitle name={title[1]}/>
        <RecipesList recipes={miscellaneousArr}/>            
        <SeeAllBtn/>         
        </RecipeItem>


        <RecipeItem>
        <RecipeTitle name={title[2]}/>
        <RecipesList recipes={chickenArr}/>            
        <SeeAllBtn/>         
        </RecipeItem>

            
        <RecipeItem>
        <RecipeTitle name={title[3]}/>
        <RecipesList recipes={dessertsArr}/>            
        <SeeAllBtn/>         
        </RecipeItem>
         </>
      
    ) 
};