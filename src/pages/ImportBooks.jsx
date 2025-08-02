import React, { useState } from 'react';
import axios from 'axios';

const ImportBooks = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setMessage('');
    setResults([]);
    try {
      const response = await axios.get(`/api/google-books/search?query=${query}`);
      setResults(response.data);
      if (response.data.length === 0) {
        setMessage('No books found for your query.');
      }
    } catch (error) {
      console.error('Error searching books:', error);
      setMessage('Error searching books. Please try again.');
    }
  };

  const handleAddBook = async (book) => {
    try {
      // Assuming your existing /api/books endpoint handles adding books
      // You might need to adjust the data structure to match your Book model
      const bookData = {
        title: book.title,
        author: book.authors.join(', '),
        description: book.description,
        publishedDate: book.publishedDate,
        thumbnail: book.thumbnail,
        googleId: book.googleId,
      };
      await axios.post('/api/books', bookData);
      setMessage(`"${book.title}" added successfully!`);
    } catch (error) {
      console.error('Error adding book:', error);
      setMessage(`Error adding "${book.title}". Please try again.`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Import Books from Google Books</h1>

      {message && <p className="text-center text-lg mb-4">{message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((book) => (
          <div key={book.googleId} className="bg-white rounded-lg shadow-md overflow-hidden">
            {book.thumbnail && (
              <img src={book.thumbnail} alt={book.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">By {book.authors.join(', ')}</p>
              <p className="text-gray-700 text-sm line-clamp-3">{book.description}</p>
              <button
                onClick={() => handleAddBook(book)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
              >
                Add to My Books
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportBooks;
