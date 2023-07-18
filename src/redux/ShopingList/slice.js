import { createSlice } from '@reduxjs/toolkit';
import {
  deleteIngredient,
  addIngredient,
  getAllShoppingList,
} from './operations';
import { logout } from 'redux/auth/auth-operations';
import { initialState } from './initial-state';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ingredientsSlice = createSlice({
  name: 'shoppingList',
  initialState: initialState,
  extraReducers: {
    [getAllShoppingList.pending]: handlePending,
    [addIngredient.pending]: handlePending,
    [deleteIngredient.pending]: handlePending,
    [getAllShoppingList.rejected]: handleRejected,
    [addIngredient.rejected]: handleRejected,
    [deleteIngredient.rejected]: handleRejected,
    [getAllShoppingList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.ingredients = action.payload;
    },
    [addIngredient.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.ingredients?.push(action.payload);
    },
    [deleteIngredient.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.ingredients.findIndex(
        ingredient => ingredient.newId === action.payload.newId
      );
      state.ingredients.splice(index, 1);
    },
    [logout.fulfilled]: state => {
      state.ingredients = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
