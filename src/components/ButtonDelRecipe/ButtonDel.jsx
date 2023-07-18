import { BtnDel, SvgDel } from './ButtonDelRecipe.styled.js';
import sprite from '../../assets/sprite.svg';

const ButtonDelRicepe = ({ isFavorites, onClick, disabled }) => {
    return(
        <BtnDel $isFavorites={isFavorites} onClick={onClick} disabled={disabled}>
            <SvgDel width="14" height="14">
                <use href={`${sprite}#icon-trash`}></use> 
            </SvgDel>
        </BtnDel>
    )
};

export default ButtonDelRicepe;