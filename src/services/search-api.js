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
  // const storage = localStorage.getItem('persist:auth');
  // const parsedStorage = JSON.parse(storage);

  const tempToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWQyM2M5MzEzZGZhMDhhZjc4MjRkYyIsImlhdCI6MTY4OTE1NzAxNCwiZXhwIjoxNjg5MjQzNDE0fQ.OqcQP8tgDh-BG_AI2YRY8NTn-T8xJNwQXxOoDVVNGE0';
  const requestType = type === 'query' ? 'search' : 'ingredients';

  // if (parsedStorage.token === null) {
  //   return thunkAPI.rejectWithValue();
  // }
  // token.set(parsedStorage.token);

  token.set(tempToken);

  try {
    const { data } = await axios.get(`/${requestType}?keyword=${query}`);
    return data;
  } catch (error) {
    // console.log(error.message);
  }
};

export default searchProducts;
