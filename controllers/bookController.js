const Book = require('../models/Book');
const axios = require('axios');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate({
      path: 'reviews',
      populate: {
        path: 'user',
        select: 'username' // Only select the username field
      }
    });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    image: req.body.image,
    user: req.user.id
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.importBook = async (req, res) => {
  const { title, author } = req.body;

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}`);
    const bookData = response.data.items[0].volumeInfo;

    const book = new Book({
      title: bookData.title,
      author: bookData.authors.join(', '),
      description: bookData.description,
      image: bookData.imageLinks.thumbnail,
      user: req.user.id
    });

    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.searchBooks = async (req, res) => {
  const { query } = req.query;
  try {
    const books = await Book.find({ $text: { $search: query } });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.params.userId });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

