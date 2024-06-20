import Link from 'next/link';
import React from 'react';

const EnglishLevelMessage = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Your English level is B1.</h1>
      <p className="text-lg text-gray-800">An advisor will contact you in order to start a course that fits your English knowledge.</p>
        
      <div className="pt-5">
        <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          Go to home page
        </Link>
      </div>
    
    </div>
  );
};

export default EnglishLevelMessage;
