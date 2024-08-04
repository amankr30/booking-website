import { RiArrowDropDownLine } from "react-icons/ri";
const Dropdown = () => {
  return (
    <div className="p-4">
      <div className="w-full mx-auto">
        {/* <!-- Date Dropdown --> */}
        <div className="bg-white shadow-md rounded-md mb-4">
          <div className="flex justify-between items-center p-4 cursor-pointer w-full">
            <div className="flex w-2/3 items-center gap-2">
              <span>
                <RiArrowDropDownLine />
              </span>
              <span>Date</span>
            </div>

            <span className="text-sm text-blue-500">Clear</span>
          </div>
          <div id="dateDropdown" className=" p-4 border-t">
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">
                Today
              </button>
              <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">
                Tomorrow
              </button>
              <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">
                This Weekend
              </button>
            </div>
            <div className="mt-4 flex">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-2">Date Range</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Languages Dropdown --> */}
        <div className="bg-white shadow-md rounded-md mb-4">
          <div className="flex justify-between items-center p-4 cursor-pointer">
          <div className="flex w-2/3 items-center gap-2">
              <span>
                <RiArrowDropDownLine />
              </span>
              <span>Date</span>
            </div>
            <span className="text-sm text-blue-500">Clear</span>
          </div>
          <div id="languageDropdown" className=" p-4 border-t">
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">
                Hindi
              </button>
              <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">
                English
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Categories Dropdown --> */}
        <div className="bg-white shadow-md rounded-md mb-4">
          <div className="flex justify-between items-center p-4 cursor-pointer">
          <div className="flex w-2/3 items-center gap-2">
              <span>
                <RiArrowDropDownLine />
              </span>
              <span>Date</span>
            </div>
            <span className="text-sm text-blue-500">Clear</span>
          </div>
          <div id="categoriesDropdown" className=" p-4 border-t">
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">
                Comedy Shows
              </button>
              <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">
                Music Shows
              </button>
              <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">
                Poetry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
