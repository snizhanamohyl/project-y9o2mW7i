import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchProducts from 'services/search-api';
import EmptyPage from 'components/EmptyPage/EmptyPage';
import RecipesList from 'components/RecipesList/RecipesList';

export default function SearchedRecipesList() {
  const [items, setItems] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');
  const type = searchParams.get('type');

  useEffect(() => {
    if (!query || !type) return;
    SearchProducts(type, query)
      .then(data => {
        if (!Array.isArray(data)) return setItems([]);
        setItems(data);
      })
      .catch(err => console.log(err.message));
  }, [query, type]);

  return (
    <>
      {!items || items.length === 0 ? (
        <EmptyPage description={'Try looking for something else..'} />
      ) : (
        <RecipesList recipes={items} />
      )}
    </>
  );
}
