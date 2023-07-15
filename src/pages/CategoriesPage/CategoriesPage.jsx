import SharedContainer from 'components/SharedContainer/SharedContainer';
import { Title } from './CategoriesPage.style';
import Categories from 'components/Categories/Categories';

export default function CategoriesPage() {
  return (
    <SharedContainer>
      <Title>Categories</Title>
      <Categories />
    </SharedContainer>
  );
}
