import React from 'react';

const Showpage = () => {
  return (
    <div className="w-full bg-white p-4">
      <div className="relative">
        <img 
          src="src\assets\showpage.jpg" 
          alt="Toxic 2024" 
          className="w-full h-auto object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
          <div className="text-left">
            <h2 className="text-xl font-bold">Abhishek Upmanyu LIVE - Kolkata</h2>
            <p className="text-sm text-gray-600">Comedy | Hindi | 16yrs + | 1hr</p>
            <p className="text-sm text-gray-600">Sat 23 Nov 2024 - Sun 24 Nov 2024</p>
            <p className="text-sm text-gray-600">Venue To Be Announced: Kolkata | ₹ 590 onwards</p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-pink-500 text-white py-2 px-4 rounded">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showpage;
