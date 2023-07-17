import styled from "@emotion/styled"

export const BtnDel = styled.button`
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px;

    transition: color var(--transition-time) var(--transition-function), 
                background-color var(--transition-time) var(--transition-function);

    @media screen and (min-width: 767px){
        padding: 8px;
    }

    @media screen and (min-width: 1439px){
        padding: 10px;
    }

    background-color: ${({$isFavorites}) =>  $isFavorites ? "var(--is-fav-del-btn)" : "var(--is-my-del-btn)"};
    color: ${({$isFavorites}) => $isFavorites ? "var(--is-fav-del-btn-color)" : "var(--is-del-btn-color)"};
    

    &:hover, &:focus {
        background-color: var(--is-fav-del-btn-hover);
        color: var(--is-del-btn-color);
    }
`

export const SvgDel = styled.svg`
    width: 14px;
    height: 14px;

    @media screen and (min-width: 767px){
        width: 22px;
        height: 22px;
    }

    @media screen and (min-width: 1439px){
        width: 24px;
        height: 24px;
    }
`