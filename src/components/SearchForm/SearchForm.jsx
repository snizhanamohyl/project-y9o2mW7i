import React from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { searchByQuery } from 'redux/search/operations';
import { Button, Form, Input } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('/search');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchConfig = Object.fromEntries([...searchParams]);
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    if (query === '') return console.log('Request cannot be empty');
    setSearchParams({ ...searchConfig, query: query });
    dispatch(searchByQuery(query));
  };

  return (
    <Form onSubmit={handleSubmit} issearchpage={isSearchPage.toString()}>
      <Input
        id="search"
        placeholder="Enter the text"
        type="text"
        defaultValue={query ? query : ''}
      />
      <Button type="submit" issearchpage={isSearchPage.toString()}>
        Search
      </Button>
    </Form>
  );
}
