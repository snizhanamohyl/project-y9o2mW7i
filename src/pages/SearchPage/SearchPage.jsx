import { Title } from './SearchPage.styled';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { SearchDropdown } from 'components/SearchDropdown/SearchDropdown';

export default function SearchPage() {
  return (
    <>
      <Title>Search</Title>
      <SearchInput />
      <SearchDropdown />
    </>
  );
}
