import styled from 'styled-components';


export const RecipeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
 
`;


export const RecipeElem = styled.li`
   margin-bottom: 32px; 
   
   @media (min-width: 768px) {
     margin-bottom: 0px;

     &:nth-last-child(-n+2) {
    margin-bottom: -24px;
  }

   @media (min-width: 1440px) {
     &:nth-child(4n+2),
    &:nth-child(4n+3),
    &:nth-child(4n+6),
    &:nth-child(4n+7),
    &:nth-child(4n+10),
    &:nth-child(4n+11),
    &:nth-child(4n+14),
    &:nth-child(4n+15) {
      margin-bottom: 36px;
    }
  
     &:nth-child(4n+1),
     &:nth-child(4n+5),
     &:nth-child(4n+9),
     &:nth-child(4n+13) {
      margin-bottom : 8px;
     }   
     &:nth-child(4n+16) {
      margin-bottom: 2px;
     } 
  }
`;


