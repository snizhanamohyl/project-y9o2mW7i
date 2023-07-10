import { SeacrhForm } from 'components/SeacrhForm/SeacrhForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';

export const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <SeacrhForm onSubmit={onSubmit} />
      <SearchTypeSelector />
    </>
  );
};
