import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Button, Form, Input } from './SearchForm.styled';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/auth/selectors';

export default function SearchForm({ onSubmit, query }) {
  const navigate = useNavigate();
  const isLoading = useSelector(getIsLoading);
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('/search');

  const submitFromMain = e => {
    e.preventDefault();
    const request = e.target[0].value;
    if (!request || request === '')
      return console.log('Request cannot be emtpy');
    navigate(`/search?type=query&query=${request}`);
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
      <Button
        type="submit"
        issearchpage={isSearchPage.toString()}
        disabled={isLoading}
      >
        Search
      </Button>
    </Form>
  );
}
