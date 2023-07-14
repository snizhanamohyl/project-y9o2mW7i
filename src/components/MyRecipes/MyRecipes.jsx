import React from 'react';
import MyRecipesItem from '../../components/MyRecipesItem/MyRecipesItem';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import fetchMyRecipes from '../../services/fetchMyRecipes';
import { MyRecipesTitle } from './MyRecipes.styled.jsx';

const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const recipesPerPage = 4;

    useEffect(() => {
        fetchMyRecipes().then(data => setRecipes(data))  
    }, []);


    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    //масив рецептів для поточної сторінки
    const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);


    return (
        <>
            <MyRecipesTitle>My recipes</MyRecipesTitle>
            {recipes.length > 0 ? (
                <>
                    <MyRecipesItem isfavorites={false} recipe={currentRecipes}/>
                </>
            ):(
                <p>Улюблених рецептів немає</p>
            )}
    
            {/* Pagination */}
            <Pagination 
                recipesPerPage={recipesPerPage} 
                totalRecipe={recipes.length} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
      );
    };
    
    export default MyRecipes;