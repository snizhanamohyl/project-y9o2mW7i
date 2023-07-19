import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Button, Form, Input } from './SearchForm.styled';
import useWindowWidth from 'hooks/useWindowWidth';

export default function SearchForm({ onSubmit, query, isLoading }) {
  const width = useWindowWidth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('/search');

  const inputBgColor = width < 768 ? 'var(--card-title-bg)' : 'var(--search-input-bg)';

  const submitFromMain = e => {
    e.preventDefault();
    const request = e.target[0].value;
    if (!request || request === '')
      return console.log('Request cannot be emtpy');
    navigate(`/search?type=query&query=${request}`);
  };

  return (
    <Form $inputBgColor={inputBgColor}
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
