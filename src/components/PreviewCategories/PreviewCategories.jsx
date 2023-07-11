import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { OtherBtnIcon , PreviewCategoriesSection} from "./PreviewCategories.styled";
import getAllRecipes from "./getAllRecipes";
import PreviewCards from "../PreviewCards/PreviewCard";





export default function PreviewCategories() {
   const [recipes, setRecipes] = useState([]);
   let filteredArr = []; 
   const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Desserts'];
   
    useEffect(() => {
       getAllRecipes().then(resp => setRecipes(resp));
      
    }, []);
  
     function updateWindowWidth() {
        const width = window.innerWidth;
       
        if (width >= 0 && width <= 767) {
           filteredArr = recipes.filter(el => {     
         return (el.title === "Breakfast" || el.title === "Miscellaneous" || el.title === "Chicken" || el.title === "Desserts");
         }).slice(0, 4);
 
        } else if (width >= 768 && width <= 1439) {
           
         let arr = [];
         arr = recipes.filter(el => {
              return (el.title === "Breakfast" || el.title === "Miscellaneous" || el.title === "Chicken" || el.title === "Desserts");
         }).slice(0, 8)
            
            
         categories.forEach(category => {
         const categoryItems = arr.filter(el => el.title === category);
          filteredArr.push(...categoryItems);
         });
        
           
           
        } else if (width >= 1440) {
           
         let arr = [];
         arr = recipes.filter(el => {     
         return (el.title === "Breakfast" || el.title === "Miscellaneous" || el.title === "Chicken" || el.title === "Desserts");
         }).slice(0, 16);
               
         categories.forEach(category => {
         const categoryItems = arr.filter(el => el.title === category);
          filteredArr.push(...categoryItems);
         });
         }
   }
   
   updateWindowWidth();
   window.addEventListener('resize', updateWindowWidth);

    

   return (<PreviewCategoriesSection>
      <PreviewCards elem={filteredArr} />
      <Link to={"#"}>
         <OtherBtnIcon>Other categories</OtherBtnIcon>
      </Link>   
    </PreviewCategoriesSection>);
         
};
