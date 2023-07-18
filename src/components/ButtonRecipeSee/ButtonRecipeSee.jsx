import { BtnRecipeSee, LinkRecipe } from './ButtonRecipeSee.styled.js';

const ButtonRecipeSee = ({ isFavorites, path }) => {
    return(
        <>
            <BtnRecipeSee $isFavorites={isFavorites}>
                <LinkRecipe to={path}>See recipe</LinkRecipe>
            </BtnRecipeSee>
        </>
    )
}

export default ButtonRecipeSee;