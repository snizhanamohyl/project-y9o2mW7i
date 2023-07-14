import {
  ShoppingListHeader,
  ShoppingListItem,
  OptionNameContainer,
  ShoppingList,
  ShoppingListTitle,
} from './ShoppingListPage.styled';
import ProductListItem from 'components/ShoppingListItem/ShoppingListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SharedContainer from 'components/SharedContainer/SharedContainer';

export default function ShoppingListPage() {
  // const dispatch = useDispatch();

  // const items = useSelector();

  //   useEffect(() => {
  //     dispatch(...);
  //   },[dispatch])

  //   const onDeleteClick = id => {
  //     dispatch(...(id));
  //  }



//   const [items, setItems] = useState([])

//   useEffect(() => {

//   })

//   onDeleteClick = (id) => {
//     setState(prevState => ({
//       items: prevState.items.filter(item => item.id !== id),
//     }))
// }

  return (
    <SharedContainer>
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
        {/* {items &&
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
          })} */}
        <ShoppingListItem>
          <ProductListItem name="Cucumber" number="5"></ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
          <ProductListItem name="Cucumber" number="5"></ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
          <ProductListItem name="Cucumber" number="5"></ProductListItem>
        </ShoppingListItem>
        <ShoppingListItem>
          <ProductListItem name="Cucumber" number="5"></ProductListItem>
        </ShoppingListItem>
      </ShoppingList>
    </div>
    </SharedContainer>
  );
}
