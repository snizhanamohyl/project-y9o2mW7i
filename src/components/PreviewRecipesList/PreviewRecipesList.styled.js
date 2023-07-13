import styled from 'styled-components';


export const RecipeItem = styled.li`
    margin-bottom : 32px;
 
    &:last-child {
      margin-bottom: 40px;
    }
  

  @media (min-width: 768px) {
    margin-bottom : 50px;

    &:last-child {
     margin-bottom: 32px;
   }
   }


  @media (min-width: 1440px) {
      margin-bottom : 100px;
     

    &:last-child {
     margin-bottom: 14px;
    }
    } 
   `;


