import useWindowWidth from 'hooks/useWindowWidth';
import sprite from '../../assets/sprite.svg'
import { Btn } from "./BurgerBtn.styled";

export default function BurgerBtn({ toggleMenu }) {
  const width = useWindowWidth();
  const size = width < 768 ? 28 : 32;
  const burgerColor = (width >= 768 && width < 1440) ? '#23262a' : 'inherit';
  
    return <Btn onClick={toggleMenu} burgerColor={burgerColor}>
        <svg width={size} height={size}>
          <use href={`${sprite}#icon-menu`}></use>
        </svg>
    </Btn>
}