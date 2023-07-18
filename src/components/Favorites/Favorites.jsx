import React from 'react';
import MyRecipesList from '../MyRecipesList/MyRecipesList';
import Pagination from '../../components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import { FavoritePageTitle, Container, SectionPage } from './Favorites.styled';
import EmptyPage from '../EmptyPage/EmptyPage';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFavorites } from '../../redux/Favorite/selectors';
import { getAllFavoritList, deleteRecipeFromFavorites } from '../../redux/Favorite/operations'
import { nanoid } from 'nanoid';

const Favorites = () => {  
  const [currentPage, setCurrentPage] = useState(1);    
    const recipesPerPage = 4;

    const uniqueKey = nanoid();

  const [recipes, setProducts] = useState([])
  // const [currentRecipes, setCurrentRecipes] = useState([]);

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
    dispatch(getAllFavoritList());
    setProducts(favRecipes);
  }, [dispatch, recipes.length, favRecipes]);

  const onDeleteClick = (id) => {
    dispatch(deleteRecipeFromFavorites(id));
    setCurrentPage(Math.ceil((recipes.length - 1) / 4));
  };

  // useEffect(() => {
        // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    //масив рецептів для поточної сторінки
    const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);
    // setCurrentRecipes(currentRecipes);
  // }, [currentPage, recipes])

    return(
        <SectionPage>  
            <FavoritePageTitle>Favorite </FavoritePageTitle>
            {recipes.length > 0 ? (
                <>            
            <MyRecipesList uniqueKey={uniqueKey} isFavorites={true} recipe={currentRecipes } onDeleteClick={onDeleteClick}/>
                </>
            ):(
                <Container>
                    <EmptyPage description={"you haven't added any favorite recipes yet"}/>
                </Container>
            )}

            {recipes.length > 4 ? (
                <Pagination 
                    recipesPerPage={recipesPerPage} 
                    totalRecipe={favRecipes.length} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                /> 
            ):(null)}
        </SectionPage>
    )
}

export default Favorites;