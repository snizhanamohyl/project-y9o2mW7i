import React from 'react';
import {
    ContainerCard,
    ImgCard,
    TitleCard,
    BtnDel,
    TextCard,
    ContainerContent,
    ContainerBtnRecipe,
    TimeCard,
    BtnRecipeSee,
    Container,
        } from './RecipeCard.styled.jsx';


const RecipeCard = ({ recipe }) => {


  const handleRemoveFromFavorites = () => {

  };

  return (
        <>
            {recipe.map(rec => (
                <ContainerCard key={rec._id.$oid}> 
                    <ImgCard src={rec.preview} alt={rec.title} />
                    <Container>
                        <ContainerContent>
                            <TitleCard>{rec.title}</TitleCard>
                            <BtnDel onClick={handleRemoveFromFavorites}>
                            
                            </BtnDel>
                            <TextCard>{rec.description}</TextCard>
                        </ContainerContent>              
                        <ContainerBtnRecipe>
                                <TimeCard>{rec.time} min</TimeCard>
                                <BtnRecipeSee to='/my'>See recipe</BtnRecipeSee>
                        </ContainerBtnRecipe>
                    </Container>
                </ContainerCard>
            ))}
        </>
    );
};

export default RecipeCard;