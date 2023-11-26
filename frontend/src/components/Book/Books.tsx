import React, { useEffect, useState } from 'react';
import { bookService } from '../../services/bookService';
import { IBook } from '../../types/bookType';
import { BookComponent } from './BookComponent';

const Books = () => {
  const [books, setData] = useState<IBook[]>([]);
  useEffect(() => {
    bookService.getAll().then(({ data }) => setData(data));
  }, []);

  console.log(books);

  return (
    <div>
      {books?.map((book) => (
        <BookComponent book={book} key={book.id} />
      ))}
    </div>
  );
};

export default Books;
