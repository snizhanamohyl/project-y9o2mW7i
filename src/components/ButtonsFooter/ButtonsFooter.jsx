import { useState, version } from "react";
import {
    ButtonsFooterContainer,
    EmailInput,
    EmailInputBox,
    IconLatter,
    SubscribeBtn,
    SubscribeMainText,
    SubscribeText
} from "./ButtonsFooter.styled";
import sprite from '../../assets/sprite.svg';
import useWindowWidth from "../../hooks/useWindowWidth";


export default function ButtonsFooter() {
  const [email, setEmail] = useState("");
  const width = useWindowWidth();
  const logoWidth = width < 768 ? 16: 20;
  const logoHeight = width < 768 ? 12: 16;
 
  const onInputChange = (e) => {
    const { value } = e.currentTarget;
    setEmail(value);
  }; 
   
  const onSendEmail = () => {
    setEmail("");
  };
  

  return (<ButtonsFooterContainer>
    
    <SubscribeMainText>Subscribe to our Newsletter</SubscribeMainText>  
    <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText>

    <EmailInputBox>
    <IconLatter width={logoWidth} height={logoHeight}>
    <use href={`${sprite}#icon-letter`}></use>    
    </IconLatter>      
    <EmailInput
      onChange={onInputChange}
      name="email"
      value={email}
      type="email"
      placeholder="Enter your email address"
      />     
    </EmailInputBox>

    <SubscribeBtn onClick={onSendEmail}>
      Subscribe
    </SubscribeBtn>
    </ButtonsFooterContainer>);
};


