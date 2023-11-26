import React from 'react';
// import { Outlet } from 'react-router-dom';
import BookForm from '../components/Book/BookForm';
import Books from '../components/Book/Books';

const MainLayout = () => {
  return (
    <div>
      <BookForm />
      <Books />
      {/* <Outlet /> */}
    </div>
  );
};

export default MainLayout;
