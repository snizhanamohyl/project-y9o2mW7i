import axios from 'axios';

const delMyrecipe = async id => {
  try {
    const response = await axios.delete(`/ownRecipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};
export default delMyrecipe;
