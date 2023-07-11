import styled from 'styled-components';


export const RecipeGroupName = styled.h2`
  margin-top:0;     
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  color: var(--title-color);



  @media (min-width: 768px) {
     margin-bottom: 40px;
     font-size: 44px;
  }

  @media (min-width: 1440px) {
    width: 300px;
    margin-bottom: 50px; 
  }
` ;