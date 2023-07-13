import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-backend-hg4e.onrender.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const searchProducts = async (type, query) => {
  const storage = localStorage.getItem('persist:auth');
  const parsedStorage = JSON.parse(storage);
  const persistToken = parsedStorage.token.replace(/"/g, '');

  if (parsedStorage.token === null) {
    return console.log('No token');
  }
  token.set(persistToken);

  try {
    const requestType = type === 'query' ? 'search' : 'search/ingredients';
    const { data } = await axios.get(`/${requestType}?keyword=${query}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default searchProducts;
