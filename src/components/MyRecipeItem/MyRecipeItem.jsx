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
        } from '../MyRecipeItem/MyRecipesItem.styled.jsx';
import ButtonDelRicepe from '../ButtonDelRecipe/ButtonDel.jsx';
import ButtonRecipeSee from '../ButtonRecipeSee/ButtonRecipeSee.jsx';


const MyRecipeItem = ({ recipe, isFavorites }) => {
    const { preview, title, _id: { $oid }, description, time } = recipe;

    return(
                <ContainerCard key={$oid}> 
                    <ImgCard src={preview} alt={title} />
                    <Container>
                        <ContainerContent>
                            <ContainerHeaderRecipe>
                                <TitleCard>{title}</TitleCard>
                                    <ButtonDelRicepe isFavorites={isFavorites}/>
                            </ContainerHeaderRecipe>
                            <TextCard>{description}</TextCard>
                        </ContainerContent>              
                        <ContainerBtnRecipe>
                                <TimeCard>{time} min</TimeCard>
                    <ButtonRecipeSee isFavorites={isFavorites} path={`/recipe/${$oid}`}/>
                        </ContainerBtnRecipe>
                    </Container>
                </ContainerCard>
    )
}

export default MyRecipeItem
