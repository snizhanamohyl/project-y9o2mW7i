import { useState, useEffect } from "react";
import RecipeTitle from "components/RecipeTitle/RecipeTitle";
import SeeAllBtn from "components/SeeAllBtn/SeeAllBtn";
import { RecipeItem } from "./PreviewRecipesList.styled";
import RecipesList from "../RecipesList/RecipesList";
import getAllRecipes from "../../services/getAllRecipes";
import processData from "../../services/processData";

export default function PreviewRecipesList() {
   const [data, setData] = useState([]);
   const width = window.innerWidth;
   const pageLimit = width < 768 ? 1 : (width >= 1440 ? 4 : 2)     


   useEffect(() => {
    
   getAllRecipes(pageLimit).then(resp => setData(resp));
          
   }, [pageLimit]);
   
   const recipes = processData(data?.recipes);
    
    console.log(recipes);
    return (
        <ul>
        {recipes.map(el => (
                <RecipeItem key={el.category}>
                <RecipeTitle name={el.category} />
                <RecipesList recipe={el.recipes} />
                <SeeAllBtn />
        </RecipeItem>
        ))}
        </ul>
      
    ) 
};