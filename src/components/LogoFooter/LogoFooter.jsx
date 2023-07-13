import sprite from '../../assets/sprite.svg';
import { LogoFooterLink,LogoText } from "./LogoFooter.styled";
import useWindowWidth from 'hooks/useWindowWidth';

export default function LogoFooter() {
    const width = useWindowWidth();
    const logoSize = width < 768 ? 32 : 44;

    return (<LogoFooterLink to="/">
       <svg width={logoSize} height={logoSize}>
            <use href={`${sprite}#icon-logo-withBG`}></use>    
        </svg>
        <LogoText>So Yummy</LogoText>
    </LogoFooterLink>)
};