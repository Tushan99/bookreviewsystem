
import React from 'react';

const BookBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-48 bg-amber-800 rounded-sm transform rotate-12 shadow-lg"></div>
        <div className="absolute top-20 right-20 w-28 h-40 bg-amber-700 rounded-sm transform -rotate-6 shadow-lg"></div>
        <div className="absolute bottom-20 left-20 w-36 h-52 bg-amber-600 rounded-sm transform rotate-3 shadow-lg"></div>
        <div className="absolute bottom-10 right-10 w-24 h-36 bg-amber-900 rounded-sm transform -rotate-12 shadow-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-56 bg-amber-500 rounded-sm rotate-45 shadow-lg"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
    </div>
  );
};

export default BookBackground;
