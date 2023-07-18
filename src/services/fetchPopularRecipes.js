import axios from 'axios';

export const fetchPopularRecipes = async data => {
  try {
    const response = await axios.get(
      'https://so-yummy-backend-hg4e.onrender.com/api/recipes/popular-recipe',
      data
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
