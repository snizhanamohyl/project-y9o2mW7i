import {
  MainTitle,
  ContainerTimePrepare,
  RecipeDescription,
  SectionHero,
} from './Hero.styled';
import sprite from '../../../assets/sprite.svg';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import { useEffect, useState } from 'react';
import BtnAddToFavorite from '../BtnAddToFavorite/BtnAddToFavorite';

export default function RecipePageHero({ recipe, id }) {
  const { title, description, time } = recipe;
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);

  const onHandleClick = () => {
    setIsAddedToFavorite(prev => !prev);

    if (isAddedToFavorite) {
      localStorage.removeItem(`${id}`);
    } else {
      localStorage.setItem(`${id}`, 'isAddedToFavorite');
    }
  };

  useEffect(() => {
    setIsAddedToFavorite(localStorage.getItem(`${id}`) || false);
  }, [id]);

  return (
    <SectionHero>
      <SharedContainer>
        <MainTitle>{title}</MainTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <BtnAddToFavorite
          onClick={onHandleClick}
          id={id}
          isAddedToFavorite={isAddedToFavorite}
        />

        <ContainerTimePrepare>
          <svg width={14} height={14}>
            <use href={`${sprite}#icon-clock`}></use>
          </svg>
          <span>{time} min</span>
        </ContainerTimePrepare>
      </SharedContainer>
    </SectionHero>
  );
}
