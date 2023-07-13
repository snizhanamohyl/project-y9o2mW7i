import LogoFooter from "components/LogoFooter/LogoFooter";
import ExplanationTextFooter from "../ExplanationTextFooter/ExplanationTextFooter";
import NavFooter from "../NavFooter/NavFooter";
import SubscribeBlock from "components/SubscribeBlock/SubscribeBlock";
import SocialNetworkFooter from "components/SocialNetworkFooter/SocialNetworkFooter"
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
                        <NavFooter />
                    </FooterBoxTab>
                    <SubscribeBlock />           
                </FooterBoxDesk>
               <SocialNetworkFooter/>    
            </Container>            
        </FooterSection> 
        <BottomBlock/>
    </>     
    )
};

