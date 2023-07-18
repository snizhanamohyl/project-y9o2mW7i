import React from 'react';
import MyRecipesList from '../MyRecipesList/MyRecipesList';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import fetchMyRecipes from '../../services/fetchMyRecipes';
import { MyRecipesTitle, Container } from './MyRecipes.styled';
import EmptyPage from '../EmptyPage/EmptyPage';
import { nanoid } from 'nanoid';

const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const recipesPerPage = 4;

    useEffect(() => {
        fetchMyRecipes().then(data => setRecipes(data))
    }, []);

    const uniqueKey = nanoid();

    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    //масив рецептів для поточної сторінки
    const currentRecipes = recipes?.slice(firstRecipeIndex, lastRecipeIndex);


    return (
        <>
            <MyRecipesTitle>My recipes</MyRecipesTitle>
            {recipes.length > 0 ? (
                <>
                    <MyRecipesList uniqueKey={uniqueKey} isFavorites={false} recipe={currentRecipes}/>
                </>
            ):(
                <Container>
                    <EmptyPage description={"you haven't added your recipes yet"}/>
                </Container>
            )}
    
            {recipes.length > 0 ? (
                <Pagination 
                    recipesPerPage={recipesPerPage} 
                    totalRecipe={recipes.length} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                /> 
            ):(null)}
        </>
      );
    };
    
    export default MyRecipes;