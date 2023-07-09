import {
  ShoppingListHeader,
  ShoppingListItem,
  OptionNameContainer,
  ShoppingList,
  RemoveBtn,
  ShoppingListTitle
} from './ShoppingListPage.styled';
import ProductListItem from 'components/ProductListItem/ProductListItem';
import RemoveIcon from 'iconsComponents/RemoveIcon/RemoveIcon';

export default function ShoppingListPage() {
  return (
    <div>
      <ShoppingListTitle>Shopping list</ShoppingListTitle>
      <ShoppingListHeader>
        <p>Products</p>
        <OptionNameContainer>
          <span>Number</span>
          <span>Remove</span>
        </OptionNameContainer>
      </ShoppingListHeader>
      <ShoppingList>
      <ShoppingListItem>
        <ProductListItem name="Cucumber" number="5">
            <RemoveBtn><RemoveIcon/></RemoveBtn>
          </ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
        <ProductListItem name="Cucumber" number="5">
            <RemoveBtn><RemoveIcon/></RemoveBtn>
          </ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
        <ProductListItem name="Cucumber" number="5">
            <RemoveBtn><RemoveIcon/></RemoveBtn>
          </ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
        <ProductListItem name="Cucumber" number="5">
            <RemoveBtn><RemoveIcon/></RemoveBtn>
          </ProductListItem>
        </ShoppingListItem>
      </ShoppingList>

    </div>
  );
}
