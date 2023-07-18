import {
  ImageIngredient,
  IngredientName,
  ListItem,
  QuantityIngredient,
} from './IngredientsItem.styled';

import CheckboxLabels from '../Checkbox/Checkbox';
import { useParams } from 'react-router-dom';

export default function RecipePageIngredientsItem({ ingredient }) {
  const { recipeId } = useParams();
  const { id, measure } = ingredient;
  const newId = (id._id + recipeId).slice(12, 36);

  const newStructure = {
    ...ingredient.id,
    measure,
    newId: newId,
  };
  return (
    <>
      <ListItem>
        <div>
          <ImageIngredient alt={id.name} src={id.img} />
          <IngredientName>{id.name}</IngredientName>
        </div>
        <div>
          <QuantityIngredient>{measure}</QuantityIngredient>
          <CheckboxLabels key={newId} id={newId} newStructure={newStructure} />
        </div>
      </ListItem>
    </>
  );
}
