import sprite from '../../assets/sprite.svg'
import BurgerBtn from "components/BurgerBtn/BurgerBtn";
import UserLogo from "components/UserLogo/UserLogo";
import { HeaderWrap, Menu, NavigationMenu } from "./Header.styled";
import Navigation from "components/Navigation/Navigation";
import ThemeToggler from "components/ThemeToggler/ThemeToggler";
import { Link } from 'react-router-dom';

export default function Header({toggleMenu}) {
    const logoSize = window.innerWidth < 768 ? 40 : 44;

    return <><HeaderWrap>
        <NavigationMenu>
            <Link to='/'>
                <svg width={logoSize} height={logoSize}>
                    <use href={`${sprite}#icon-logo-withBG`}></use>
                </svg>
            </Link>
            <Navigation/>
        </NavigationMenu>
        <Menu>
            <UserLogo />
            <BurgerBtn toggleMenu={toggleMenu} />
            <ThemeToggler/>
        </Menu>
    </HeaderWrap>
    </>
}