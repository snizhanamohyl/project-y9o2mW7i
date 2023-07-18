import {
  ImageIngredient,
  IngredientName,
  ListItem,
  QuantityIngredient,
  Svg,
} from './IngredientsItem.styled';
import sprite from '../../../assets/sprite.svg';

import CheckboxLabels from '../Checkbox/Checkbox';

export default function RecipePageIngredientsItem({ ingredient }) {
  const { name, img, measure, newId } = ingredient;

  return (
    <>
      <ListItem>
        <div>
          {img ? (
            <ImageIngredient alt={name} src={img} />
          ) : (
            <Svg width={57} height={57}>
              <use href={`${sprite}#icon-icon-food`}></use>
            </Svg>
          )}
          <IngredientName>{name}</IngredientName>
        </div>
        <div>
          <QuantityIngredient>{measure}</QuantityIngredient>
          <CheckboxLabels key={newId} id={newId} newStructure={ingredient} />
        </div>
      </ListItem>
    </>
  );
}
