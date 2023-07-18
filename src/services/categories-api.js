import axios from 'axios';

export const fetchRecipesByCategory = async categoryName => {
  try {
    const { data } = await axios.get(`recipes/category/${categoryName}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoriesList = async () => {
  try {
    const { data } = await axios.get('recipes/category-list');
    return data;
  } catch (error) {
    console.log(error);
  }
};
