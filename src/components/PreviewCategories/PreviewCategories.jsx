import { useState, useEffect } from "react";
import { PreviewCategoriesSection } from "./PreviewCategories.styled";
import CategoriesBtn from "../../components/CategoriesBtn/CategoriesBtn";
import  RecipeList  from "../../components/RecipeList/RecipeList";
import getAllRecipes from "./getAllRecipes";
import useWindowWidth from "../../hooks/useWindowWidth";




export default function PreviewCategories() {
   const [recipes, setRecipes] = useState([]);
   const width = useWindowWidth();  
   let breakfastArr = [];
   let miscellaneousArr = [];
   let chickenArr = [];
   let dessertsArr = [];
   const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Desserts'];
   

   useEffect(() => {
      getAllRecipes().then(resp => setRecipes(resp));
   }, []);
  

   if (width >= 0 && width <= 767) {       
      breakfastArr = recipes.filter(el => {
         return (el.title === "Breakfast")
      }).slice(0, 1);
           
      miscellaneousArr = recipes.filter(el => {
         return (el.title === "Miscellaneous")
      }).slice(0, 1);
           
      chickenArr = recipes.filter(el => {
         return (el.title === "Chicken")
      }).slice(0, 1);
           
      dessertsArr = recipes.filter(el => {
         return (el.title === "Desserts")
      }).slice(0, 1);
   }
  
   

   if (width >= 768 && width <= 1439) {
      breakfastArr = recipes.filter(el => {
         return (el.title === "Breakfast")
      }).slice(0, 2);
           
      miscellaneousArr = recipes.filter(el => {
         return (el.title === "Miscellaneous")
      }).slice(0, 2);
         
      chickenArr = recipes.filter(el => {
         return (el.title === "Chicken")
      }).slice(0, 2);
           
      dessertsArr = recipes.filter(el => {
         return (el.title === "Desserts")
      }).slice(0, 2);
   }        
    
   

   if (width >= 1440) {   
      breakfastArr = recipes.filter(el => {
         return (el.title === "Breakfast")
      }).slice(0, 4);
           
      miscellaneousArr = recipes.filter(el => {
         return (el.title === "Miscellaneous")
      }).slice(0, 4);
           
      chickenArr = recipes.filter(el => {
         return (el.title === "Chicken")
      }).slice(0, 4);
           
      dessertsArr = recipes.filter(el => {
         return (el.title === "Desserts")
      }).slice(0, 4);
   }
   
  

      return (<PreviewCategoriesSection>
         <ul>
            <RecipeList
               breakfastArr={breakfastArr}
               miscellaneousArr={miscellaneousArr}
               chickenArr={chickenArr}
               dessertsArr={dessertsArr}
               title={categories} />
         </ul>
         <CategoriesBtn />
      </PreviewCategoriesSection>); 
};






