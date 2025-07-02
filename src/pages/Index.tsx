
import React from 'react';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';
import BookBackground from '@/components/BookBackground';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <BookBackground />
      <div className="w-full max-w-md space-y-8 relative z-10">
        <Header />
        <LoginForm />
      </div>
      <div className="absolute bottom-4 text-center text-xs text-amber-600">
        <p>"A room without books is like a body without a soul." - Cicero</p>
      </div>
    </div>
  );
};

export default Index;
