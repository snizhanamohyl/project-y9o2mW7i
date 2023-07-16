import axios from 'axios';

export const addRecipe = async data => {
  try {
    const response = await axios.post(
      'https://so-yummy-backend-hg4e.onrender.com/api/ownRecipes',
      data
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
