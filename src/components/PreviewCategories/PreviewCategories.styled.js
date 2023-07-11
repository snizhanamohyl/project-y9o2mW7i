import styled from 'styled-components';



export const PreviewCategoriesSection = styled.section`
    padding-top: 64px;
    padding-bottom: 100px;

  @media (min-width: 768px) {
     padding-top: 72px;
  }

   @media (min-width: 1440px) {
     padding-top: 100px;
     padding-bottom: 118px;
  }
`; 

export const OtherBtnIcon = styled.button`
    display: block;
    margin: 0  auto 0 auto;
    width: 240px;
    height: 60px;
    border: 2px solid var(--accent);
    border-radius: 18px 36px;
   
    font-size: 16px;
    color: var(--dark-accent);
`;


