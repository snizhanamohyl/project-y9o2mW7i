import sprite from '../../assets/sprite.svg';
import { NavWrap, StyledLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <NavWrap>
      <StyledLink to="/categories">Categories</StyledLink>
      <StyledLink to="/add">Add recipes</StyledLink>
      <StyledLink to="/my">My recipes</StyledLink>
      <StyledLink to="/favorite">Favorites</StyledLink>
      <StyledLink to="/shopping-list">Shopping list</StyledLink>
      <StyledLink to="/search">
        <svg width="24" height="24">
          <use href={`${sprite}#icon-search`}></use>
        </svg>
      </StyledLink>
    </NavWrap>
  );
}
