import sprite from '../../assets/sprite.svg';
import { LogoFooterLink,LogoText } from "./LogoFooter.styled";
import useWindowWidth from 'hooks/useWindowWidth';

export default function LogoFooter() {
    const width = useWindowWidth();
    const logoSize = width < 768 ? 32 : 44;

    const onClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (<LogoFooterLink to="/" onClick={onClick}>
       <svg  width={logoSize} height={logoSize}>
            <use href={`${sprite}#icon-footer-logo`}></use>    
        </svg>
        <LogoText>So Yummy</LogoText>
    </LogoFooterLink>)
};