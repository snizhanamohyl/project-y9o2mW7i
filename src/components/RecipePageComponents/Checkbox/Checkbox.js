import { useDispatch, useSelector } from 'react-redux';
import { CheckBoxWraper } from './Checkbox.styled';
import { addIngredient, deleteIngredient } from 'redux/ShopingList/operations';
import { getShoppingList } from 'redux/ShopingList/selectors';
export default function Checkbox({ id, label, newStructure }) {
  const dispatch = useDispatch();

  const shoppingList = useSelector(getShoppingList);
  const add = shoppingList.find(el => el.newId === id);

  function onClick(id) {
    if (!add) {
      dispatch(addIngredient(newStructure));
    } else {
      dispatch(deleteIngredient(id));
    }
  }

  return (
    <CheckBoxWraper>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={add ? true : false}
          onChange={() => onClick(id)}
        />
        <span>{label}</span>
      </label>
    </CheckBoxWraper>
  );
}
