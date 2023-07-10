import SearchForm from 'components/SearchForm/SearchForm';
import СhooseYourBreakfast from 'components/СhooseYourBreakfast/СhooseYourBreakfast';
import heroDishImgMob from '../../assets/images/mobile/hero-dish.png'
import heroDishImgTab from '../../assets/images/tablet/hero-dish.png'
import heroDishImgDesk from '../../assets/images/desktop/hero-dish.png'
import { AccentSpan, Descr, HeroWrap, Image, Title } from './Hero.styled';

export default function Hero() {
    return <HeroWrap>
        <Title><AccentSpan>So</AccentSpan>Yummy</Title>
        <Descr>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</Descr>
        <Image src={window.innerWidth < 768 ? heroDishImgMob : (window.innerWidth < 1440 ? heroDishImgTab : heroDishImgDesk)} alt="Dish"/>
        <SearchForm />
        <СhooseYourBreakfast/>
    </HeroWrap>;
}