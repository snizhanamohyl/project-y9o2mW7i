import React from 'react';
import {
    ContainerCard,
    ImgCard,
    TitleCard,
    // BtnDel,
    TextCard,
    ContainerContent,
    ContainerBtnRecipe,
    TimeCard,
    // BtnRecipeSee,
    Container,
    ContainerHeaderRecipe,
    // SvgDel,
        } from './MyRecipesItem.styled.jsx';

// import sprite from '../../assets/sprite.svg';
import ButtonDelRicepe from '../ButtonDelRecipe/ButtonDel.jsx';
import ButtonRecipeSee from '../ButtonRecipeSee/ButtonRecipeSee.jsx';


const MyRecipesItem = ({ recipe, isFavorites, onClick }) => {

  return (
        <>
        
            {recipe.map(({preview, title, _id:{$oid}, description, time}) => (
                <ContainerCard key={$oid}> 
                    <ImgCard src={preview} alt={title} />
                    <Container>
                        <ContainerContent>
                            <ContainerHeaderRecipe>
                                <TitleCard>{title}</TitleCard>
                                    <ButtonDelRicepe isFavorites={isFavorites} onClick={onClick}/>
                                {/* <BtnDel isfavorites='true' onClick={handleRemoveFromFavorites}>
                                    <SvgDel width="14" height="14">
                                        <use href={`${sprite}#card-delete`}></use>
                                    </SvgDel>
                                </BtnDel> */}
                            </ContainerHeaderRecipe>
                            <TextCard>{description}</TextCard>
                        </ContainerContent>              
                        <ContainerBtnRecipe>
                                <TimeCard>{time} min</TimeCard>
                                <ButtonRecipeSee isFavorites={isFavorites} />
                                {/* <BtnRecipeSee to='/add'>See recipe</BtnRecipeSee> */}
                        </ContainerBtnRecipe>
                    </Container>
                </ContainerCard>
            ))}
        </>
    );
};

export default MyRecipesItem;