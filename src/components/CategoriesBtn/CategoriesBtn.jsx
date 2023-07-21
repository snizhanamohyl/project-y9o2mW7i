import { BtnCategories } from './CategoriesBtn.styled';

export default function CategoriesBtn() {
  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"}) 
  }

  return <BtnCategories to="/categories" onClick={onClick}>Other categories</BtnCategories>;
}
