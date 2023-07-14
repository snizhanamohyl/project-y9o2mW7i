import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BtnRecipeSee = styled.div`
    background-color: var(--text-primary);
    border-radius: 24px 44px;
    border: 1px solid var(--text-primary);

    color: var(--bg-color);
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    transition: color var(--transition-time) var(--transition-function), 
                background-color var(--transition-time) var(--transition-function), 
                border var(--transition-time) var(--transition-function);


    @media screen and (min-width: 767px){
        font-size: 14px;
    }

    @media screen and (min-width: 1439px){
        font-size: 16px;
    }

    background: ${props => props.isFavorites ? "var(--dark-accent)" : "var(--accent)"};
    border: ${props => props.isFavorites ? "1px solid var(--dark-accent)" : "1px solid var(--accent)"};

    &:hover{
        background-color: ${props => props.isFavorites ? "var(--light-green-bg);" : "var(--dark-accent)"};
        border: ${props => props.isFavorites ? "1px solid var(--light-green-bg);" : "1px solid var(--dark-accent)"};
        color: ${props => props.isFavorites ? "var(--dark-accent)" : "var(--bg-color)"};
    }
`

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