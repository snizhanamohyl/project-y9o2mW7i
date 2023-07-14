import styled from 'styled-components';


export const TextFooterList = styled.ul`
    display: none;
   
   @media (min-width: 768px) {
      display: block;
      width:378px;
      text-align: initial;
      margin-bottom: 72px;
   } 
   
   @media (min-width:1440px) {
     

   }
`;

export const TextFooterItem = styled.li`
    color: var(--bg-color);
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    list-style: inside;
   
    &:last-child {
       margin-bottom: 0;
    }


   @media (min-width: 768px) {
      margin-bottom: 20px;
       &:last-child 
       margin-bottom: 0;
    
   }   


   @media (min-width: 1440px) {
      margin-bottom: 24px;

      &:last-child 
      margin-bottom: 0;
    
   } 
`;