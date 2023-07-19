import { useState } from "react";
import { Formik} from "formik";
import {
    ButtonsFooterContainer,
    EmailInput,
    ErrorEmailInput,
    EmailInputBox,
    FormEl,
    IconLetter,
    SubscribeBtn,
    SubscribeMainText,
    SubscribeText,
} from "./SubscribeBlock.styled";
import sprite from '../../assets/sprite.svg';
import useWindowWidth from "../../hooks/useWindowWidth";
import subscribe from "services/subscribe";
import Notification from "components/Notification/Notification";
import { userSubscribeSchema } from "schemas/userSubscribeSchema";


export default function SubscribeBlock() {
  const [status, setStatus] = useState(null);
  const width = useWindowWidth();
  let logoHeight = 16;
  let logoWidth = 12;

  if (width > 768) {
   logoHeight = 24;
   logoWidth = 18;
  }

  if (width > 1450) {
    logoWidth = 24;
    logoHeight = 28;
  }

  const onSendEmail = (values, action) => {
    const { email } = values;
    const { resetForm } = action;

    if (email === "") {
       return
    }

    subscribe(email)
      .then(resp => setStatus(resp?.request?.status))
      .finally(setStatus(200));
    
    resetForm();
  };
  

  return (<ButtonsFooterContainer>

    {status === 404
      ? <Notification text={"Failed to subscribe, please try again."} />
      : <></>
    } 

    <SubscribeMainText>Subscribe to our Newsletter</SubscribeMainText>  
    <SubscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SubscribeText>

  <Formik
        initialValues={{email: ""}}
        validationSchema={userSubscribeSchema}
        onSubmit={onSendEmail}
        validateOnChange={false}
        validateOnBlur={false} >
      
      {({ errors, touched }) => (
        <FormEl>
            <EmailInputBox> 
                <IconLetter width={logoWidth} height={logoHeight}>
                <use href={`${sprite}#icon-letter`}></use>    
                </IconLetter>
              {errors.email && touched.email ? (
              <ErrorEmailInput type="email" name="email"  placeholder="Enter your email address"/>
            ) : (
              <EmailInput type="email" name="email"   placeholder="Enter your email address"/>
            )}  
          </EmailInputBox>
        <SubscribeBtn type="submit">Subscribe</SubscribeBtn>
        </FormEl>
      )}  
     
    </Formik >
    
  </ButtonsFooterContainer>);
};



