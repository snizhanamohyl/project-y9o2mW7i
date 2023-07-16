import Logo from 'components/Logo/Logo';
import { LogoFooterLink,LogoText } from "./LogoFooter.styled";
import useWindowWidth from 'hooks/useWindowWidth';

export default function LogoFooter() {
    const width = useWindowWidth();
    const logoSize = width < 768 ? 32 : 44;

    const onClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"}) 
    }

    return (<LogoFooterLink to="/" onClick={ onClick }>
        <Logo size={logoSize} fill='var(--light-green-bg)' stroke='var(--accent)'/>
        <LogoText>So Yummy</LogoText>
    </LogoFooterLink>)
};