import React from "react";

const ShowPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="client/src/assets/showpage.jpg" // replace with the actual path to your image
            alt="Abhishek Upmanyu LIVE - Kolkata"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
            <h2 className="text-white text-2xl font-bold">
              Abhishek Upmanyu LIVE - Kolkata
            </h2>
            <p className="text-gray-300">Comedy | Hindi | 16yrs+ | 1hr</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-700">
            Sat 23 Nov 2024 - Sun 24 Nov 2024
          </p>
          <p className="text-gray-700">
            Venue To Be Announced: Kolkata | ₹ 590 onwards
          </p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
