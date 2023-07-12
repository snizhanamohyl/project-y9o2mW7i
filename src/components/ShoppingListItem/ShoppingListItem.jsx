import {
  OptionContainer,
  NumberContainer,
  ProductImg,
  ProductContainer,
  RemoveBtn,
  SvgRemove
} from './ShoppingListItem.styled';
import sprite from 'assets/sprite.svg';

export default function ProductListItem({
  id,
  name,
  number,
  url,
  onDeleteClick,
}) {
  return (
    <>
      <ProductContainer>
        <ProductImg src={url} />
        <span>{name}</span>
      </ProductContainer>
      <OptionContainer>
        <NumberContainer>{number}</NumberContainer>
        <RemoveBtn onClick={() => onDeleteClick(id)}>
          <SvgRemove>
          <use href={sprite + '#icon-X'}></use>
          </SvgRemove>
        </RemoveBtn>
      </OptionContainer>
    </>
  );
}
