import { MainPageTitle } from './SearchPage.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchFailed } from 'components/SearchFailed/SearchFailed';
import { useState } from 'react';

export default function SearchPage() {
  const [queue, setQueue] = useState(null);
  return (
    <>
      <MainPageTitle>Search</MainPageTitle>
      <SearchBar onType={setQueue} />
      {/* {queue && <Card />} */}
      {!queue && <SearchFailed />}
    </>
  );
}
