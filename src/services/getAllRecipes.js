import axios from 'axios';

async function getAllRecipes(limit) {
  try {
    const response = await axios.get(
      `/recipes/main-page?limit=${limit}&page=1`
    );
    return response;

  } catch (error) {

    return error;
  }
}

export default getAllRecipes;
