import React from 'react';
import MyRecipesItem from '../../components/MyRecipesItem/MyRecipesItem';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { FavoritePageTitle } from './Favorites.styled.jsx';
import fetchFavorites from '../../services/fetchFavorites';

const Favorites = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const recipesPerPage = 4;


    useEffect(() => {
        fetchFavorites().then(data => setRecipes(data))  
    }, []);


    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    //масив рецептів для поточної сторінки
    const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);

    return(
        <>
            <FavoritePageTitle>Favorite </FavoritePageTitle>
            {recipes.length > 0 ? (
                <>            
                    <MyRecipesItem isFavorites={true} recipe={currentRecipes}/>
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
    )
}

export default Favorites;