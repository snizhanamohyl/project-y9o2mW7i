import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://so-yummy-backend-hg4e.onrender.com/api/';

export const addIngredient = createAsyncThunk(
  'shopping-list/add',

  async (ingredient, thunkAPI) => {
    try {
      const { data } = await axios.post('/shopping-list', ingredient);
      const { name, img, desc, measure, newId } = data;

      return { id: { name, img, desc }, measure, newId };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllShoppingList = createAsyncThunk(
  'shopping-list/getAllShopingList',

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/shopping-list');

      if (data.length === 0)
        return thunkAPI.rejectWithValue({ message: 'Shopping list is empty' });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteIngredient = createAsyncThunk(
  'shopping-list/deleteIngredient',
  async (ingredient, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/shopping-list/${ingredient}`);

      return { message: data, newId: ingredient };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
