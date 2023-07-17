import { BtnAddFavorite } from './BtnAddToFavorite.styled';

export default function BtnAddToFavorite({ isAddedToFavorite, id, onClick }) {
  return (
    <BtnAddFavorite
      type="button"
      id={id}
      onClick={onClick}
      $isAddedToFavorite={isAddedToFavorite}
    >
      {isAddedToFavorite
        ? 'Remove from favorite recipes'
        : 'Add to favorite recipes'}
    </BtnAddFavorite>
  );
}
