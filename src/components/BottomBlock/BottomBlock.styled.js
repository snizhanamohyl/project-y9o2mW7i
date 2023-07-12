import styled from 'styled-components';



export const Block = styled.div`
    display:flex;
    justify-content: center;   

    padding-bottom: 28px;
    padding-top: 28px;

    @media (min-width: 768px) {
        padding-bottom: 32px;
        padding-top: 32px;
     }

     @media (min-width: 1450px) {
        padding-bottom: 50px;
        padding-top: 50px;
     }
`;

export const ReservedText = styled.p`
    margin-right:14px;

    color: #22252A;
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;

    @media (min-width: 768px) {
       margin-right:28px;
       font-size: 14px;
     }

    @media (min-width: 1450px) {
       margin-right:40px; 
    }

`;

export const ServiceText = styled.p`
   color: #22252A;
   font-size: 10px;
   font-style: normal;
   font-weight: 400;
   line-height: 10px;
   
   
   @media (min-width: 768px) {
       font-size: 14px;
     }
`;