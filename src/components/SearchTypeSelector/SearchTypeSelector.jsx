import { useState } from 'react';
import { MenuItem } from '@mui/material';
import { Label, Menu, Wrapper } from './SearchTypeSelector.styled';

export const SearchTypeSelector = () => {
  const [currentType, setCurrentType] = useState('query');
  const handleChange = e => setCurrentType(e.target.value);

  const menuProps = {
    sx: {
      display: 'flex',
      width: '198px',
      padding: '14px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '8px',
      '& div': { boxShadow: 'none', backgroundColor: 'transparent' },
      '& li': {
        color: 'var(--black)',
        opacity: '0.5',
        '&:hover, &:focus, &:active': {
          backgroundColor: 'inherit !important',
        },
      },
    },
  };

  return (
    <Wrapper>
      <Label>Search by:</Label>
      <Menu
        id="searchBy"
        value={currentType}
        onChange={handleChange}
        MenuProps={menuProps}
      >
        <MenuItem value="query">Title</MenuItem>
        <MenuItem value="ingredient">Ingredients</MenuItem>
      </Menu>
    </Wrapper>
  );
};
