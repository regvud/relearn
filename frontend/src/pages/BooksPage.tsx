import React from 'react';
import Books from '../components/Book/Books';
import BookForm from '../components/Book/BookForm';

const BooksPage = () => {
  return (
    <div>
      <Books />
      <BookForm />
    </div>
  );
};

export { BooksPage };
