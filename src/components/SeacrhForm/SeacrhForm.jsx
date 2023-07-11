import React from 'react';
import { Button, Form, Input } from './SeacrhForm.styled';
import { useDispatch } from 'react-redux';
import { searchByQuery } from 'redux/search/operations';

export const SeacrhForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    if (query === '') return console.log('Request cannot be empty');
    dispatch(searchByQuery(query));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input id="search" placeholder="Enter the text" type="text" />
      <Button type="submit">Search</Button>
    </Form>
  );
};
