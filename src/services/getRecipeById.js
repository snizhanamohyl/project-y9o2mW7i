import axios from 'axios';

const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`recipes/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getRecipeById;
