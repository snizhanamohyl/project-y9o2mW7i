import styled from 'styled-components';

export const GroupNameDesk = styled.h2`
    margin-bottom: 50px; 
  
    color: var(--title-color);
    font-size: 44px;
    font-weight: 600;   

`

export const RecipeListDesk = styled.ul`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;


export const RecipeCardDesk = styled.li`
   width: 300px;
   height: 322px;
`;

export const ImgBoxDesk = styled.div`
    position:relative;
    background-color: grey;
    border-radius: 8px;
`;


export const RecipDesk = styled.p`
    position: absolute;
    bottom: 26px;
    left: 18px;

    width: 268px;
    height: 52px;
    padding-top: 16px;
    padding-bottom:16px;
    padding-left: 16px;
    margin-top:0;
    margin-bottom:0;
    background-color: white;
    border-radius: 8px;

   
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
    color:var(--pre-title-color);
`;

export const SeeAllLinkDesk = styled.p`
    text-align: center;
    margin-left: auto;
    margin-bottom: 100px;
    margin-top: 50px;
    width: 94px;
    height: 38px;
    font-size: 14px;
    padding: 10px 24px;
    background-color: var(--accent);
    border-radius: 6px;
    color: var(--bg-color);
`;


export const SeeAllLinkDeskLast = styled.p`
    text-align: center;
    margin-left: auto;
    margin-bottom: 14px;
    margin-top: 50px;
    width: 94px;
    height: 38px;
    font-size: 14px;
    padding: 10px 24px;
    background-color: var(--accent);
    border-radius: 6px;
    color: var(--bg-color);
`;

export const OtherBtnIconDesk = styled.button`
    display: block;
    margin: 0  auto 118px auto;
    width: 240px;
    height: 60px;
    border: 2px solid var(--accent);
    border-radius: 18px 36px;
   
    font-size: 16px;
    color: var(--dark-accent);
  
`;