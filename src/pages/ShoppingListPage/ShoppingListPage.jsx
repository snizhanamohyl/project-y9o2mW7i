import {
  ShoppingListHeader,
  ShoppingListItem,
  OptionContainer,
  OptionNameContainer,
  ShoppingList,
  NumberContainer,
  RemoveBtn,
} from './ShoppingListPage.styled';
import ProductListItem from 'components/ProductListItem/ProductListItem';

export default function ShoppingListPage() {
  return (
    <div>
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
            <RemoveBtn>X</RemoveBtn>
          </ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
        <ProductListItem name="Cucumber" number="5">
            <RemoveBtn>X</RemoveBtn>
          </ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
        <ProductListItem name="Cucumber" number="5">
            <RemoveBtn>X</RemoveBtn>
          </ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
        <ProductListItem name="Cucumber" number="5">
            <RemoveBtn>X</RemoveBtn>
          </ProductListItem>
        </ShoppingListItem>
      </ShoppingList>

    </div>
  );
}
