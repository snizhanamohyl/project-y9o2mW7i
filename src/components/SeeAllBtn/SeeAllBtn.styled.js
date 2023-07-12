import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const SeeAllLink = styled(NavLink)`
    text-align: center;
    margin-left: auto;
    width: 94px;
    height: 38px;
    padding: 10px 24px;
    background-color: var(--accent);
    border-radius: 6px;
    color: var(--bg-color);


   @media (min-width: 1440px) {
    font-size: 14px;
   }
 }
   
`;
