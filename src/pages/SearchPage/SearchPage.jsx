import { MainPageTitle } from './SearchPage.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchFailed } from 'components/SearchFailed/SearchFailed';
import { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState(null);
  return (
    <>
      <MainPageTitle>Search</MainPageTitle>
      <SearchBar onSubmit={setQuery} />
      {/* {query && <Card />} */}
      {!query && <SearchFailed />}
    </>
  );
}
