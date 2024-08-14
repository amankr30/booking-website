import { GrLocation } from "react-icons/gr";

const Showpage = () => {
  return (
    <div className="bg-gray-200">
    <div className=" w-[85%] mx-auto mb-5">
      <div className="flex justify-center w-full">
        <img
          src="src\assets\showpage.jpg"
          alt="Toxic 2024"
          className="object-center h-[550px] w-full bg-no-repeat"
        />
      </div>

      <div className="bg-white">
      <div className="name w-full flex justify-between items-center p-4">
        <div className="w-2/3 text-left">
          <div className="actor">
            <h2 className="text-2xl font-bold leading-10">
              Abhishek Upmanyu LIVE - Kolkata
            </h2>
          </div>
          <div className="category-details">
            <p className="text-[18px] ">Comedy | Hindi | 16yrs + | 1hr</p>
          </div>
        </div>
        <div className="book-ticket">
          <button className="bg-red-500 text-white py-3 px-6 rounded text-lg">
            Book
          </button>
        </div>
      </div>

      <hr className="m-1 text-black" />

      <div className="venue flex items-center p-4 text-lg">
        <div className="time mr-2 ">
          <p className="">Sat 23 Nov 2024 - Sun 24 Nov 2024</p>
        </div>
        <div className="location flex items-center mx-2">
          <div className="flex items-center">
            <span>
              <GrLocation className="text-red-500" />
            </span>
            <p className="">
              Venue To Be Announced: Kolkata 
            </p>
            <p className="px-2">|</p>
          </div>
          <div className="price mx-2">₹ 590 onwards</div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Showpage;
