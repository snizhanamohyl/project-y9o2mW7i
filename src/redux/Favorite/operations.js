import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yummy-backend-hg4e.onrender.com/api/';

export const getAllFavoritList = createAsyncThunk(
  'favorite/getAllFavoritList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/favorites');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addRecipeToFavorites = createAsyncThunk(
  'favorite/addRecipe',
  async (recipeData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/favorites', recipeData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRecipeFromFavorites = createAsyncThunk(
  'favorite/deleteRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/favorites/${recipeId}`);
      return { ...data, recipeId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
