const express = require('express');
const router = express.Router();
const { getBooks, getBookById, createBook, importBook, searchBooks, getUserBooks } = require('../controllers/bookController');

const auth = require('../middleware/authMiddleware');

router.get('/', getBooks);
router.get('/:id', getBookById);
router.get('/search', searchBooks);
router.get('/user/:userId', getUserBooks);
router.post('/import', auth, importBook);

module.exports = router;
