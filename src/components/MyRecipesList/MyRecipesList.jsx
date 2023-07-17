import React from 'react';
import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';


const MyRecipesList = ({ recipe, isFavorites }) => {

    return (
        <>
            {recipe.map((rec) => (
                <MyRecipeItem key={rec._id} recipe={rec} isFavorites={isFavorites}/>
            ))}
        </>
    );
};

export default MyRecipesList;
