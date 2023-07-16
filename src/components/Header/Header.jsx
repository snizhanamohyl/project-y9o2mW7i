import BurgerBtn from "components/BurgerBtn/BurgerBtn";
import UserLogo from "components/UserLogo/UserLogo";
import { HeaderBox, HeaderWrapper, Menu, NavigationMenu } from "./Header.styled";
import Navigation from "components/Navigation/Navigation";
import ThemeToggler from "components/ThemeToggler/ThemeToggler";
import { Link } from 'react-router-dom';
import useResize from 'hooks/useWindowWidth';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import Logo from 'components/Logo/Logo';

export default function Header({ toggleMenu }) {
    const width = useResize();
    const logoSize = width < 768 ? 40 : 44;
    
    return <HeaderWrapper>
        <SharedContainer>
            <HeaderBox>
                <NavigationMenu>
                    <Link to='/'>
                        <Logo size={logoSize} />
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