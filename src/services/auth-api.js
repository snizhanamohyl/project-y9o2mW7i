
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-backend-hg4e.onrender.com/api';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

export const updateUserInfo = async credentials => {
  const { data } = await axios.patch('/auth/edit', credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};