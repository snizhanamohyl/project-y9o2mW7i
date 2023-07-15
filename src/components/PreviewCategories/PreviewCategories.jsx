import { PreviewCategoriesSection } from "./PreviewCategories.styled";
import CategoriesBtn from "../../components/CategoriesBtn/CategoriesBtn";
import  PreviewRecipesList  from "../PreviewRecipesList/PreviewRecipesList";


export default function PreviewCategories() {
 
   return (<PreviewCategoriesSection>
      <PreviewRecipesList/>
      <CategoriesBtn/>   
    </PreviewCategoriesSection>);
         
};






