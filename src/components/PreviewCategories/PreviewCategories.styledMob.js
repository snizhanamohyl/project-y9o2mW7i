import styled from 'styled-components';


export const OtherBtnIcon = styled.button`
    display: block;
    margin: 0  auto 100px auto;
    width: 240px;
    height: 60px;
    border: 2px solid var(--accent);
    border-radius: 18px 36px;
   
    font-size: 16px;
    color: var(--dark-accent);
`;

export const RecipeListMob = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;


export const RecipeCardMob = styled.li`
    margin-bottom: 32px; 

    &:last-child {
    margin-bottom: 40px;
  }
`;


export const RecipeTitleMob = styled.h2`
  margin-top:0;     
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
`;

export const ImgBoxMob = styled.div`
   position:relative;
   width: 344px;
   height: 322px;
   background-color: grey;
   border-radius: 8px;
`;

export const RecipeImgMob = styled.img`
     width: 343px;
     height: 323px;
`;

export const RecipMob = styled.p`
    position: absolute;
    bottom: 26px;
    left: 18px;

    width: 307px;
    height: 52px;
    padding-top: 16px;
    padding-bottom:16px;
    padding-left: 16px;
    margin-top:0;
    margin-bottom:0;
    background-color: var(--white);
    border-radius: 8px;

    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
`;

export const SeeAllLinkMob = styled.p`
    text-align: center;
    margin-left: auto;
    margin-top:24px;
    width: 94px;
    height: 38px;
    padding: 10px 24px;
    background-color: var(--accent);
    border-radius: 6px;
    color: var(--bg-color);
`;




