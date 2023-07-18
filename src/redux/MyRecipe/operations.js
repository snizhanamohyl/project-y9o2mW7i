import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yummy-backend-hg4e.onrender.com/api/';

export const getAllMyRecipeList = createAsyncThunk(
  'myRecipe/getAllRecipeList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/ownRecipes');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRecipeFromMyRecipe = createAsyncThunk(
  'myRecipe/deleteMyRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/ownRecipes/${recipeId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
