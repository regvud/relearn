import React from 'react';
import { FC } from 'react';
import { IBook } from '../../types/bookType';

type Props = {
  book: IBook;
};

const BookComponent: FC<Props> = ({ book }) => {
  const { id, title, genre, author, created_at, updated_at } = book;
  return (
    <div>
      <h1>id: {id}</h1>
      <h1>title: {title}</h1>
      <h1>genre: {genre}</h1>
      <h1>author: {author}</h1>
      <h1>created_at: {created_at}</h1>
      <h1>updated_at: {updated_at}</h1>
    </div>
  );
};

export { BookComponent };
