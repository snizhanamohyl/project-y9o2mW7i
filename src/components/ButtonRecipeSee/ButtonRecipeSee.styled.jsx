import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BtnRecipeSee = styled(Link)`
    background-color: #22252A;
    border-radius: 24px 44px;
    border: 1px solid #22252A;

    color: #FAFAFA;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    padding: 6px 14px;


    @media screen and (min-width: 767px){
        font-size: 14px;
        padding: 12px 32px;
    }

    @media screen and (min-width: 1439px){
        font-size: 16px;
        padding: 14px 38px;
    }

    background: ${props => props.isFavorites ? "#22252A" : "#8BAA36"};
    border: ${props => props.isFavorites ? "1px solid #22252A" : "1px solid #8BAA36"};
`