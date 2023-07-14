import { useState, useEffect } from "react";
import { PreviewCategoriesSection } from "./PreviewCategories.styled";
import CategoriesBtn from "../../components/CategoriesBtn/CategoriesBtn";
import  PreviewRecipesList  from "../PreviewRecipesList/PreviewRecipesList";
import getAllRecipes from "../../services/getAllRecipes";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function PreviewCategories() {
   const [data, setData] = useState([]);
   const width = useWindowWidth();  
   let breakfastArr = [];
   let miscellaneousArr = [];
   let chickenArr = [];
   let dessertsArr = [];
   const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Desserts'];
 
  
   useEffect(() => {
      
      if (width >= 0 && width <= 767) { 
         getAllRecipes(1)
         .then(resp => setData(resp));   
      }

      if (width >= 768 && width <= 1439) {
           getAllRecipes(2)
         .then(resp => setData(resp)); 
      }

       if (width >= 1440) {
           getAllRecipes(4)
         .then(resp => setData(resp)); 
      }
   }, [width]);
   
  
        
   breakfastArr = data.recipes?.filter(el => {
         return el.title === "Breakfast";
      })
         
   miscellaneousArr = data.recipes?.filter(el => {
         return el.title === "Miscellaneous";
      })
           
   chickenArr = data.recipes?.filter(el => {
         return (el.title === "Chicken")
      })
           
   dessertsArr = data.recipes?.filter(el => {
         return (el.title === "Dessert")
      })
     


   return (<PreviewCategoriesSection>
      <ul>
        <PreviewRecipesList 
            breakfastArr={breakfastArr && breakfastArr[0]?.recipes}
            miscellaneousArr={miscellaneousArr && miscellaneousArr[0]?.recipes}
            chickenArr={chickenArr && chickenArr[0]?.recipes}
            dessertsArr={dessertsArr && dessertsArr[0]?.recipes}
            title={categories} />
      </ul>
      <CategoriesBtn/>   
    </PreviewCategoriesSection>);
         
}






