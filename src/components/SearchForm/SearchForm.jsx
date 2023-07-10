import React from 'react';
import { Button, Form, Input } from './SearchForm.styled';

export default function SearchForm({ onType }){
  const handleChangeQueue = e => onType(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="search"
        name="search"
        placeholder="Type your request"
        type="text"
        onChange={handleChangeQueue}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};