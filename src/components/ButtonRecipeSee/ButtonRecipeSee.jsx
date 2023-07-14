import { BtnRecipeSee } from './ButtonRecipeSee.styled.jsx';

const ButtonRecipeSee = ({ isFavorites, path }) => {
    return(
        <>
            <BtnRecipeSee isfavorites={isFavorites} to={path}>See recipe</BtnRecipeSee>
        </>
    )
}

export default ButtonRecipeSee;