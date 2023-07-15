import { createSlice } from '@reduxjs/toolkit';
import {
  getAllShopingList,
  deleteIngredient,
  addIngredient,
} from '../ShopingList/thunk';
import { logout } from 'redux/auth/auth-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ingredientsSlice = createSlice({
  name: 'shopingList',
  initialState: {
    shopingList: [],
    isLoading: false,
    error: null,
  },
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
      state.shopingList = action.payload;
    },
    [addIngredient.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.shopingList.push(action.payload);
    },
    [deleteIngredient.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.shopingList.findIndex(
        ingredient => ingredient.id === action.payload.id
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
