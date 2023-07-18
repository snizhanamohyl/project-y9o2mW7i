import axios from 'axios';

export const fetchMyRecipes = async () => {
  try {
    const response = await axios.get('/ownRecipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};




export const fetchDeleteMyRecipes = async (recipeId) => {
  try {
    const resp = await axios.delete(`/ownRecipes/${recipeId}`);
    const data = resp.data; 

    if (data && data._id) {
      return data._id;
    } else {
      throw new Error('ответ сервера');
    }
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}


