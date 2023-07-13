import styled from "@emotion/styled"

export const BtnDel = styled.button`
    border-radius: 4px;
    border: none;
    background-color: var(--light-green-bg);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px;

    @media screen and (min-width: 767px){
        padding: 8px;
    }

    @media screen and (min-width: 1439px){
        padding: 10px;
    }

    background: ${props => props.isFavorites ? "var(--light-green-bg)" : "var(--accent)"};
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