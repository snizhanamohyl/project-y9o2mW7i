import sprite from '../../assets/sprite.svg'
import BurgerBtn from "components/BurgerBtn/BurgerBtn";
import UserLogo from "components/UserLogo/UserLogo";
import { HeaderBox, HeaderWrapper, Menu, NavigationMenu } from "./Header.styled";
import Navigation from "components/Navigation/Navigation";
import ThemeToggler from "components/ThemeToggler/ThemeToggler";
import { Link } from 'react-router-dom';
import useResize from 'hooks/useWindowWidth';
import SharedContainer from 'components/SharedContainer/SharedContainer';

export default function Header({ toggleMenu }) {
    const width = useResize();
    const logoSize = width < 768 ? 40 : 44;
    
    return <HeaderWrapper>
        <SharedContainer>
            <HeaderBox>
                <NavigationMenu>
                    <Link to='/'>
                        <svg width={logoSize} height={logoSize}>
                            <use href={`${sprite}#icon-logo-44x44BG`}></use>
                        </svg>
                    </Link>
                    <Navigation/>
                </NavigationMenu>
                <Menu>
                    <UserLogo />
                    <BurgerBtn toggleMenu={toggleMenu} />
                    { (width > 1439) && <ThemeToggler/> }
                    </Menu>
            </HeaderBox>
        </SharedContainer>
    </HeaderWrapper>
}