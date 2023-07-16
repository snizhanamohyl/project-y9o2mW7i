import {
  OptionContainer,
  NumberContainer,
  ProductImg,
  ProductContainer,
  RemoveBtn,
  SvgRemove
} from './ShoppingListItem.styled';
import sprite from 'assets/sprite.svg';
import { useDispatch } from 'react-redux';
import * as shoppingListOperations from 'redux/ShopingList/operations';

export default function ProductListItem({
  id,
  name,
  number,
  url,
}) {

  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(shoppingListOperations.deleteIngredient(id));
    console.log(id)
  };

  return (
    <>
      <ProductContainer>
        <ProductImg src={url} />
        <span>{name}</span>
      </ProductContainer>
      <OptionContainer>
        <NumberContainer>{number}</NumberContainer>
        <RemoveBtn onClick={onDeleteClick}>
          <SvgRemove>
          <use href={sprite + '#icon-X'}></use>
          </SvgRemove>
        </RemoveBtn>
      </OptionContainer>
    </>
  );
}
