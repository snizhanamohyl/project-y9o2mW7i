import axios from 'axios';

async function getAllRecipes(limit) {
  try {
    const response = await axios.get(
      `/recipes/main-page?limit=${limit}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getAllRecipes;
