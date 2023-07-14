import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Oval } from 'react-loader-spinner';
import { getIsLoading } from 'redux/auth/selectors';
import useWindowWidth from 'hooks/useWindowWidth';
import { Loader } from 'pages/SigninPage/SigninPage.styled';
import { Button, Form, Input } from './SearchForm.styled';

export default function SearchForm({ onSubmit, query }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes('/search');
  const isLoading = useSelector(getIsLoading);
  const width = useWindowWidth();
  const spinnerSize = width < 768 ? 18 : 20;

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
      {isLoading ? (
        <Button type="submit" disabled issearchpage={isSearchPage.toString()}>
          Search
          <Loader>
            <Oval
              height={spinnerSize}
              width={spinnerSize}
              color="#fafafa"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#fffff"
              strokeWidth={8}
              strokeWidthSecondary={8}
            />
          </Loader>
        </Button>
      ) : (
        <Button type="submit" issearchpage={isSearchPage.toString()}>
          Search
        </Button>
      )}
    </Form>
  );
}
