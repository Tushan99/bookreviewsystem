const Review = require('../models/Review');
const Book = require('../models/Book');

exports.getReviewsForBook = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId }).populate('user', 'name');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addReviewToBook = async (req, res) => {
  const { rating, comment } = req.body;
  const { bookId } = req.params;
  const userId = req.user.id;

  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    const review = new Review({
      book: bookId,
      user: userId,
      rating,
      comment,
    });

    const newReview = await review.save();
    const populatedReview = await newReview.populate('user', 'name');
    res.status(201).json(populatedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateReview = async (req, res) => {
  const { rating, comment } = req.body;
  try {
    let review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    review.rating = rating;
    review.comment = comment;

    await review.save();
    const populatedReview = await review.populate('user', 'name');
    res.json(populatedReview);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    let review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await review.remove();
    res.json({ message: 'Review removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
