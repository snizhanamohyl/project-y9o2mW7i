import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import { Container, MainPageTitle } from './SearchPage.styled';

export default function SearchPage() {
  return (
    <Container>
      <MainPageTitle>Search</MainPageTitle>
      <SearchBar />
      <SearchedRecipesList />
    </Container>
  );
}
