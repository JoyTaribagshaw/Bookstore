import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      const { title, author, id } = action.payload;
      state.value.push({ id, title, author }); 
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.value = state.value.filter((book) => book.id !== id);
    },
  },
});

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
