import React from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    image: "https://m.media-amazon.com/images/I/61Ij8nLooNL._SL1500_.jpg",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/71+2-t7M35L._SY466_.jpg",
  },
  {
    id: 5,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    image: "https://m.media-amazon.com/images/I/71kVn6thiBL._SY466_.jpg",
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    image: "https://m.media-amazon.com/images/I/81Om0n+pfyL._SY466_.jpg",
  },
  {
    id: 7,
    title: "The Midnight Library",
    author: "Matt Haig",
    image: "https://m.media-amazon.com/images/I/812whWLbqAL._SY466_.jpg",
  },
  {
    id: 8,
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "Héctor García and Francesc Miralles",
    image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg",
  },
];

const BookList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={book.image} alt={book.title} className="w-full h-72 object-contain" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
              <Link to={`/books/${book.id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
                Add Review
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
