import styled from 'styled-components';



export const SubscribeMainText = styled.p`
    display:none;
   
     @media (min-width: 1440px) {
        display:block;

        color: var(--bg-color);
        font-size: 18px;
        font-weight: 700;
        line-height: 18px;
        margin-bottom: 14px;
     }
`;


export const SubscribeText = styled.p`
      display:none;  

      @media (min-width: 1440px) {
        display:block;
 
        text-align: initial;
        color: var(--bg-color);
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin-bottom: 28px;
     }
`;


export const ButtonsFooterContainer = styled.div`
     margin-bottom: 44px;


      @media (min-width: 768px) {
        display:flex;
        justify-content: center;
        margin-bottom: 38px;
     }

     @media (min-width: 1440px) {
       width: 340px;
       flex-direction: column;
       align-items: baseline;
       margin-bottom: 40px;
     }
   
`;



export const EmailBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: initial;

    margin: 0 auto 12px auto;
    padding-left: 14px;

    border-radius: 10px;
    width: 204px;
    height: 38px;
    border: 1px solid grey;
    color: var(--bg-color);
    font-size: 10px;


     @media (min-width: 768px) {
        width: 260px;
        height: 50px;
        margin-right: 12px;
        margin-left: 0;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px; 
     }

      @media (min-width: 1440px) {
        width: 340px;
        height: 60px;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 16px;
        font-size: 18px;
     }
`;

export const IconLatter = styled.svg`
    margin-right: 12px;

    @media (min-width: 768px) {
        margin-right: 16px;   
     }
` 

export const SubscribeBtn = styled.button`
    width: 204px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid grey;
    background-color: var(--accent);
    color: var(--bg-color);
    text-align: center;
    font-size: 14px;
    line-height: 16px;


    @media (min-width: 768px) {
        width: 260px;
        height: 50px;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px; 
     }

      @media (min-width: 1440px) {
        width: 340px;
        height: 60px;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px; 
     }
`;