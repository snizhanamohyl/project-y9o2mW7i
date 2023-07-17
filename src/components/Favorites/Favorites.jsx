import React from 'react';
import MyRecipesList from '../MyRecipesList/MyRecipesList';
import Pagination from '../../components/Pagination/Pagination';
import { useState } from 'react';
import { FavoritePageTitle, Container } from './Favorites.styled.jsx';
import EmptyPage from '../EmptyPage/EmptyPage';
import { useSelector } from 'react-redux';
import { getAllFavorites } from '../../redux/Favorite/selectors';


const Favorites = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const recipesAll = useSelector(getAllFavorites)

    console.log(recipesAll)
    
    const recipesPerPage = 4;


    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    //масив рецептів для поточної сторінки
    const currentRecipes = recipesAll.slice(firstRecipeIndex, lastRecipeIndex);

    return(
        <>  
            <FavoritePageTitle>Favorite </FavoritePageTitle>
            {recipesAll.length > 0 ? (
                <>            
                    <MyRecipesList key={recipesAll._id} isFavorites={true} recipe={currentRecipes}/>
                </>
            ):(
                <Container>
                    <EmptyPage description={"you haven't added any favorite recipes yet"}/>
                </Container>
            )}

            {recipesAll.length > 0 ? (
                <Pagination 
                    recipesPerPage={recipesPerPage} 
                    totalRecipe={recipesAll.length} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                /> 
            ):(null)}
        </>
    )
}

export default Favorites;