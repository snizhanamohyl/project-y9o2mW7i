import {
  ImageIngredient,
  IngredientName,
  ListItem,
  QuantityIngredient,
} from './IngredientsItem.styled';

import CheckboxLabels from './Checkbox/Checkbox';

export default function RecipePageIngredientsItem({
  ingredient: { id, measure },
}) {
  return (
    <>
      <ListItem>
        <div>
          <ImageIngredient alt="photo ingredients" src={id.img} />
          <IngredientName>{id.name}</IngredientName>
        </div>
        <div>
          <QuantityIngredient>{measure}</QuantityIngredient>
          <CheckboxLabels />
        </div>
      </ListItem>
    </>
  );
}
