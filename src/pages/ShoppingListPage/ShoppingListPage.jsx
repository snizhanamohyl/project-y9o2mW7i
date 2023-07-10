import {
  ShoppingListHeader,
  ShoppingListItem,
  OptionNameContainer,
  ShoppingList,
  ShoppingListTitle,
} from './ShoppingListPage.styled';
import ProductListItem from 'components/ProductListItem/ProductListItem';
import { useState } from 'react';

export default function ShoppingListPage() {
  const [items, setItems] = useState([]);

  const onDeleteClick = id => {
    setItems(state => state.filter(item => item.id !== id));
  };

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
        {items &&
          items.map(item => {
            return (
              <ShoppingListItem key={item.id}>
                <ProductListItem
                  name={item.name}
                  number={item.number}
                  id={item.id}
                  onDeleteClick={onDeleteClick}
                >
                </ProductListItem>
              </ShoppingListItem>
            );
          })}
      </ShoppingList>
    </div>
  );
}

{/* <ShoppingListItem>
<ProductListItem name="Cucumber" number="5">
</ProductListItem>
</ShoppingListItem>
<ShoppingListItem>
<ProductListItem name="Cucumber" number="5">
</ProductListItem>
</ShoppingListItem>
<ShoppingListItem>
<ProductListItem name="Cucumber" number="5">
</ProductListItem>
</ShoppingListItem>
<ShoppingListItem>
<ProductListItem name="Cucumber" number="5">
</ProductListItem>
</ShoppingListItem> */}