import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to the Bottle Catching Game!
        </h1>
        <p className="text-xl mb-8 font-medium drop-shadow-lg">
          Test your skills and catch as many bottles as you can!
        </p>
        <button 
          onClick={openModal}
          className="bg-white text-blue-500 hover:text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Start Game
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white rounded-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-100">
            <h2 className="text-3xl font-bold mb-4 ">
              Have you followed us on Instagram?
            </h2>
            <p className="mb-6 ">
              Make sure to follow <span className="font-bold">@streetzfestival</span> on Instagram before playing!
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/game" 
                onClick={closeModal}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200"
              >
                Yes, I have
              </Link>
              <a 
                href="https://www.instagram.com/streetzfestival" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 hover:from-teal-500 hover:to-green-400 text-white font-bold py-2 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200"
              >
                Follow Now
              </a>
            </div>
            {/* <button 
              onClick={closeModal}
              className="mt-6 text-gray-500 hover:text-gray-700 transform hover:scale-105 transition-transform duration-200"
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
