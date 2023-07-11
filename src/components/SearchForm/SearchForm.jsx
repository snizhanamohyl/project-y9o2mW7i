import React from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { searchByQuery } from 'redux/search/operations';
import { Button, Form, Input } from './SearchForm.styled';

export default function SearchForm() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('/search');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    if (query === '') return console.log('Request cannot be empty');
    dispatch(searchByQuery(query));
  };

  return (
    <Form onSubmit={handleSubmit} issearchpage={isSearchPage.toString()}>
      <Input id="search" placeholder="Enter the text" type="text" />
      <Button type="submit" issearchpage={isSearchPage.toString()}>
        Search
      </Button>
    </Form>
  );
}
