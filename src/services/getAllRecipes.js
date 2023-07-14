import axios from 'axios';

const BASE_URL = 'https://so-yummy-backend-hg4e.onrender.com/api/recipes/main-page';
const storage = JSON.parse(localStorage.getItem('persist:auth'));
const { token } = storage;

async function getAllRecipes(limit = 1) {
  try {
    const response = await axios.get(`${BASE_URL}?limit=${limit}&page=1`, {
      headers: {
        'Authorization': `Bearer ${token.slice(1, -1)}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getAllRecipes;
