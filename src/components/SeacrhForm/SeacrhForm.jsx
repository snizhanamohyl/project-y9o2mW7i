import React from 'react';
import { Button, Form, Input } from './SeacrhForm.styled';

export const SeacrhForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target[0].value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input id="search" placeholder="Type your request" type="text" />
      <Button type="submit">Search</Button>
    </Form>
  );
};
