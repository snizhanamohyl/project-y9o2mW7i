import React from 'react';
import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';

const MyRecipesList = ({ recipe, isFavorites, colorMode }) => {
  return (
    <>
      {recipe?.map(rec => (
        <MyRecipeItem
          key={rec._id.$oid}
          recipe={rec}
          isFavorites={isFavorites}
          colorMode={colorMode}
        />
      ))}
    </>
  );
};

export default MyRecipesList;
