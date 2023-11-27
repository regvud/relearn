import React, { useEffect, useState } from 'react';
import { IBook } from '../../types/bookType';
import { BookComponent } from './BookComponent';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { bookActions } from '../../redux/slices/bookSlice';

const Books = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.BookReducer);

  useEffect(() => {
    dispatch(bookActions.getBooks());
  }, [dispatch]);
  console.log('render');

  return (
    <div>
      {books?.map((book) => (
        <BookComponent book={book} key={book.id} />
      ))}
    </div>
  );
};

export default Books;
