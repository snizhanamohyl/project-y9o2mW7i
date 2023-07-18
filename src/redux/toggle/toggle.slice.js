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
    addId: (state, action) => {
      return action.payload;
    },
  },
});
export const { toggleOn, toggleOff, addId } = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;
