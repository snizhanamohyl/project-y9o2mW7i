import React, { useState } from 'react';
import { Button, Form, Input } from './SearchForm.styled';
import { useLocation } from 'react-router';

export default function SearchForm() {
  const [query, setQuery] = useState('');

  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('/search');

  const handleChangeQueue = e => setQuery(e.target.value);
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Form onSubmit={handleSubmit} issearchpage={isSearchPage.toString()}>
      <Input
        id="search"
        name="search"
        placeholder="Enter the text"
        type="text"
        onChange={handleChangeQueue}
        value={query}
      />
      <Button type="submit" issearchpage={isSearchPage.toString()}>Search</Button>
    </Form>
  );
};