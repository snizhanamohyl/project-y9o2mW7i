/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import useWindowWidth from 'hooks/useWindowWidth';
import SearchProducts from 'services/search-api';
import EmptyPage from 'components/EmptyPage/EmptyPage';
import RecipesList from 'components/RecipesList/RecipesList';
import { Spinner, Wrapper } from './SearchedRecipesList.styled';

export default function SearchedRecipesList({ isLoading, changeLoadingState }) {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const type = searchParams.get('type');
  const width = useWindowWidth();
  const spinnerSize = width < 768 ? 100 : 150;

  useEffect(() => {
    if (!query || !type) return setMessage('Type your request');
    changeLoadingState(true);
    SearchProducts(type, query)
      .then(data => {
        if (!Array.isArray(data)) {
          setMessage('Try looking for something else..');
          return setItems([]);
        }
        setItems(data);
      })
      .catch(err => console.log(err.message))
      .finally(() => {
        changeLoadingState(false);
      });
  }, [query, type]);

  return (
    <Wrapper>
      {isLoading ? (
        <Spinner>
          <Oval
            height={spinnerSize}
            width={spinnerSize}
            color="#fafafa"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#8BAA36"
            strokeWidth={8}
            strokeWidthSecondary={8}
          />
        </Spinner>
      ) : !items || items.length === 0 ? (
        <EmptyPage description={message} />
      ) : (
        <RecipesList recipes={items} />
      )}
    </Wrapper>
  );
}
