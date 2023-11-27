import React from 'react';
import { FC } from 'react';
import { IBook } from '../../types/bookType';

type Props = {
  book: IBook;
};

const BookComponent: FC<Props> = ({ book }) => {
  const { id, title, genre, author } = book;
  return (
    <div style={{ border: '1px solid black' }}>
      <h1>id: {id}</h1>
      <h1>title: {title}</h1>
      <h1>genre: {genre}</h1>
      <h1>author: {author}</h1>
    </div>
  );
};

export { BookComponent };
