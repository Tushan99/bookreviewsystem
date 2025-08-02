import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl text-blue-600">📚</span>
          <h1 className="text-xl font-bold text-gray-800">Book Review</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Books
          </Link>
          {isAuthenticated && (
            <>
              <Link
                to="/add-book"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Add Book
              </Link>
              <Link
                to="/import-books"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Import Books
              </Link>
            </>
          )}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

