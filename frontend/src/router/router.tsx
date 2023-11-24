import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { BooksPage } from '../pages/BooksPage';

export const router = createBrowserRouter([
  {
    path: '',
    element: MainLayout(),
    children: [
      {
        index: true,
        element: BooksPage(),
      },
    ],
  },
]);
