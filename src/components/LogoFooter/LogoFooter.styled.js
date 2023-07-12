import styled from 'styled-components';
import { Link } from "react-router-dom";



export const LogoFooterLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 32px;

    @media (min-width: 768px) {
        justify-content: flex-start;
        margin-bottom: 24px;
        align-items: end;
     }
`;




export const LogoText = styled.p`
   margin-left: 10px;
   color: var(--bg-color);
   font-size: 18px;
   font-weight: 700;
   line-height: 18px;

     @media (min-width: 768px) {
        margin-bottom: 12px;
     }
`;
