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
} from "./Footer.styled";
import FollowUs from "components/FollowUs/FollowUs";
import SharedContainer from "components/SharedContainer/SharedContainer";

export default function Footer() {
    return (<>
        <FooterSection>
            <SharedContainer>
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
            </SharedContainer>    
        </FooterSection> 
        <BottomBlock/>
    </>     
    )
};

