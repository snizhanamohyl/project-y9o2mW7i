import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state';

const toggleSlice = createSlice({
  name: 'click',
  initialState: initialState,
  reducers: {
    toggleOn: (state = initialState) => {
      state.active = true;
    },
    toggleOff: (state = initialState) => {
      state.active = false;
    },
    toggleRevers: (state = initialState) => {
      state.active = !state.active;
    },
  },
});
export const { toggleOn, toggleOff, toggleRevers } = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;
