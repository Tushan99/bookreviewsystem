import axios from 'axios';

const API_URL = 'http://localhost:5000/api/google-books';

const searchBooks = (query) => {
  return axios.get(`${API_URL}/search?query=${query}`);
};

export default {
  searchBooks,
};