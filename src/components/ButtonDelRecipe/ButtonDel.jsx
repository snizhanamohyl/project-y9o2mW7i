import { BtnDel, SvgDel } from './ButtonDelRecipe.styled.jsx';
import sprite from '../../assets/sprite.svg';

const ButtonDelRicepe = ({ isFavorites, onClick }) => {
    return(
        <BtnDel isfavorites={isFavorites} onClick={onClick}>
            <SvgDel width="14" height="14">
                <use href={`${sprite}#card-delete-${isFavorites ? 'black' : 'white'}`}></use> 
            </SvgDel>
        </BtnDel>
    )
};

export default ButtonDelRicepe;