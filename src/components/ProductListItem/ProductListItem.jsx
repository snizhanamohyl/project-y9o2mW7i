import {
  OptionContainer,
  NumberContainer,
  ProductImg,
  ProductContainer,
  RemoveBtn
} from './ProductListItem.styled';
import RemoveIcon from 'iconsComponents/RemoveIcon/RemoveIcon';

export default function ProductListItem({id, name, number, url, onDeleteClick}) {
  return (
    <>
        <ProductContainer>
        <ProductImg src={url}/>
        <span>{name}</span>
        </ProductContainer>
        <OptionContainer>
        <NumberContainer>{number}</NumberContainer>
        <RemoveBtn onClick={() => onDeleteClick(id)}>
              <RemoveIcon />
            </RemoveBtn>
        </OptionContainer>
    </>
  );
}
