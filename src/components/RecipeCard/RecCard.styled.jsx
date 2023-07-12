import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ContainerCard = styled.div`
    border-radius: 8px;
    background: #fff;

    display: flex;
    align-items: flex-start;
    gap: 14px;

    margin-bottom: 18px;
    padding: 14px 9px;

    @media screen and (min-width: 767px){
        padding: 28px 24px;
    }

    @media screen and (min-width: 1439px){
        padding: 40px;
    }

    &:last-child{
        gap: 40px;
    }
`


export const ImgCard = styled.img`
    width: 124px;
    height: 124px;
    border-radius: 8px;

    @media screen and (min-width: 767px) {
        width: 228px;
        height: 232px;
    }

    @media screen and (min-width: 1439px) {
        width: 318px;
        height: 324px;
    }
`

export const TitleCard = styled.h2`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.24px;

    margin-bottom: 14px;
    color: #3E4462;

    @media screen and (min-width: 767px){
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 28px;
    }

    @media screen and (min-width: 1439px){
        margin-bottom: 50px;
    }
`

export const BtnDel = styled.button`
    border-radius: 4px;
    border: none;
    background: #EBF3D4;

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

    background: ${props => props.isfavorites ? "#EBF3D4" : "#8BAA36"};
`

export const TextCard = styled.p`
    overflow: hidden;
    color: #23262A;
    text-overflow: ellipsis;
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.16px;

    @media (min-width: 375px) and (max-width: 1439px){
        display: -webkit-box;
        -webkit-line-clamp: 4; 
        -webkit-box-orient: vertical;
        line-clamp: 4; 
    }


    max-width: 153px;

    @media screen and (min-width: 767px){
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.28px;
        /* max-width: 298px; */
        max-width: 100%;
        margin-bottom: 0px;
    }

    @media screen and (min-width: 1439px){
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.36px;
        /* max-width: 100%; */
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 128px;
    width: 100%;

    @media screen and (min-width: 767px){
        height: 228px;
    }

    @media screen and (min-width: 1439px){
        height: 324px;
    }
`

export const ContainerContent = styled.div`
    flex: 1 1 auto;
`

export const ContainerHeaderRecipe = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const ContainerBtnRecipe = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

export const TimeCard = styled.span`
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.24px;

    @media screen and (min-width: 767px){
        font-size: 14px;
        line-height: 20px;
    }
`
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
        padding: 14px 38px 22px 38px
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