import { navOptions } from 'vars/navOptions';
import sprite from '../../assets/sprite.svg'
import { NavItem, NavList, StyledLink } from "./Navigation.styled";

export default function Navigation() {
    return <nav>
        <NavList>
            {navOptions.map((option) => <NavItem key={option.route}>
                <StyledLink to={option.route}>
                    {option.route !== '/search'
                        ? option.name
                        : <svg width="24" height="24">
                            <use href={`${sprite}#icon-search`}></use>
                    </svg>}
                </StyledLink>
            </NavItem>)
            }
        </NavList>
    </nav>
}