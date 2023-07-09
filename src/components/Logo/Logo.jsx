import LogoIcon from "iconsComponents/LogoIcon/LogoIcon";
import { LogoLink } from "./Logo.styled";

export default function Logo({ isFooter }) {
    const color = isFooter ? '#8BAA36' : '#FAFAFA';

    return <LogoLink to='/' isfooter={isFooter ? 'true' : isFooter} >
        <LogoIcon color={ color } />
    </LogoLink>
}