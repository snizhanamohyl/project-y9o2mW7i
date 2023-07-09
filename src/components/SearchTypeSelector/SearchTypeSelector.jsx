import { useState } from 'react';
import { Select, Label, Wrapper } from './SearchTypeSelector.styled';

export const SearchTypeSelector = () => {
  const [current, setCurrent] = useState('query');
  const handleChange = e => setCurrent(e.target.value);

  return (
    <Wrapper>
      <Label>Search by:</Label>
      <Select
        as="select"
        name="searchBy"
        value={current}
        onChange={handleChange}
      >
        <option value="query">Title</option>
        <option value="ingredient">Ingredients</option>
      </Select>
    </Wrapper>
  );
};
