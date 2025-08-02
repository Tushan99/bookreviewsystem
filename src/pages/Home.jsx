import React from "react";
import { useNavigate } from "react-router-dom";
import BookList from "./BookList";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-28 px-4 overflow-hidden shadow-2xl">
        {/* Background shapes for visual interest */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" fillOpacity="0.1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,106.7C672,85,768,107,864,133.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Your Next Great Read Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            Discover, review, and share your favorite books with a vibrant community of readers.
          </p>
        </div>
      </div>

      {/* Latest Books Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Explore Our Collection</h2>
        <BookList />
      </div>

      {/* Call to Action/Features Section (Optional - can be expanded) */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Join Our Community!</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up today to add your own reviews, track your reading progress, and connect with fellow book lovers.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
