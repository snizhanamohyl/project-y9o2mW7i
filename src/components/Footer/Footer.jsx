import LogoFooter from "components/LogoFooter/LogoFooter";
import ExplanationTextFooter from "../ExplanationTextFooter/ExplanationTextFooter";
import NavFooter from "../NavFooter/NavFooter";
import ButtonsFooter from "components/ButtonsFooter/ButtonsFooter";
import SocialNetworkFooter from "../SocialNetworkFooter/SocialNetworkFooter";
import BottomBlock from "components/BottomBlock/BottomBlock";
import {
    FooterSection,
    FooterBoxTab,
    ElementBoxTab,
    FooterBoxDesk,
    Container,
} from "./Footer.styled";



export default function Footer() {
    
    return (<>
    <FooterSection>
    <Container>
                
    <FooterBoxDesk>  
    <FooterBoxTab>                 
    <ElementBoxTab>
    <LogoFooter />
    <ExplanationTextFooter />
    </ElementBoxTab> 
    <NavFooter/>
    </FooterBoxTab>                
    <ButtonsFooter />
    </FooterBoxDesk>        
    <SocialNetworkFooter />
                
    </Container>            
    </FooterSection>
   
    <BottomBlock/>
    </>     
    )
};