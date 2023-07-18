import React from 'react';
import MyRecipesList from '../MyRecipesList/MyRecipesList';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { fetchMyRecipes, fetchDeleteMyRecipes} from '../../services/fetchMyRecipes';
import { MyRecipesTitle, Container, SectionPage } from './MyRecipes.styled';
import EmptyPage from '../EmptyPage/EmptyPage';
import { nanoid } from 'nanoid';

const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    console.log(recipes)

    const [currentPage, setCurrentPage] = useState(1);

    const recipesPerPage = 4;

    useEffect(() => {
        fetchMyRecipes().then(data => setRecipes(data)).catch((error) => console.log(error))
    }, []);

    const uniqueKey = nanoid();

    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;

    let currentRecipes
    
    if (Array.isArray(recipes)) {
        currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);
    }else{
        setRecipes([])
    }

    const onDeleteClick = (id) => {
        fetchDeleteMyRecipes(id).then(data => data._id).catch((error) => console.log(error))
    };


    return (
        <SectionPage>
            <MyRecipesTitle>My recipes</MyRecipesTitle>
            {recipes.length > 0 ? (
                <>
                    <MyRecipesList uniqueKey={uniqueKey} isFavorites={false} recipe={currentRecipes} onDeleteClick={onDeleteClick}/>
                </>
            ):(
                <Container>
                    <EmptyPage description={"you haven't added your recipes yet"}/>
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
      );
    };
    
    export default MyRecipes;