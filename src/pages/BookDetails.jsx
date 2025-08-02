import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const dummyReviews = [
  { id: 1, user: 'Tushan', rating: 5, comment: 'Amazing book!' },
  { id: 2, user: 'Forhad', rating: 4, comment: 'Very helpful.' },
  { id: 2, user: 'Ashfaq', rating: 4, comment: 'great book.' },
];

const BookDetails = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(dummyReviews);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      user: 'Guest',
      rating,
      comment,
    };
    setReviews([newReview, ...reviews]);
    setRating('');
    setComment('');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-bold mb-2">📖 Book Details (ID: {id})</h2>
        <p className="text-gray-700">This is the detailed page of book with ID: {id}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4">📝 Submit Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating (1-5)</label>
            <input
              type="number"
              id="rating"
              placeholder="Rating (1–5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1" max="5"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">Your Review</label>
            <textarea
              id="comment"
              placeholder="Write your review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Review</button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold mb-4">⭐ Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet. Be the first to review!</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((rev) => (
              <div key={rev.id} className="border border-gray-200 rounded-lg p-4">
                <p className="text-gray-800"><strong>{rev.user}</strong> rated it <span className="font-bold text-blue-600">{rev.rating}/5</span></p>
                <p className="text-gray-600 mt-1">{rev.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
