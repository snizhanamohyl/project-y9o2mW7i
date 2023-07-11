import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const searchByQuery = createAsyncThunk(
  'auth/refresh',
  async (query, thunkAPI) => {
    const tempToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWQyM2M5MzEzZGZhMDhhZjc4MjRkYyIsImlhdCI6MTY4OTA2ODQ4OSwiZXhwIjoxNjg5MTQ3Njg5fQ.XapGFI6xC-6_S1ZVbCyaeEFpL3Mut3bAnCJm0qYPfRE';

    const state = thunkAPI.getState();
    const type = state.search.type;
    const requestType = type === 'query' ? 'search' : 'ingredients';

    // const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue();
    // }
    // token.set(persistedToken);

    token.set(tempToken);

    try {
      const { data } = await axios.get(`/${requestType}?keyword=${query}`);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const userThunks = [searchByQuery];

export const getMathcedThunk = status => userThunks.map(el => el[status]);
