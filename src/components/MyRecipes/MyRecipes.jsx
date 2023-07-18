import React from 'react';
import MyRecipesList from '../MyRecipesList/MyRecipesList';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import fetchMyRecipes from '../../services/fetchMyRecipes';
import { MyRecipesTitle } from './MyRecipes.styled';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 4;

  useEffect(() => {
    fetchMyRecipes().then(data => {
      if (data) {
        setRecipes(data);
      } else {
        setRecipes('');
        navigate('/notFound');
      }
    });
  }, [navigate]);

  const uniqueKey = nanoid();

  // індекс останнього рецепту на поточній сторінці
  //   const lastRecipeIndex = currentPage * recipesPerPage;
  //   //індекс першого рецепту на поточній сторінці
  //   const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
  //   //масив рецептів для поточної сторінки
  //   const currentRecipes = recipes?.slice(firstRecipeIndex, lastRecipeIndex);
  console.log(recipes);
  return (
    <>
      <MyRecipesTitle>My recipes</MyRecipesTitle>
      <MyRecipesList
        uniqueKey={uniqueKey}
        isFavorites={false}
        recipe={recipes}
      />
      {recipes.length > 0 ? (
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipe={recipes.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </>
  );
};

export default MyRecipes;
