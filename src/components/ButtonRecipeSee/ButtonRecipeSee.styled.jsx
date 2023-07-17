import styled from "@emotion/styled";
// import { light } from "@mui/material/styles/createPalette";
import { Link } from "react-router-dom";

export const BtnRecipeSee = styled.div`
    border-radius: 24px 44px;

    color: #fafafa;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    transition: color var(--transition-time) var(--transition-function), 
                background-color var(--transition-time) var(--transition-function);

    @media screen and (min-width: 767px){
        font-size: 14px;
    }

    @media screen and (min-width: 1439px){
        font-size: 16px;
    }

    background-color: ${({ $isFavorites }) => $isFavorites ? "var(--is-fav-see-btn)" : "var(--accent-green)"};

    &:hover, &:focus {
        ${({ $isFavorites }) => `background-color: ${$isFavorites ? "var(--is-fav-see-btn-hover)" : "var(--is-my-see-btn-hover)"};
            color: ${$isFavorites ? "var(--is-fav-see-btn-color)" : "var(--main-light-color"};`       
    };}`

export const LinkRecipe = styled(Link)`
    display: block;
    padding: 6px 14px;

    @media screen and (min-width: 767px){
        padding: 12px 32px;
    }

    @media screen and (min-width: 1439px){
        padding: 14px 38px;
    }
`