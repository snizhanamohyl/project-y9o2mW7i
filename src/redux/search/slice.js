import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './state';
import { getMathcedThunk } from './operations';
import { handleFulfilled, handlePending, handleRejected } from './reducers';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const searchPageSlice = createSlice({
  name: 'searchPage',
  initialState: initialState,
  reducers: {
    changeSearchType(state, action) {
      state.type = action.payload;
    },
  },
  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUS;
    builder
      .addMatcher(isAnyOf(...getMathcedThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getMathcedThunk(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...getMathcedThunk(FULFILLED)), handleFulfilled);
  },
});

export const { changeSearchType } = searchPageSlice.actions;
export const searchPageReducer = searchPageSlice.reducer;
