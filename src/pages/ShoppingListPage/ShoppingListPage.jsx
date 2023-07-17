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
import { deleteIngredient, getAllShoppingList } from 'redux/ShopingList/operations';
import { getShoppingList } from 'redux/ShopingList/selectors';

export default function ShoppingListPage() {

  const dispatch = useDispatch();

  const ingredients = useSelector(getShoppingList);

  useEffect(() => {
    dispatch(getAllShoppingList());
  }, [dispatch]);

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
          {ingredients &&
          ingredients.map(product => {
            const { _id, name, measure, newId, img} = product
            return (
              <ShoppingListItem key={_id}>
                <ProductListItem
                  name={name}
                  number={measure}
                  id={newId}
                  url={img}
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
