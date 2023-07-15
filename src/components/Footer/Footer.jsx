import LogoFooter from "components/LogoFooter/LogoFooter";
import ExplanationTextFooter from "../ExplanationTextFooter/ExplanationTextFooter";
import NavFooter from "../NavFooter/NavFooter";
import SubscribeBlock from "components/SubscribeBlock/SubscribeBlock";
import BottomBlock from "components/BottomBlock/BottomBlock";
import {
    FooterSection,
    FooterBoxTab,
    ElementBoxTab,
    FooterBoxDesk,
    Container,
} from "./Footer.styled";
import FollowUs from "components/FollowUs/FollowUs";

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
                <FollowUs isFooter/>
            </Container>            
        </FooterSection> 
        <BottomBlock/>
    </>     
    )
};

