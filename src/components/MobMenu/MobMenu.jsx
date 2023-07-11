import { Link } from "react-router-dom";
import sprite from 'assets/sprite.svg'
import { MobHeaderWrap, MobMenuWrap, NavItem, NavList, StyledLink, ThemeTogglerMob } from "./MobMenu.styled";
import ThemeToggler from "components/ThemeToggler/ThemeToggler";

export default function MobMenu({toggleMenu}) {
    const logoSize = window.innerWidth < 768 ? 40 : 44;

    return <MobMenuWrap>
        <MobHeaderWrap>
            <Link to='/'>
                <svg width={logoSize} height={logoSize}>
                    <use href={`${sprite}#icon-logo-withBG`}></use>
                </svg>
            </Link>
            <button onClick={toggleMenu}>
                <svg width={32} height={32}>
                    <use href={`${sprite}#icon-x-3232`}></use>
                </svg>
            </button>
        </MobHeaderWrap>
        <NavList>
            <NavItem><StyledLink to='/categories'>Categories</StyledLink></NavItem>
            <NavItem><StyledLink to='/add'>Add recipes</StyledLink></NavItem> 
            <NavItem><StyledLink to='/my'>My recipes</StyledLink></NavItem>
            <NavItem><StyledLink to='/favorite'>Favorites</StyledLink></NavItem>
            <NavItem><StyledLink to='/shopping-list'>Shopping list</StyledLink></NavItem>
            <NavItem><StyledLink to='/search'>
                <svg width="24" height="24">
                    <use href={`${sprite}#icon-search`}></use>
                </svg>
                Search
            </StyledLink></NavItem>
        </NavList>
        {/* <ThemeToggler/> */}
        <ThemeTogglerMob/>
        <ThemeTogglerMob>ThemeToggler</ThemeTogglerMob>
    </MobMenuWrap>
}