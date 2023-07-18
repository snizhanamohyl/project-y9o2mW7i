import axios from 'axios';

export const fetchIngredients = async query => {
  return axios.get('/search/ingredients', { params: { keyword: query } });
};
