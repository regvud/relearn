import React from 'react';
import { bookService } from '../../services/bookService';
import { IBook } from '../../types/bookType';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { bookActions } from '../../redux/slices/bookSlice';

const BookForm = () => {
  const { handleSubmit, reset, register } = useForm();
  const dispatch = useAppDispatch();

  const saveBook = async (book: IBook) => {
    await dispatch(bookActions.postBook(book));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(saveBook)}>
      <input type="text" placeholder="title" {...register('title')} />
      <input type="text" placeholder="genre" {...register('genre')} />
      <input type="text" placeholder="author" {...register('author')} />
      <button>send</button>
    </form>
  );
};

export default BookForm;
