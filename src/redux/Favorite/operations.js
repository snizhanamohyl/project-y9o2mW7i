import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://so-yummy-backend-hg4e.onrender.com/api'; 

export const getAllFavoritList = createAsyncThunk(
  'favorite/allRecipe',
  async (_, { rejectWithValue }) => {
    try {

      const { data } = await axios.get(`${API_BASE_URL}/recipes`);
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

        const { data } = await axios.post(`${API_BASE_URL}/recipes`, recipeData);
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

        const { data } = await axios.delete(`${API_BASE_URL}/recipes/${recipeId}`, recipeId);
        return data;

      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );