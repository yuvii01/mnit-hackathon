import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InterestSelector = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const navigate = useNavigate() ;

  const interests = [
    "Political", "Astrological", "Cooking", "Geopolitical", "Science",
    "Business", "Environment", "Doctors", "Technology", "Movie Reviews",
    "Entertainment", "Traveling", "Stock Market", "Food",
    "Product Review", "Spiritual", "Self Help", "Love Guru",
    "Motivational Speaker", "College Counsellor"
  ];

  const handleInterestClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = () => {
    if (selectedInterests.length >= 3) {
      console.log("Selected Interests: ", selectedInterests);
    } else {
      console.log("Please select at least 3 interests.");
    }
    navigate('/home') ;
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <h1 className="text-4xl font-bold text-purple-700 text-center uppercase mb-8 tracking-widest">
        Select Your Interests
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
        {interests.map((interest, index) => (
          <div
            key={index}
            className={`text-lg p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105 border-2 border-transparent
              ${selectedInterests.includes(interest)
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-gray-100 text-black hover:bg-purple-700 hover:text-white'}`}
            onClick={() => handleInterestClick(interest)}
          >
            {interest}
          </div>
        ))}
      </div>
      <button
        className={`mt-8 py-2 px-8 rounded-lg text-white text-xl font-bold transition-transform transform hover:scale-105 shadow-lg
          ${selectedInterests.length < 3
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-purple-700 hover:bg-pink-700 cursor-pointer'}`}
        onClick={handleSubmit}
        disabled={selectedInterests.length < 3}
      >
        Submit
      </button>
    </div>
  );
};

export default InterestSelector;
