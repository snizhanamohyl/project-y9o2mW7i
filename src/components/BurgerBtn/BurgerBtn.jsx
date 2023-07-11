import sprite from '../../assets/sprite.svg'
import { Btn } from "./BurgerBtn.styled";

export default function BurgerBtn() {
    const size = window.innerWidth < 768 ? 28 : 32;
    return <Btn>
        <svg width={size} height={size}>
          <use href={`${sprite}#icon-menu`}></use>
        </svg>
    </Btn>
}