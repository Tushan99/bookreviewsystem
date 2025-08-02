import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reviews';

const getReviewsForBook = (bookId) => {
  return axios.get(`${API_URL}/${bookId}`);
};

const addReview = (bookId, reviewData) => {
  return axios.post(`${API_URL}/${bookId}`, reviewData);
};

const updateReview = (reviewId, reviewData) => {
  return axios.put(`${API_URL}/${reviewId}`, reviewData);
};

const deleteReview = (reviewId) => {
  return axios.delete(`${API_URL}/${reviewId}`);
};

export default {
  getReviewsForBook,
  addReview,
  updateReview,
  deleteReview,
};