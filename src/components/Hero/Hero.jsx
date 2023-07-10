import SearchForm from 'components/SearchForm/SearchForm';
import heroDishImgMob from '../../images/hero-dish-mob.png'
import heroDishImgTab from '../../images/hero-dish-tab.png'
import heroDishImgDesk from '../../images/hero-dish-desk.png'
import { AccentSpan, Descr, HeroWrap, Image, Title } from './Hero.styled';

export default function Hero() {
    // const isMobile = window.innerWidth < 768 ? true : false; 

    return <HeroWrap>
        <Title><AccentSpan>So</AccentSpan>Yummy</Title>
        <Descr>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</Descr>
        <Image src={window.innerWidth < 768 ? heroDishImgMob : (window.innerWidth < 1440 ? heroDishImgTab : heroDishImgDesk)} alt="Dish"/>
        <SearchForm />
    </HeroWrap>;
}