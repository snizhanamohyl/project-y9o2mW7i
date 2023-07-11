import {
  ShoppingListHeader,
  ShoppingListItem,
  OptionNameContainer,
  ShoppingList,
  ShoppingListTitle,
} from './ShoppingListPage.styled';
import ProductListItem from 'pages/ShoppingListPage/ShoppingListItem';
import { useDispatch, useSelector } from "react-redux";

export default function ShoppingListPage() {

  // const dispatch = useDispatch();

  // const items = useSelector();

//   useEffect(() => {
//     dispatch(...);
//   },[dispatch])

//   const onDeleteClick = id => {
//     dispatch(...(id));
//  }

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
                  number={item.measure}
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

/* <ShoppingListItem>
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
</ShoppingListItem> */