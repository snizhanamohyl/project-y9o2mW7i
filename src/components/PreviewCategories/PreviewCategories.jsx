import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
   OtherBtnIcon,
   RecipeListMob, RecipeCardMob,
   RecipeTitleMob, ImgBoxMob,
   RecipeImgMob, RecipMob,
   SeeAllLinkMob,
} from "./PreviewCategories.styledMob";
import {
   RecipeListTab, RecipeCardTab,
   ImgBoxTab, RecipTab,
   GroupNameTab, SeeAllLinkTab,
   SeeAllLinkTabLast
} from "./PreviewCategories.styledTab";

import {
   GroupNameDesk, RecipeListDesk,
   RecipeCardDesk, ImgBoxDesk,
   RecipDesk, SeeAllLinkDesk,
   SeeAllLinkDeskLast, OtherBtnIconDesk
} from "./PreviewCategories.styledDesk";
   
   


import { getAllRecipes } from "../../utils/getAllRecipes";






export default function PreviewCategories() {
   const [recipes, setRecipes] = useState([]);
   
    useEffect(() => {
       getAllRecipes().then(resp => setRecipes(resp));
      
    }, []);
   
   const recipeMob = recipes.slice(0, 4);
   const breakfastTab = recipes.filter(el => el.title === "Breakfast").slice(0, 2);
   const miscellaneousTab = recipes.filter(el => el.title === "Miscellaneous").slice(0, 2);
   const chickenTab = recipes.filter(el => el.title === "Chicken").slice(0, 2);
   const dessertsTab = recipes.filter(el => el.title === "Desserts").slice(0, 2);

   const breakfastDesk = recipes.filter(el => el.title === "Breakfast").slice(0, 4);
   const miscellaneousDesk = recipes.filter(el => el.title === "Miscellaneous").slice(0, 4);
   const chickenDesk = recipes.filter(el => el.title === "Chicken").slice(0, 4);
   const dessertsDesk = recipes.filter(el => el.title === "Desserts").slice(0, 4);
   


   if (window.innerWidth < 767 || window.innerWidth < 375) {
      return (
         <>
            <RecipeListMob>
               {recipeMob.map(recipe =>
                  <RecipeCardMob key={recipe.id}>
                     <RecipeTitleMob>{recipe.title}</RecipeTitleMob>
                     <ImgBoxMob>
                        <RecipeImgMob src="#" alt="img" />
                        <RecipMob>{recipe.dish}</RecipMob>
                     </ImgBoxMob>
                     <Link to={`#`}>
                        <SeeAllLinkMob>See all</SeeAllLinkMob>
                     </Link>
                  </RecipeCardMob>)}
            </RecipeListMob>
            <Link to={"#"}>
               <OtherBtnIcon>Other categories</OtherBtnIcon>
            </Link>
         </>
      )
   }
   if (window.innerWidth < 1439) {
      return (<>
         <GroupNameTab>Breakfast</GroupNameTab>
         <RecipeListTab>
            {breakfastTab.map(recipe => 
               <RecipeCardTab key={recipe.id}>
                  <ImgBoxTab>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipTab>{recipe.dish}</RecipTab>
                  </ImgBoxTab>
                </RecipeCardTab>
            )}
         </RecipeListTab>
         <Link to={`#`}>
         <SeeAllLinkTab>See all</SeeAllLinkTab>
         </Link>
           
         
         <GroupNameTab>Miscellaneous</GroupNameTab>
         <RecipeListTab>
            {miscellaneousTab.map(recipe => 
               <RecipeCardTab key={recipe.id}>
                  <ImgBoxTab>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipTab>{recipe.dish}</RecipTab>
                  </ImgBoxTab>
                </RecipeCardTab>
            )}
         </RecipeListTab>
         <Link to={`#`}>
         <SeeAllLinkTab>See all</SeeAllLinkTab>
         </Link>

         <GroupNameTab>Chicken</GroupNameTab>
         <RecipeListTab>
            {chickenTab.map(recipe => 
               <RecipeCardTab key={recipe.id}>
                  <ImgBoxTab>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipTab>{recipe.dish}</RecipTab>
                  </ImgBoxTab>
                </RecipeCardTab>
            )}
         </RecipeListTab>
         <Link to={`#`}>
         <SeeAllLinkTab>See all</SeeAllLinkTab>
         </Link>


         <GroupNameTab>Desserts</GroupNameTab>
         <RecipeListTab>
            {dessertsTab.map(recipe => 
               <RecipeCardTab key={recipe.id}>
                  <ImgBoxTab>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipTab>{recipe.dish}</RecipTab>
                  </ImgBoxTab>
                </RecipeCardTab>
            )}
         </RecipeListTab>
         <Link to={`#`}>
         <SeeAllLinkTabLast>See all</SeeAllLinkTabLast>
         </Link>

         <Link to={"#"}>
               <OtherBtnIcon>Other categories</OtherBtnIcon>
         </Link>
      </>)  
   };

     if (window.innerWidth > 1440) {
        return (<>
           <GroupNameDesk>Breakfast</GroupNameDesk>
           <RecipeListDesk>
              {breakfastDesk.map(recipe =>
               <RecipeCardDesk key={recipe.id}>
                 <ImgBoxDesk>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipDesk>{recipe.dish}</RecipDesk>
                  </ImgBoxDesk> 
              </RecipeCardDesk>
               )} 
           </RecipeListDesk>
            <Link to={`#`}>
            <SeeAllLinkDesk>See all</SeeAllLinkDesk>
           </Link>
           

           <GroupNameDesk>Miscellaneous</GroupNameDesk>
           <RecipeListDesk>
              {miscellaneousDesk.map(recipe =>
               <RecipeCardDesk key={recipe.id}>
                 <ImgBoxDesk>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipDesk>{recipe.dish}</RecipDesk>
                  </ImgBoxDesk> 
              </RecipeCardDesk>
               )} 
           </RecipeListDesk>
            <Link to={`#`}>
            <SeeAllLinkDesk>See all</SeeAllLinkDesk>
            </Link>
 
        
            <GroupNameDesk>Chicken</GroupNameDesk>
           <RecipeListDesk>
              {chickenDesk.map(recipe =>
               <RecipeCardDesk key={recipe.id}>
                 <ImgBoxDesk>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipDesk>{recipe.dish}</RecipDesk>
                  </ImgBoxDesk> 
              </RecipeCardDesk>
               )} 
           </RecipeListDesk>
            <Link to={`#`}>
            <SeeAllLinkDesk>See all</SeeAllLinkDesk>
           </Link>


            <GroupNameDesk>Desserts</GroupNameDesk>
           <RecipeListDesk>
              {dessertsDesk.map(recipe =>
               <RecipeCardDesk key={recipe.id}>
                 <ImgBoxDesk>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipDesk>{recipe.dish}</RecipDesk>
                  </ImgBoxDesk> 
              </RecipeCardDesk>
               )} 
           </RecipeListDesk>
            <Link to={`#`}>
            <SeeAllLinkDeskLast>See all</SeeAllLinkDeskLast>
           </Link>

           <Link to={"#"}>
               <OtherBtnIconDesk>Other categories</OtherBtnIconDesk>
          </Link>
        </>)  
   };
};
