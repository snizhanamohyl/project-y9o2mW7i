import React from 'react';
import MyRecipesList from '../MyRecipesList/MyRecipesList';
import Pagination from '../../components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import { FavoritePageTitle, Container, SectionPage } from './Favorites.styled.jsx';
import EmptyPage from '../EmptyPage/EmptyPage';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFavorites } from '../../redux/Favorite/selectors';
import { getAllFavoritList, deleteRecipeFromFavorites } from '../../redux/Favorite/operations'
import { nanoid } from 'nanoid';

const Favorites = () => {
    // const [recipes, setRecipes] = useState([]);
    // const recipes = [];

    const [currentPage, setCurrentPage] = useState(1);
    const recipesAll = useSelector(getAllFavorites)
    
    const recipesPerPage = 4;

    const uniqueKey = nanoid();

    // const [isLoading, setIsLoading] = useState(false)

  const [recipes, setProducts] = useState([])

  const dispatch = useDispatch();

  const favRecipes = useSelector(getAllFavorites);

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(getAllFavoritList());
      setProducts(favRecipes);
    }
    if (recipes.length === favRecipes.length) {
      return;
    }
    // setIsLoading(true);
    dispatch(getAllFavoritList());
    setProducts(favRecipes);
    // setIsLoading(false);
  }, [dispatch, favRecipes, recipes]);

  const onDeleteClick = (id) => {
    dispatch(deleteRecipeFromFavorites(id));
  };


    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    //масив рецептів для поточної сторінки
    const currentRecipes = recipesAll.slice(firstRecipeIndex, lastRecipeIndex);

    return(
        <SectionPage>  
            <FavoritePageTitle>Favorite </FavoritePageTitle>
            {recipes.length > 0 ? (
                <>            
                    <MyRecipesList uniqueKey={uniqueKey} isFavorites={true} recipe={currentRecipes} onDeleteClick={onDeleteClick}/>
                </>
            ):(
                <Container>
                    <EmptyPage description={"you haven't added any favorite recipes yet"}/>
                </Container>
            )}

            {recipes.length > 4 ? (
                <Pagination 
                    recipesPerPage={recipesPerPage} 
                    totalRecipe={recipes.length} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                /> 
            ):(null)}
        </SectionPage>
    )
}

export default Favorites;