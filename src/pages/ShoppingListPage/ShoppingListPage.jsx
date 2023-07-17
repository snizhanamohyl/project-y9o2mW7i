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
import { deleteIngredient, getAllShoppingList } from 'redux/ShopingList/operations';
import { getShoppingList } from 'redux/ShopingList/selectors';

export default function ShoppingListPage() {
  const [products, setProducts] = useState();

  const dispatch = useDispatch();

  const ingredients = useSelector(getShoppingList);

  useEffect(() => {
      dispatch(getAllShoppingList());
      setProducts(ingredients)
  },[ingredients]);

  const onDeleteClick = (id) => {
    dispatch(deleteIngredient(id));
  };

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
            const { _id, name, measure, newId, img} = product
            return (
              <ShoppingListItem key={_id}>
                <ProductListItem
                  name={name}
                  number={measure}
                  id={newId}
                  url={img}
                  setProducts={setProducts}
                  onDeleteClick={onDeleteClick}
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
