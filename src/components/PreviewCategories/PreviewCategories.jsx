import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
   RecipeListMob,RecipeCardMob,
   RecipeTitleMob,ImgBoxMob,
   RecipeImgMob, RecipMob,
   SeeAllLinkMob,

   RecipeListTab, RecipeCardTab,
   ImgBoxTab, RecipTab, GroupNameTab,
   SeeAllLinkTab
} from "./PreviewCategories.styled";
import OtherBtnIcon from "../../iconsComponents/OtherBtnIcon/OtherBtnIcon";
import { getAllRecipes } from "../../utils/getAllRecipes";






export default function PreviewCategories() {
   const [recipes, setRecipes] = useState([]);
   
    useEffect(() => {
       getAllRecipes().then(resp => setRecipes(resp));
      
    }, []);
   
   const recipeMob = recipes.slice(0, 4);
   const breakfast = recipes.filter(el => el.title === "Breakfast").slice(0, 2);
   const miscellaneous = recipes.filter(el => el.title === "Miscellaneous").slice(0, 2);
   const chicken = recipes.filter(el => el.title === "Chicken").slice(0, 2);
   const desserts = recipes.filter(el => el.title === "Desserts").slice(0, 2);
   


   if (window.innerWidth < 767 || window.innerWidth < 375) {
      return (
         <>
            <RecipeListMob>
               {recipeMob.map(recip =>
                  <RecipeCardMob key={recip.id}>
                     <RecipeTitleMob>{recip.title}</RecipeTitleMob>
                     <ImgBoxMob>
                        <RecipeImgMob src="#" alt="img" />
                        <RecipMob>{recip.dish}</RecipMob>
                     </ImgBoxMob>
                     <Link to={`#`}>
                        <SeeAllLinkMob>See all</SeeAllLinkMob>
                     </Link>
                  </RecipeCardMob>)}
            </RecipeListMob>
            <OtherBtnIcon/>
         </>
      )
   }
   if (window.innerWidth < 1439) {
      return (<>
         <GroupNameTab>Breakfast</GroupNameTab>
         <RecipeListTab>
            {breakfast.map(recip => 
               <RecipeCardTab key={recip.id}>
                  <ImgBoxTab>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipTab>{recip.dish}</RecipTab>
                  </ImgBoxTab>
                </RecipeCardTab>
            )}
         </RecipeListTab>
         <Link to={`#`}>
         <SeeAllLinkTab>See all</SeeAllLinkTab>
         </Link>
           
         
         <GroupNameTab>Miscellaneous</GroupNameTab>
         <RecipeListTab>
            {miscellaneous.map(recip => 
               <RecipeCardTab key={recip.id}>
                  <ImgBoxTab>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipTab>{recip.dish}</RecipTab>
                  </ImgBoxTab>
                </RecipeCardTab>
            )}
         </RecipeListTab>
         <Link to={`#`}>
         <SeeAllLinkTab>See all</SeeAllLinkTab>
         </Link>

         <GroupNameTab>Chicken</GroupNameTab>
         <RecipeListTab>
            {chicken.map(recip => 
               <RecipeCardTab key={recip.id}>
                  <ImgBoxTab>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipTab>{recip.dish}</RecipTab>
                  </ImgBoxTab>
                </RecipeCardTab>
            )}
         </RecipeListTab>
         <Link to={`#`}>
         <SeeAllLinkTab>See all</SeeAllLinkTab>
         </Link>


         <GroupNameTab>Desserts</GroupNameTab>
         <RecipeListTab>
            {desserts.map(recip => 
               <RecipeCardTab key={recip.id}>
                  <ImgBoxTab>
                    <RecipeImgMob src="#" alt="img" />
                     <RecipTab>{recip.dish}</RecipTab>
                  </ImgBoxTab>
                </RecipeCardTab>
            )}
         </RecipeListTab>
         <Link to={`#`}>
         <SeeAllLinkTab>See all</SeeAllLinkTab>
         </Link>
      
      </>)  
   };

     if (window.innerWidth > 1440) {
      return(<p>Desctop</p>)  
   };
};
