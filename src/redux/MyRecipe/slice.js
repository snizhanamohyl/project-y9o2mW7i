import { createSlice } from '@reduxjs/toolkit';
import { getAllMyRecipeList, deleteRecipeFromMyRecipe } from './operations';
import { initialState } from './initialState';
import { logout } from 'redux/auth/auth-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const MyRecipeSlice = createSlice({
  name: 'myRecipe',
  initialState: initialState,
  extraReducers: {
    [deleteRecipeFromMyRecipe.pending]: handlePending,
    [deleteRecipeFromMyRecipe.rejected]: handleRejected,
    [deleteRecipeFromMyRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.myRecipeList.findIndex(
        recipe => recipe._id === action.payload._id
      );
      state.myRecipeList.splice(index, 1);
    },
    [getAllMyRecipeList.pending]: handlePending,
    [getAllMyRecipeList.rejected]: handleRejected,
    [getAllMyRecipeList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.myRecipeList = action.payload;
    },
    [logout.fulfilled]: state => {
      state.myRecipeList = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const myRecipeReducer = MyRecipeSlice.reducer;
