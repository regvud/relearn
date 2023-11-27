import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../types/bookType';
import { bookService } from '../../services/bookService';
import { AxiosError } from 'axios';

interface BookState {
  books: IBook[];
}

const initialState: BookState = {
  books: [],
};

const getBooks = createAsyncThunk<IBook[], void>(
  'bookSlice/getBooks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await bookService.getAll();
      return data;
    } catch (e) {
      const err = e as AxiosError;
      rejectWithValue(err.response.data);
    }
  }
);

const postBook = createAsyncThunk<void, IBook>(
  'bookSlice/postBook',
  async (book, { rejectWithValue, dispatch }) => {
    try {
      await bookService.postBook(book);
      await dispatch(bookActions.getBooks());
    } catch (e) {
      const err = e as AxiosError;
      rejectWithValue(err.response.data);
    }
  }
);

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    }),
});

const { reducer: BookReducer, actions } = bookSlice;

const bookActions = {
  ...actions,
  getBooks,
  postBook,
};

export { BookReducer, bookActions };
