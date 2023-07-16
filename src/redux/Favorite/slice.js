import { createSlice } from '@reduxjs/toolkit';
import { addRecipeToFavorites, deleteRecipeFromFavorites } from './fetch'

const handlePending = (state) => {
    state.isLoading = true;
};
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
      recipeList: [],
      isLoading: false,
      error: null,
    },
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
    },
  });
  
  export default favoriteSlice.reducer;