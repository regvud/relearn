import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../types/bookType';

interface BookState {
  books: IBook[];
}

const initialState: BookState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {},
  extraReducers: {},
});

const { reducer: BookReducer, ...actions } = bookSlice;

export { bookSlice };
