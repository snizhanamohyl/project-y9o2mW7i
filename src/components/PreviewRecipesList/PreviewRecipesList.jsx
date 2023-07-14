import { useState, useEffect } from "react";
import RecipeTitle from "components/RecipeTitle/RecipeTitle";
import SeeAllBtn from "components/SeeAllBtn/SeeAllBtn";
import { RecipeItem } from "./PreviewRecipesList.styled";
import RecipesList from "../RecipesList/RecipesList";
import getAllRecipes from "../../services/getAllRecipes";
import useWindowWidth from "../../hooks/useWindowWidth";
import processData from "../../services/processData";

export default function PreviewRecipesList() {
   const [data, setData] = useState([]);
   const width = useWindowWidth();

   useEffect(() => {
    

    if (width > 0 && width <= 767) {
        
           getAllRecipes(1).then(resp => setData(resp));
           
    } else if (width >= 768 && width <= 1439) {
           
           getAllRecipes(2).then(resp => setData(resp));
           
    } else if (width >= 1440) {
           getAllRecipes(4).then(resp => setData(resp));
        
    };

     
   }, [width]);
   
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