import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const type = searchParams.get('type');

  const handleSubmit = e => {
    e.preventDefault();
    const request = e.target[0].value;
    if (request === '') return console.log('Request cannot be empty');
    setSearchParams({ type: type ? type : 'query', query: request });
  };

  const handleChange = e => {
    setSearchParams({ query, type: e.target.value });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} query={query} />
      <SearchTypeSelector onChange={handleChange} type={type} />
    </>
  );
}
