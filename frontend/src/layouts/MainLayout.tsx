import React from 'react';
import BookForm from '../components/Book/BookForm';
import Books from '../components/Book/Books';
import { BooksPage } from '../pages/BooksPage';

const MainLayout = () => {
  return (
    <div>
      <BooksPage />
    </div>
  );
};

export default MainLayout;
