import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Button, Form, Input } from './SearchForm.styled';

export default function SearchForm({ onSubmit, query }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('/search');

  const submitFromMain = e => {
    e.preventDefault();
    navigate(`/search?type=query&query=${e.target[0].value}`);
  };

  return (
    <Form
      onSubmit={isSearchPage ? onSubmit : submitFromMain}
      issearchpage={isSearchPage.toString()}
    >
      <Input
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
