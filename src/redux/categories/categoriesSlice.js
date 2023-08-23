import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    value: [],
  },
  reducers: {
    checkStatus: (state, action) => {
      state.value = action.payload === 'Under construction'
        ? 'Under construction'
        : state.value;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice;
