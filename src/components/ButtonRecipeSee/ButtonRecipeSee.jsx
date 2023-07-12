import { BtnRecipeSee } from './ButtonRecipeSee.styled.jsx';

const ButtonRecipeSee = ({ isFavorites }) => {
    return(
        <>
            <BtnRecipeSee isFavorites={isFavorites} to='/add'>See recipe</BtnRecipeSee>
        </>
    )
}

export default ButtonRecipeSee;