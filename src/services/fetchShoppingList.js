import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-backend-hg4e.onrender.com/api/';

const fetchShoppingList = async () => {
  try {
    const { data } = await axios.get(`shopping-list`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchShoppingList;
