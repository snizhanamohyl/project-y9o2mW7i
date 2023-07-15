import { SeeAllLink } from './SeeAllBtn.styled';

export default function SeeAllBtn({ category }) {
  return <SeeAllLink to={`/categories/${category}`}>See all</SeeAllLink>;
}
