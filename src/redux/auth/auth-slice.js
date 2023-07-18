import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  logout,
  refreshUser,
  register,
  updateUser,
} from './auth-operations';
import { initialState } from './initial-state';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.resetForm = true;
      state.serverError = '';
      state.serverErrorStatus = null;
    },
    [register.rejected](state, action) {
      state.serverError =
        action.payload.data.message || 'An unexpected error occured.';
      state.isLoading = false;
      state.serverErrorStatus = action.payload.status;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.resetForm = true;
      state.serverError = '';
      state.serverErrorStatus = null;
    },
    [login.rejected](state, action) {
      state.serverError =
        action.payload.data.message || 'An unexpected error occured.';
      state.serverErrorStatus = action.payload.status;
      state.isLoading = false;
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.allowRefreshUser = action.payload;
    },
    [updateUser.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.avatarURL = action.payload.avatarURL;
    },
    [updateUser.pending](state, action) {
      state.isLoading = true;
    },
    [updateUser.rejected](state, action) {
      state.isLoading = false;
      state.serverErrorStatus = action.payload.status;
    },
  },
});

export const authReducer = authSlice.reducer;
