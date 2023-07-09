import { SeacrhForm } from 'components/SeacrhForm/SeacrhForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';

export const SearchBar = ({ onType }) => {
  return (
    <>
      <SeacrhForm onType={onType} />
      <SearchTypeSelector />
    </>
  );
};
