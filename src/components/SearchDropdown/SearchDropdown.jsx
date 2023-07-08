import { useState } from 'react';
import { Formik } from 'formik';
import { Select, Label, Wrapper } from './SearchDropdown.styled';

export const SearchDropdown = () => {
  const [current, setCurrent] = useState('title');
  const handleChange = e => setCurrent(e.target.value);

  return (
    <Wrapper>
      <Label>Search by:</Label>
      <Formik>
        <Select
          as="select"
          name="searchBy"
          value={current}
          onChange={handleChange}
        >
          <option value="title">Title</option>
          <option value="ingredients">Ingredients</option>
        </Select>
      </Formik>
    </Wrapper>
  );
};
