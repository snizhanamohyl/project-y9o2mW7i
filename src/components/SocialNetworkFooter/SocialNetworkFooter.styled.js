import styled from 'styled-components';


export const SocialNetworkList = styled.ul`
     display: flex;
     justify-content: center;
    
`;

export const SocialNetworkItem = styled.li`
     margin-right:14px;
    
    &:last-child {
    margin-right: 0;
   }

   @media (min-width: 768px) {
      margin-right:18px;

      
     &:last-child {
     margin-right: 0;
    }
  }
`;


export const SocialNetworIcon = styled.svg`
   fill: var(--accent);
`;