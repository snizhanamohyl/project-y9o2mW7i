import PreviewCategories from "../../components/PreviewCategories/PreviewCategories";
import Hero from "components/Hero/Hero";
import SharedContainer from "components/SharedContainer/SharedContainer";

export default function MainPage() {
    return (<SharedContainer>
      <Hero/>  
      <PreviewCategories/>
    </SharedContainer>)
}
