import {
  ShoppingListHeader,
  ShoppingListItem,
  OptionNameContainer,
  ShoppingList,
  ShoppingListTitle,
} from './ShoppingListPage.styled';
import ProductListItem from 'components/ShoppingListItem/ShoppingListItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import * as shoppingListOperations from 'redux/ShopingList/operations';
import { getShoppingList } from 'redux/ShopingList/selectors';
import fetchShoppingList from 'services/fetchShoppingList';

export default function ShoppingListPage() {
  const [products, setProducts] = useState();

  const dispatch = useDispatch();

  const ingredients = useSelector(getShoppingList);

  useEffect(() => {
    if (ingredients !== []) {
      dispatch(shoppingListOperations.getAllShoppingList());
      setProducts(ingredients)
    }
    fetchShoppingList()
      .then((data) => {
        setProducts(data);
      })
      .catch(error => console.log(error.message));
  }, [ingredients, dispatch]);

  // const onDeleteClick = (id) => {
  //   dispatch(shoppingListOperations.deleteIngredient(id));
  // };

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
          {products &&
          products.map(product => {
            return (
              <ShoppingListItem key={product._id}>
                <ProductListItem
                  name={product.name}
                  number={product.measure}
                  id={product._id}
                  url={product.img}
                >
                </ProductListItem>
              </ShoppingListItem>
            );
          })}
        </ShoppingList>
      </div>
    </SharedContainer>
  );
}
