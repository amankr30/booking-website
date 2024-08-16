import React from "react";
import { GrLocation } from "react-icons/gr";

const Showpages: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1f090c] text-white flex items-center justify-center">
      <div className=" flex justify-around gap-10 items-center">
        {/* Poster Image */}
        <div className="w-1/3 h-2/3">
          <img
            src="src\assets\card1.jpg" // Replace with actual image URL
            alt="Movie Poster"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Movie Details */}
        <div className="md:w-2/3 mt-6 flex flex-col text-left">
          <div>
            <h1 className="text-4xl font-bold">Stree 2: Sarkate Ka Aatank</h1>
          </div>

          {/* Language and Format */}
          <div className="flex my-4">
            <button className="bg-purple-700 text-white py-1 px-4 rounded">
              Hindi
            </button>
          </div>

          {/* Duration, Genre, Rating, and Release Date */}
          <div className="venue flex items-center text-lg">
            <div className="time mr-2 ">
              <p>Sat 23 Nov 2024 - Sun 24 Nov 2024</p>
            </div>
            <div className="location flex items-center mx-2">
              <div className=" venue flex items-center">
                <span>
                  <GrLocation className="text-purple-700" />
                </span>
                <p >Venue: Kolkata</p>
                <p className="px-2">|</p>
              </div>
              <div className="price mx-2">₹ 590 onwards</div>
            </div>
          </div>

          {/* Book Tickets Button */}
          <div className="mt-8">
            <button className="bg-purple-700 text-white py-3 px-6 rounded-lg text-lg hover:bg-purple-700">
              Book tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showpages;
