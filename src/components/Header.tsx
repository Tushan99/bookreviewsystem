
import React from 'react';
import { BookOpen, Star } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center items-center gap-3 mb-4">
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 text-amber-500 fill-current" />
          <Star className="h-6 w-6 text-amber-600 fill-current" />
          <BookOpen className="h-8 w-8 text-amber-700" />
          <Star className="h-6 w-6 text-amber-600 fill-current" />
          <Star className="h-5 w-5 text-amber-500 fill-current" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2 font-serif">
        BookMark
      </h1>
      <p className="text-lg text-amber-700 font-medium">
        Your Personal Library of Reviews
      </p>
      <div className="mt-4 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
    </div>
  );
};

export default Header;
