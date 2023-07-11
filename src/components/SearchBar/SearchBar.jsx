import { useSearchParams } from 'react-router-dom';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';
import SearchForm from 'components/SearchForm/SearchForm';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchConfig = Object.fromEntries([...searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    if (query === '') return console.log('Request cannot be empty');
    setSearchParams({ ...searchConfig, query: query });
  };

  const handleChange = e => {
    setSearchParams({ ...searchConfig, type: e.target.value });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} query={searchParams.get('query')} />
      <SearchTypeSelector
        onChange={handleChange}
        type={searchParams.get('type')}
      />
    </>
  );
};
