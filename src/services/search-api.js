import axios from 'axios';

const searchProducts = async (type, query) => {
  try {
    const requestType = type === 'query' ? 'search' : 'search/byIngredients';
    const { data } = await axios.get(`/${requestType}?keyword=${query}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default searchProducts;
