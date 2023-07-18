import React from 'react';
import MyRecipesList from '../MyRecipesList/MyRecipesList';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { fetchMyRecipes, fetchDeleteMyRecipes} from '../../services/fetchMyRecipes';
import { MyRecipesTitle, Container, SectionPage } from './MyRecipes.styled';
import EmptyPage from '../EmptyPage/EmptyPage';
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

    console.log(recipes)

    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;

    const onDeleteClick = (id) => {
            fetchDeleteMyRecipes(id)
            setRecipes(recipes.filter(recipe=>recipe._id !== id))
    };


    let currentRecipes
    
    if (Array.isArray(recipes)) {
        currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);
    }

    return (
        <SectionPage>
            <MyRecipesTitle>My recipes</MyRecipesTitle>
            {recipes?.length > 0 ? (
                <>
                    <MyRecipesList uniqueKey={uniqueKey} isFavorites={false} recipe={currentRecipes} onDeleteClick={onDeleteClick}/>
                </>
            ):(
                <Container>
                    <EmptyPage description={"you haven't added your recipes yet"}/>
                </Container>
            )}
    
            {recipes?.length > 4 ? (
                <Pagination 
                    recipesPerPage={recipesPerPage} 
                    totalRecipe={recipes?.length} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                /> 
            ):(null)}
        </SectionPage>
      );
    };
    
    export default MyRecipes;