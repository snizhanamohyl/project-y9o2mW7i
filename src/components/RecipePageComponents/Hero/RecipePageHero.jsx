import {
  BtnAddFavorite,
  MainTitle,
  ContainerTimePrepare,
  RecipeDescription,
  SectionHero,
} from './RecipePageHero.styled';
import sprite from '../../../assets/sprite.svg';

export default function RecipePageHero() {
  return (
    <SectionHero>
      <MainTitle>Salmon avocado salad</MainTitle>
      <RecipeDescription>
        Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
        pan seared salmon is layered on top of spinach, avocado, tomatoes, and
        red onions. Then drizzled with a homemade lemon vinaigrette.
      </RecipeDescription>
      <BtnAddFavorite type="button">Add to favorite recipes</BtnAddFavorite>
      <ContainerTimePrepare>
        <svg width={14} height={14}>
          <use href={`${sprite}#icon-clock`}></use>
        </svg>
        <span>20 min</span>
      </ContainerTimePrepare>
    </SectionHero>
  );
}
