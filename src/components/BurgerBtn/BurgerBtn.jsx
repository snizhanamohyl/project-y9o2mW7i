import useWindowWidth from 'hooks/useWindowWidth';
import sprite from '../../assets/sprite.svg'
import { Btn } from "./BurgerBtn.styled";
import { useLocation } from 'react-router-dom';

export default function BurgerBtn({ toggleMenu }) {
  const width = useWindowWidth();
  const size = width < 768 ? 28 : 32;

  const { pathname } = useLocation();
  const isMainPage = pathname === '/';
  const isRecipePage = pathname.includes('/recipe/');

  const burgerColor = (width >= 768 && width < 1440) ? (isMainPage || isRecipePage ? '#23262a' : 'var(--text-color)') : 'inherit';
  
    return <Btn onClick={toggleMenu} $burgerColor={burgerColor}>
        <svg width={size} height={size}>
          <use href={`${sprite}#icon-menu`}></use>
        </svg>
    </Btn>
}