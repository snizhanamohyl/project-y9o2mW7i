import React from 'react';
import {
    ContainerCard,
    ImgCard,
    TitleCard,
    TextCard,
    ContainerContent,
    ContainerBtnRecipe,
    TimeCard,
    Container,
    ContainerHeaderRecipe,
        } from './MyRecipesItem.styled.jsx';
import ButtonDelRicepe from '../ButtonDelRecipe/ButtonDel.jsx';
import ButtonRecipeSee from '../ButtonRecipeSee/ButtonRecipeSee.jsx';
import axios from 'axios';
import { useState } from 'react';


const MyRecipesItem = ({ recipe, isFavorites }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteRecipe = (id) => {
        setIsDeleting(true);

        axios.delete(`https://64a8b750dca581464b85f54e.mockapi.io/recipes/${id}`)
            .then(res => console.log('Видалено'))
            .catch(error => {
                console.error('Помилка:', error);
              })
              .finally(() => {
                setIsDeleting(false);
              });
    }

    return (
        <>
        
            {recipe.map(({preview, title, _id:{$oid}, description, time}) => (
                <ContainerCard key={$oid}> 
                    <ImgCard src={preview} alt={title} />
                    <Container>
                        <ContainerContent>
                            <ContainerHeaderRecipe>
                                <TitleCard>{title}</TitleCard>
                                    <ButtonDelRicepe isFavorites={isFavorites} onClick={() => deleteRecipe($oid)} disabled={isDeleting}/>
                            </ContainerHeaderRecipe>
                            <TextCard>{description}</TextCard>
                        </ContainerContent>              
                        <ContainerBtnRecipe>
                                <TimeCard>{time} min</TimeCard>
                                <ButtonRecipeSee isFavorites={isFavorites} path={`/recipe/${$oid}`}/>
                        </ContainerBtnRecipe>
                    </Container>
                </ContainerCard>
            ))}
        </>
    );
};

export default MyRecipesItem;