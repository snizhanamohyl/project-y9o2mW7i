import SearchForm from 'components/SearchForm/SearchForm';
import СhooseYourBreakfast from 'components/СhooseYourBreakfast/СhooseYourBreakfast';
import heroDishImgMob from '../../assets/images/mobile/hero-dish-1x.png'
import heroDishImgMobRet from '../../assets/images/mobile/hero-dish-2x.png'
import heroDishImgTab from '../../assets/images/tablet/hero-dish-1x.png'
import heroDishImgTabRet from '../../assets/images/tablet/hero-dish-2x.png'
import heroDishImgDesk from '../../assets/images/desktop/hero-dish-1x.png'
import heroDishImgDeskRet from '../../assets/images/desktop/hero-dish-2x.png'
import { AccentSpan, Descr, HeroWrap, Image, Title } from './Hero.styled';

const srcsetMob = `${heroDishImgMob} 1x, ${heroDishImgMobRet} 2x`;
const srcsetTab = `${heroDishImgTab} 1x, ${heroDishImgTabRet} 2x`;
const srcsetDesk = `${heroDishImgDesk} 1x, ${heroDishImgDeskRet} 2x`;

export default function Hero() {
    return <HeroWrap>
        <Title><AccentSpan>So</AccentSpan>Yummy</Title>
        <Descr>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</Descr>
        <Image>
            <source srcSet={srcsetDesk} media="(min-width: 1440px)" />
            <source srcSet={srcsetTab} media="(min-width: 768px)" />
            <source srcSet={srcsetMob} media="(max-width: 767px)" />
            <img src={heroDishImgMob} alt="Dish"></img>
        </Image>
        <SearchForm />
        <СhooseYourBreakfast/>
    </HeroWrap>;
}