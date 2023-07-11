import { useSearchParams } from 'react-router-dom';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';
import SearchForm from 'components/SearchForm/SearchForm';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchConfig = Object.fromEntries([...searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    if (query === '') return console.log('Request cannot be empty');
    setSearchParams({ ...searchConfig, query });
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
}
