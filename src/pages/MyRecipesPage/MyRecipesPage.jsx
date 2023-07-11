import React from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MyRecipesPage } from './MyRecipesPage.styled.jsx';

const MyRecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const recipesPerPage = 4;

    useEffect(() => {
        const fetchRecipes = async () => {
        try {
            const response = await axios.get('https://64a8b750dca581464b85f54e.mockapi.io/recipes');
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    fetchRecipes();
    }, []);


    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    //масив рецептів для поточної сторінки
    const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);


    return (

        <div>
            <MyRecipesPage>My recipes</MyRecipesPage>
            {recipes.length > 0 ? (
                <RecipeCard recipe={currentRecipes}/>
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
        </div>
      );
    };
    
    export default MyRecipesPage;