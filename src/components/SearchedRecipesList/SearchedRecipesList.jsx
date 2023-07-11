import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchFailed } from 'components/SearchFailed/SearchFailed';
import { searchProducts } from 'services/search-api';

export const SearchedRecipesList = () => {
  const [items, setItems] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');
  const type = searchParams.get('type');

  useEffect(() => {
    if (!query || !type) return;
    searchProducts(type, query).then(data => setItems(data));
  }, [query, type]);

  return (
    <>
      {!items || items.length === 0 ? (
        <SearchFailed />
      ) : (
        <ul>
          {items.map(({ _id, title }) => (
            <li key={_id}>{title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
