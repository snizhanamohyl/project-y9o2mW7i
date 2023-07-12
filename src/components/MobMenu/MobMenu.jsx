import { Link } from "react-router-dom";
import sprite from 'assets/sprite.svg'
import { MobHeaderWrap, MobMenuWrap, NavItem, NavList, StyledLink } from "./MobMenu.styled";
import ThemeToggler from "components/ThemeToggler/ThemeToggler";
import { navOptions } from "vars/navOptions";
import useWindowWidth from "hooks/useWindowWidth";
import { useEffect } from "react";

export default function MobMenu({ toggleMenu, isOpen }) {
    const width = useWindowWidth();
    const logoSize = width < 768 ? 40 : 44;

    useEffect(() => {
        const html = document.querySelector("html");
        
        if (html) {
            html.style.overflow = isOpen ? "hidden" : "auto";
        }
    }, [isOpen]);

    return <MobMenuWrap $isOpen={isOpen}>
        <MobHeaderWrap>
            <Link to='/' onClick={toggleMenu}>
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
            {navOptions.map((option) => <NavItem key={option.route}>
                <StyledLink to={option.route} onClick={toggleMenu}>
                    {option.route === '/search'
                        ? <svg width="24" height="24">
                            <use href={`${sprite}#icon-search`}></use>
                        </svg>
                        : ''}
                    {option.name}
                </StyledLink>
            </NavItem>
            )}
        </NavList>
        <ThemeToggler customerStyles={`position: absolute; bottom: 18px; left: 16px; @media (min-width: 768px) {left: 32px; bottom: 32px;}`}/>
    </MobMenuWrap>
}