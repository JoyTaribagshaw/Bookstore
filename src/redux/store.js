import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './categories/categoriesSlice';
import { booksSlice } from './books/booksSlice';

export default configureStore({
  reducer: {
    books: booksSlice,
    category: categoriesSlice,
  },
});
