const express = require('express');
const router = express.Router();
const { getReviewsForBook, addReviewToBook, updateReview, deleteReview } = require('../controllers/reviewController');
const auth = require('../middleware/authMiddleware');

router.get('/:bookId', getReviewsForBook);
router.post('/:bookId', auth, addReviewToBook);
router.put('/:id', auth, updateReview);
router.delete('/:id', auth, deleteReview);

module.exports = router;