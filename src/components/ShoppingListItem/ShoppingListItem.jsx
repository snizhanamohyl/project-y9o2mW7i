import {
  OptionContainer,
  NumberContainer,
  ProductImg,
  ProductContainer,
  RemoveBtn,
  SvgRemove, Svg
} from './ShoppingListItem.styled';
import sprite from 'assets/sprite.svg';

export default function ProductListItem({
  id,
  name,
  number,
  url,
  onDeleteClick
}) {

  return (
    <>
      <ProductContainer>
        {url? (<ProductImg src={url} />):(<Svg width={57} height={57}>
              <use href={`${sprite}#icon-icon-food`}></use>
            </Svg>)}
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
