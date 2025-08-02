import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

const getBooks = () => {
  return axios.get(API_URL);
};

const getBook = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const createBook = (book) => {
  return axios.post(API_URL, book);
};

const addReview = (bookId, review) => {
  return axios.post(`http://localhost:5000/api/reviews/${bookId}`, review);
};

const deleteReview = (reviewId) => {
  return axios.delete(`http://localhost:5000/api/reviews/${reviewId}`);
};

const getReviewsForBook = (bookId) => {
  return axios.get(`http://localhost:5000/api/reviews/${bookId}`);
};

export default {
  getBooks,
  getBook,
  createBook,
  addReview,
  deleteReview,
  getReviewsForBook
};
