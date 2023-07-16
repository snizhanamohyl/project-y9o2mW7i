import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://so-yummy-backend-hg4e.onrender.com/api'; 

const addRecipe = async (recipeData) => {
  const response = await axios.post(`${API_BASE_URL}/recipes`, recipeData);
  return response.data;
};

const deleteRecipe = async (recipeId) => {
  await axios.delete(`${API_BASE_URL}/recipes/${recipeId}`);
  return recipeId;
};

export const addRecipeToFavorites = createAsyncThunk(
    'favorite/addRecipe',
    async (recipeData, { rejectWithValue }) => {
      try {
        const response = await addRecipe(recipeData);
        return response; 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteRecipeFromFavorites = createAsyncThunk(
    'favorite/deleteRecipe',
    async (recipeId, { rejectWithValue }) => {
      try {
        await deleteRecipe(recipeId);
        return recipeId; 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );