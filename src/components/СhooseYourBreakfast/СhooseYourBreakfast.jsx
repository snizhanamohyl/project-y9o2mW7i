import ArrowRight from 'iconsComponents/ArrowRight/ArrowRight';
import { SeeRecipesLink, Text, TextAccent, Wrap } from './СhooseYourBreakfast.styled';

export default function СhooseYourBreakfast() {
  return (
    <Wrap>
      <Text>
        <TextAccent>Delicious and healthy</TextAccent> way to enjoy a variety of fresh ingredients in one
        satisfying meal
      </Text>
      <SeeRecipesLink to="/categories/breakfast">See recipes <ArrowRight/></SeeRecipesLink>
    </Wrap>
  );
}
