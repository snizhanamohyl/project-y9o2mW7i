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
        } from './RecCard.styled.jsx';

// import sprite from '../../assets/sprite.svg';
import ButtonDelRicepe from '../../components/ButtonDelRecipe/ButtonDel.jsx';
import ButtonRecipeSee from '../../components/ButtonRecipeSee/ButtonRecipeSee.jsx';


const RecCard = ({ recipe, isFavorites, onClick }) => {

  return (
        <>
            {recipe.map(rec => (
                <ContainerCard key={rec._id.$oid}> 
                    <ImgCard src={rec.preview} alt={rec.title} />
                    <Container>
                        <ContainerContent>
                            <ContainerHeaderRecipe>
                                <TitleCard>{rec.title}</TitleCard>
                                    <ButtonDelRicepe isFavorites={isFavorites} onClick={onClick}/>
                                {/* <BtnDel isfavorites='true' onClick={handleRemoveFromFavorites}>
                                    <SvgDel width="14" height="14">
                                        <use href={`${sprite}#card-delete`}></use>
                                    </SvgDel>
                                </BtnDel> */}
                            </ContainerHeaderRecipe>
                            <TextCard>{rec.description}</TextCard>
                        </ContainerContent>              
                        <ContainerBtnRecipe>
                                <TimeCard>{rec.time} min</TimeCard>
                                <ButtonRecipeSee isFavorites={isFavorites} />
                                {/* <BtnRecipeSee to='/add'>See recipe</BtnRecipeSee> */}
                        </ContainerBtnRecipe>
                    </Container>
                </ContainerCard>
            ))}
        </>
    );
};

export default RecCard;