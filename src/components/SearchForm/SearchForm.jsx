import React from 'react';
import { useLocation } from 'react-router';
import { Button, Form, Input } from './SearchForm.styled';

export default function SearchForm({ onSubmit, query }) {
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('/search');

  return (
    <Form onSubmit={onSubmit} issearchpage={isSearchPage.toString()}>
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
