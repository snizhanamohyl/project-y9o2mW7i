import React from 'react';
import MyRecipes from '../../components/MyRecipes/MyRecipes';
import SharedContainer from '../../components/SharedContainer/SharedContainer';


const MyRecipesPage = () => {
  return (
            <SharedContainer isBg>
                <MyRecipes />
            </SharedContainer>
  );
};

export default MyRecipesPage;



