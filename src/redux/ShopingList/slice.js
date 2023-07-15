// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import {
//   getAllShopingList,
//   deleteIngredient,
//   addIngredient,
// } from './operations';
// import { initialState } from './initial-state';

// const defaultStatus = {
//   pending: 'pending',
//   fulfilled: 'fulfilled',
//   rejected: 'rejected',
// };

// const customArr = [getAllShopingList, deleteIngredient, addIngredient];

// const fn = status => customArr.map(el => el[status]);

// const handlePending = state => {
//   state.status = defaultStatus.pending;
// };

// const handleFulfilled = state => {
//   state.status = defaultStatus.fulfilled;
//   state.error = '';
// };
// const handleFulfilledGet = (state, { payload }) => {
//   state.shopingList.ingredients = payload;
// };
// const handleFulfilledDelete = (state, { payload }) => {
//   state.shopingList.ingredients = state.shopingList.ingredients.filter(
//     el => el.id !== payload.id
//   );
// };
// const handleFulfilledCreate = (state, action) => {
//   state.shopingList.ingredients.push(action.payload);
// };
// const handleRejected = (state, { payload }) => {
//   state.status = defaultStatus.rejected;
//   state.error = payload;
// };

// const ingredientsSlice = createSlice({
//   name: 'shopingList',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(getAllShopingList.fulfilled, handleFulfilledGet)
//       .addCase(deleteIngredient.fulfilled, handleFulfilledDelete)
//       .addCase(addIngredient.fulfilled, handleFulfilledCreate)
//       // .addMatcher(isAnyOf(...fn(defaultStatus.fulfilled)), handleFulfilled)
//       .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
//       .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
//   },
// });

// export const ingredientsReducer = ingredientsSlice.reducer;

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
      state.shoppingList.ingredients = action.payload;
    },
    [addIngredient.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.shoppingList.ingredients.push(action.payload);
    },
    [deleteIngredient.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.shoppingList.ingredients.findIndex(
        ingredient => ingredient.newId === action.payload.newId
      );
      state.shoppingList.splice(index, 1);
    },
    [logout.fulfilled]: state => {
      state.shoppingList.ingredients = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
