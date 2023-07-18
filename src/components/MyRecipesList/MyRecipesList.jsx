import React from 'react';
import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';


const MyRecipesList = ({ recipe, isFavorites, colorMode, uniqueKey, onDeleteClick }) => {

    return (
        <>
            {recipe.map((rec) => (
                <MyRecipeItem key={uniqueKey + rec._id} recipe={rec} isFavorites={isFavorites} colorMode={colorMode}  onDeleteClick={onDeleteClick}/>
            ))}
        </>
    );
};

export default MyRecipesList;
