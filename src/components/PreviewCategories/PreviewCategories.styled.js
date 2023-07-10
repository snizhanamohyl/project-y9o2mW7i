import styled from 'styled-components';



export const RecipeListMob = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;


export const RecipeCardMob = styled.li`
    margin-bottom: 32px; 
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
   width: 343px;
   height: 323px;
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






export const GroupNameTab = styled.h2`
    margin-bottom: 40px; 

    color: var(--title-color);
    font-size: 44px;
    font-weight: 600;
`;

export const RecipeListTab = styled.ul`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   
`;


export const RecipeCardTab = styled.li`
   width: 336px;
   height: 323px;
`;

export const ImgBoxTab = styled.div`
    position:relative;
    background-color: grey;
    border-radius: 8px;
`;



export const RecipTab = styled.p`
    position: absolute;
    bottom: 26px;
    left: 18px;

    width: 300px;
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


export const SeeAllLinkTab = styled.p`
    text-align: center;
    margin-left: auto;
    margin-bottom: 50px;
    margin-top:40px;
    width: 94px;
    height: 38px;
    padding: 10px 24px;
    background-color: var(--accent);
    border-radius: 6px;
    color: var(--bg-color);
`;