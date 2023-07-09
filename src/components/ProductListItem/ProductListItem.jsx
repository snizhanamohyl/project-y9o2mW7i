import {
  OptionContainer,
  NumberContainer,
  ProductImg,
  ProductContainer
} from './ProductListItem.styled';

export default function ProductListItem({children, name, number, url}) {
  return (
    <>
        <ProductContainer>
        <ProductImg src={url}/>
        <span>{name}</span>
        </ProductContainer>
        <OptionContainer>
        <NumberContainer>{number}</NumberContainer>
          {children}
        </OptionContainer>
    </>
  );
}
