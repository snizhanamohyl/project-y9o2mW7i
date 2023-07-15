import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://so-yummy-backend-hg4e.onrender.com/api/';

export const addIngredient = createAsyncThunk(
  'shoping-list/addIngredient',

  async (ingredient, thunkAPI) => {
    try {
      const { data } = await axios.post('/shopping-list', ingredient);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllShopingList = createAsyncThunk(
  'shoping-list/getAllShopingList',

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/shopping-list');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteIngredient = createAsyncThunk(
  'shoping-list/deleteIngredient',
  async (ingredientId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/shopping-list/${ingredientId}`);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);