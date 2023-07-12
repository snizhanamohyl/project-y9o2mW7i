import RecipeCard from 'components/RecipeCard/RecipeCard';
import React from 'react';
import { List } from './RecipesList.styled';

const RecipesList = ({ cards }) => {
  console.log('cards:', cards);

  return (
    <List>
      {cards.map(({ _id, title, preview }) => (
        <RecipeCard key={_id} dish={title} img={preview}></RecipeCard>
      ))}
    </List>
  );
};

export default RecipesList;
