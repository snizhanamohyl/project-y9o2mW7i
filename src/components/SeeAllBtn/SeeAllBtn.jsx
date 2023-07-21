import { SeeAllLink } from './SeeAllBtn.styled';

export default function SeeAllBtn({ category }) {
  const onClick = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth"}) 
  }
  
  return <SeeAllLink to={`/categories/${category}`} onClick={onClick}>See all</SeeAllLink>;
}
