import { useDispatch, useSelector } from 'react-redux';
import { CheckBoxWraper } from './Checkbox.styled';
import { toggleValue } from 'redux/toggle/selectors';
import { toggleOff, toggleOn } from 'redux/toggle/toggle.slice';
import { addIngredient, deleteIngredient } from 'redux/ShopingList/operations';
import { getAllFavorites } from 'redux/Favorite/selectors';
export default function Checkbox({ id, label, newStructure }) {
  const dispatch = useDispatch();
  const toggler = useSelector(toggleValue);

  function onClick(id) {
    if (toggler === false) {
      dispatch(toggleOn());
      dispatch(addIngredient(newStructure));
    } else {
      dispatch(toggleOff());
      dispatch(deleteIngredient(id));
    }
  }

  return (
    <CheckBoxWraper>
      <label htmlFor={id}>
        <input id={id} type="checkbox" onChange={() => onClick(id)} />
        <span>{label}</span>
      </label>
    </CheckBoxWraper>
  );
}
