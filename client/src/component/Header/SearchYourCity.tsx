import { Input } from "../../components/ui/input";
const SearchYourCity = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* <!-- Search Bar and Detect My Location --> */}
        <div className="flex flex-col items-center justify-start bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-start flex-grow w-full mb-4 ">
            <Input placeholder="Search Your City..." />
          </div>
          {/* <div>
            <button className="flex items-center text-red-500">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
              Detect my location
            </button>
          </div> */}
        </div>

        {/* <!-- Popular Cities --> */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-center text-lg font-semibold mb-4">
            Popular Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="src\assets\mumbai-selected.png"
                alt="Mumbai"
                className="w-16 h-16 mb-2"
              />
              <span>Mumbai</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="src\assets\ncr-selected.png"
                alt="Delhi-NCR"
                className="w-16 h-16 mb-2"
              />
              <span>Delhi-NCR</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="src\assets\pune-selected.png"
                alt="Pune"
                className="w-16 h-16 mb-2"
              />
              <span>Pune</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src\assets\bang-selected.png"
                alt="Bengaluru"
                className="w-16 h-16 mb-2"
              />
              <span>Bengaluru</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src\assets\kolk-selected.png"
                alt="Kolkata"
                className="w-16 h-16 mb-2"
              />
              <span>Kolkata</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src\assets\hyd-selected.png"
                alt="Hyderabad"
                className="w-16 h-16 mb-2"
              />
              <span>Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchYourCity;
