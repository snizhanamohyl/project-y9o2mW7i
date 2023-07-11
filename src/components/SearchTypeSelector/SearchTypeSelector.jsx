import { MenuItem } from '@mui/material';
import { Label, Menu, Wrapper } from './SearchTypeSelector.styled';
import { useSearchParams } from 'react-router-dom';

export const SearchTypeSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchConfig = Object.fromEntries([...searchParams]);
  const type = searchParams.get('type');
  const handleChange = e => {
    setSearchParams({ ...searchConfig, type: e.target.value });
  };

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
        id="searchBy"
        value={type ? type : 'query'}
        onChange={handleChange}
        MenuProps={menuProps}
      >
        <MenuItem value="query">Title</MenuItem>
        <MenuItem value="ingredient">Ingredients</MenuItem>
      </Menu>
    </Wrapper>
  );
};
