import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://so-yummy-backend-hg4e.onrender.com/api'; 
// const API_BASE_URL = 'https://64a8b750dca581464b85f54e.mockapi.io/recipes'

export const getAllFavoritList = createAsyncThunk(
  'favorite/getAllFavoritList',
  async (_, { rejectWithValue }) => {
    try {

      const { data } = await axios.get(`${API_BASE_URL}/favorites`);
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

        const { data } = await axios.post(`${API_BASE_URL}/favorites`, recipeData);
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

        const { data } = await axios.delete(`${API_BASE_URL}/favorites/${recipeId}`);
        return data;

      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );