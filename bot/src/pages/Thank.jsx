import React from 'react';
import { Link } from 'react-router-dom';

const Thank = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your payment was successful. We appreciate your trust in us.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          If you have any questions or need further assistance, please contact our support team.
        </p>
        <Link
          to="/"
          className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Thank;
