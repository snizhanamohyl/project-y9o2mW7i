import sprite from 'assets/sprite.svg'
import { SeeRecipesLink, Text, TextAccent, Wrap } from './СhooseYourBreakfast.styled';

export default function СhooseYourBreakfast() {
  return (
    <Wrap>
      <Text>
        <TextAccent>Delicious and healthy</TextAccent> way to enjoy a variety of fresh ingredients in one
        satisfying meal
      </Text>
      <SeeRecipesLink to="/categories/breakfast">See recipes
        <svg width="18" height="18">
          <use href={`${sprite}#icon-arrow-narrow-right`}></use>
        </svg>
      </SeeRecipesLink>
    </Wrap>
  );
}
