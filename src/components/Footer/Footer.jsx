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
    FooterBoxDesk
} from "./Footer.styled";



export default function Footer() {
    
    return (
    <footer>
    <FooterSection>
                
    <FooterBoxDesk>  
    <FooterBoxTab> 
                    
    <ElementBoxTab>
    <LogoFooter />
    <ExplanationTextFooter />
    </ElementBoxTab> 

    <NavFooter />
    </FooterBoxTab>  
                    
    <ButtonsFooter />
    </FooterBoxDesk>                 
    <SocialNetworkFooter/>        
    </FooterSection>
    <BottomBlock/>      
    </footer>               
    )
};