import axios from 'axios';

const fetchMyRecipes = async () => {
  try {
    const response = await axios.get('/ownRecipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};

export default fetchMyRecipes;
