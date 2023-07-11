import { changeSearchType } from 'redux/search/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchType } from 'redux/selectors';
import { MenuItem } from '@mui/material';
import { Label, Menu, Wrapper } from './SearchTypeSelector.styled';

export const SearchTypeSelector = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectSearchType);
  const handleChange = e => dispatch(changeSearchType(e.target.value));

  const menuProps = {
    sx: {
      display: 'flex',
      width: '198px',
      padding: '14px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '8px',
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
        value={type}
        onChange={handleChange}
        MenuProps={menuProps}
      >
        <MenuItem value="query">Title</MenuItem>
        <MenuItem value="ingredient">Ingredients</MenuItem>
      </Menu>
    </Wrapper>
  );
};
