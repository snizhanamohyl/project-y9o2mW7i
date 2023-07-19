import { BtnRecipeSee, LinkRecipe } from './ButtonRecipeSee.styled.js';

const ButtonRecipeSee = ({ isFavorites, path }) => {
    const onClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"}) 
    }
    
    return(
        <>
            <BtnRecipeSee $isFavorites={isFavorites}>
                <LinkRecipe to={path} onClick={onClick}>See recipe</LinkRecipe>
            </BtnRecipeSee>
        </>
    )
}

export default ButtonRecipeSee;