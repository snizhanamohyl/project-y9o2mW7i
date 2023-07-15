import {
  ImageIngredient,
  IngredientName,
  ListItem,
  QuantityIngredient,
} from './IngredientsItem.styled';

import CheckboxLabels from '../Checkbox/Checkbox';
import { addIngredient, deleteIngredient } from 'redux/ShopingList/thunk';
import { useDispatch } from 'react-redux';

export default function RecipePageIngredientsItem({ ingredient }) {
  const dispatch = useDispatch();
  const { id, measure } = ingredient;
  const newStructure = { ...id, measure };
  const handleCheckboxClick = (isChecked, newStructure) => {
    if (isChecked) {
      dispatch(addIngredient(newStructure));
    } else {
      dispatch(deleteIngredient(newStructure.id));
    }
  };
  console.log(newStructure);
  return (
    <>
      <ListItem>
        <div>
          <ImageIngredient alt={newStructure.name} src={newStructure.img} />
          <IngredientName>{newStructure.name}</IngredientName>
        </div>
        <div>
          <QuantityIngredient>{newStructure.measure}</QuantityIngredient>
          <CheckboxLabels
            key={newStructure._id}
            id={newStructure._id}
            onClick={handleCheckboxClick}
          />
        </div>
      </ListItem>
    </>
  );
}
