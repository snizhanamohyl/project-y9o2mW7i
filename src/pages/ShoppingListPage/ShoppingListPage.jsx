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
import SearchFailed from 'components/EmptyPage/EmptyPage';
import PageLoader from 'components/PageLoader/PageLoader';

export default function ShoppingListPage() {

  const [isLoading, setIsLoading] = useState(false)

  const [products, setProducts] = useState([])

  const dispatch = useDispatch();

  const ingredients = useSelector(getShoppingList);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllShoppingList());
      setProducts(ingredients)
    }
    if (products.length === ingredients.length) {
      return
    }
    setIsLoading(true)
    dispatch(getAllShoppingList());
    setProducts(ingredients)
    setIsLoading(false)
  }, [dispatch, ingredients, products]);

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
          {isLoading ? <PageLoader/> : 
                    ingredients.length > 0 ?
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
                      }): <SearchFailed description="You haven't added any product yet."/>} 
          

        </ShoppingList>
      </div>
    </SharedContainer>
  );
}
