import {
    ButtonsFooterContainer,
    EmailBtn,
    IconLatter,
    SubscribeBtn,
    SubscribeMainText,
    SubscribeText
} from "./ButtonsFooter.styled";
import sprite from '../../assets/sprite.svg';


export default function ButtonsFooter() {
  const logoWidth = window.innerWidth < 768 ? 16: 20;
  const logoHeight = window.innerWidth < 768 ? 12: 16;

  return (<ButtonsFooterContainer>
      <SubscribeMainText>Subscribe to our Newsletter</SubscribeMainText>  
      <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText> 
      <EmailBtn>
        <IconLatter width={logoWidth} height={logoHeight}>
        <use href={`${sprite}#icon-letter`}></use>    
        </IconLatter>      
       <p>Enter your email address</p>
      </EmailBtn>
        <SubscribeBtn>
         Subscribe
      </SubscribeBtn>
    </ButtonsFooterContainer>);
};