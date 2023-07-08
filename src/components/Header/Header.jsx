import BurgerBtn from "components/BurgerBtn/BurgerBtn";
import Logo from "components/Logo/Logo";
import UserLogo from "components/UserLogo/UserLogo";
import { HeaderWrap, Menu, NavigationMenu } from "./Header.styled";
import Navigation from "components/Navigation/Navigation";

export default function Header() {
    return <HeaderWrap>
        <NavigationMenu>
            <Logo />
            <Navigation/>
        </NavigationMenu>
        <Menu>
            <UserLogo />
            <BurgerBtn/>
        </Menu>
    </HeaderWrap>
}