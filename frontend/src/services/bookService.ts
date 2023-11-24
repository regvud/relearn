import { urls } from '../constants/urls';
import { IBook } from '../types/bookType';
import { apiService } from './apiService';

const bookService = {
  getAll: () => apiService.get<IBook[]>(urls.books.base),
};

export { bookService };
