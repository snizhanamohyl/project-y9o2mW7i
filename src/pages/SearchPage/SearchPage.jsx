import SharedContainer from 'components/SharedContainer/SharedContainer';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import { Section, MainPageTitle } from './SearchPage.styled';

export default function SearchPage() {
  return (
    <SharedContainer>
      <Section>
        <MainPageTitle>Search</MainPageTitle>
        <SearchBar />
        <SearchedRecipesList />
      </Section>
    </SharedContainer>
  );
}
