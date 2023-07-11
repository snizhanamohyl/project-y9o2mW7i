import { useSelector } from 'react-redux';
import { selectSearchedItems } from 'redux/selectors';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchFailed } from 'components/SearchFailed/SearchFailed';
import { MainPageTitle } from './SearchPage.styled';

export default function SearchPage() {
  const items = useSelector(selectSearchedItems);

  return (
    <>
      <MainPageTitle>Search</MainPageTitle>
      <SearchBar />
      {/* {items && <Card />} */}
      {!items || (items.length === 0 && <SearchFailed />)}
    </>
  );
}
