import axios from 'axios';

export const addRecipe = async data => {
  return axios.post('/ownRecipes', data);
};
