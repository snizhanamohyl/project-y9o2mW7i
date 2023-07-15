import { createSlice } from '@reduxjs/toolkit';
import {
  getAllShopingList,
  deleteIngredient,
  addIngredient,
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
  name: 'shopingList',
  initialState: initialState,
  extraReducers: {
    [getAllShopingList.pending]: handlePending,
    [addIngredient.pending]: handlePending,
    [deleteIngredient.pending]: handlePending,
    [getAllShopingList.rejected]: handleRejected,
    [addIngredient.rejected]: handleRejected,
    [deleteIngredient.rejected]: handleRejected,
    [getAllShopingList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.shopingList.ingredients = action.payload;
    },
    [addIngredient.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.shopingList.ingredients.push(action.payload);
    },
    [deleteIngredient.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.shopingList.ingredients.findIndex(
        ingredient => ingredient.newId === action.payload.newId
      );
      state.shopingList.splice(index, 1);
    },
    [logout.fulfilled](state) {
      state.shopingList = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
