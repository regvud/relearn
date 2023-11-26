import React from 'react';
import { bookService } from '../../services/bookService';
import { IBook } from '../../types/bookType';
import { useForm } from 'react-hook-form';

const BookForm = () => {
  const { handleSubmit, reset, register } = useForm();

  const saveBook = async (book: IBook) => {
    await bookService.postBook(book);
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
