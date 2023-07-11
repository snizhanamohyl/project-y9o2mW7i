import { MenuItem } from '@mui/material';
import { Label, Menu, Wrapper } from './SearchTypeSelector.styled';

export default function SearchTypeSelector({ onChange, type }) {
  const menuProps = {
    sx: {
      display: 'flex',
      width: '198px',
      padding: '14px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '8px',
      backgroundColor: 'var(--input-bg-color)',
      '& div': { boxShadow: 'none' },
      '& li': {
        color: 'var(--black)',
        opacity: '0.5',
      },
    },
  };

  return (
    <Wrapper>
      <Label>Search by:</Label>
      <Menu
        value={type ? type : 'query'}
        onChange={onChange}
        MenuProps={menuProps}
      >
        <MenuItem value="query">Title</MenuItem>
        <MenuItem value="ingredient">Ingredients</MenuItem>
      </Menu>
    </Wrapper>
  );
}
