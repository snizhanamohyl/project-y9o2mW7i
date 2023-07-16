import { createSlice } from '@reduxjs/toolkit';
import { addRecipeToFavorites, deleteRecipeFromFavorites, getAllFavoritList } from './operations'
import { logout } from 'redux/auth/auth-operations';
import { initialState } from './initialState';

const handlePending = (state) => {
    state.isLoading = true;
};
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    extraReducers: {
      [addRecipeToFavorites.pending]: handlePending,
      [addRecipeToFavorites.rejected]: handleRejected,
      [addRecipeToFavorites.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.recipeList.push(action.payload);
      },
      [deleteRecipeFromFavorites.pending]: handlePending,
      [deleteRecipeFromFavorites.rejected]: handleRejected,
      [deleteRecipeFromFavorites.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.recipeList.findIndex((recipe) => recipe.id === action.payload);
        state.recipeList.splice(index, 1);
      },
      [getAllFavoritList.pending]: handlePending,
      [getAllFavoritList.rejected]: handleRejected,
      [getAllFavoritList.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipeList = action.payload;
      },
      [logout.fulfilled]: (state) => {
        state.recipeList = [];
        state.error = null;
        state.isLoading = false;
      },
    },
  });
  

  export const favoriteReducer = favoriteSlice.reducer;