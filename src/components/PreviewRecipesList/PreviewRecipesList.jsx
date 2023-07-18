import { useState, useEffect } from 'react';
import SearchFailed from "components/EmptyPage/EmptyPage";
import CategoriesBtn from "../../components/CategoriesBtn/CategoriesBtn";
import PageLoader from 'components/PageLoader/PageLoader';
import RecipeTitle from 'components/RecipeTitle/RecipeTitle';
import SeeAllBtn from 'components/SeeAllBtn/SeeAllBtn';
import { RecipeItem } from './PreviewRecipesList.styled';
import RecipesList from '../RecipesList/RecipesList';
import getAllRecipes from '../../services/getAllRecipes';
import processData from '../../services/processData';


export default function PreviewRecipesList() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const width = window.innerWidth;
  const pageLimit = width < 768 ? 1 : width >= 1440 ? 4 : 2;
 
  useEffect(() => {
    setStatus("loading");

    getAllRecipes(pageLimit).then(resp => {
      setStatus("idle");
      setData(resp);
    });
   

  }, [pageLimit]);

  const recipes = processData(data?.data?.recipes);
   
  if (data?.response?.status === 400) {
    return (<SearchFailed  description={"Try searching for recipes later"}/>)

  };
  

  if (status === "loading") {
    return (<PageLoader />);
  };

  if (status === "idle" && data.status === 200) {
    return (
      <>      
      <ul>
        {recipes.map(el => (
          <RecipeItem key={el.category}>
            <RecipeTitle name={el.category} />
            <RecipesList recipes={el.recipes} />
            <SeeAllBtn category={el.category.toLowerCase()} />
          </RecipeItem>
        ))}
        </ul>
      <CategoriesBtn/> 
      </>  
    );
  }
}
