import {
  ImageIngredient,
  IngredientName,
  ListItem,
  QuantityIngredient,
} from './IngredientsItem.styled';

import CheckboxLabels from '../Checkbox/Checkbox';

export default function RecipePageIngredientsItem({ ingredient }) {
  const { name, img, measure, newId } = ingredient;
  return (
    <>
      <ListItem>
        <div>
          <ImageIngredient alt={name} src={img} />
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
