import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const DateDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Today", "Tomorrow", "This Weekend"];
  // const [isSelect,setIsSelect]=useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    // Check if the option is already selected
    if (selectedOptions.includes(option)) {
      // Remove the option from the selected list
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
    } else {
      // Add the option to the selected list
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleClear = () => {
    setSelectedOptions([]);
  };

  return (
    <>
      {/* <!-- Date Dropdown --> */}
      <div className="bg-white shadow-md rounded-md mb-2 w-[90%]">
        <div className="flex justify-between items-center p-4 cursor-pointer w-full">
          <div
            className=" dropdwon-btn flex w-2/3 items-center gap-2"
            onClick={() => setIsActive(!isActive)}
          >
            <span>
              <RiArrowDropDownLine />
            </span>
            <span>Date</span>
          </div>
          <span
            className="text-sm text-gray-400 hover:text-purple-700"
            onClick={handleClear}
          >
            Clear
          </span>
        </div>

        {isActive && (
          <div id="dateDropdown" className=" p-4 border-t">
            <div className="flex flex-wrap gap-2">
              {options.map((option) => {
                return (
                  <button
                    key={option}
                    className={`px-2 py-1 rounded-md ${
                      selectedOptions.includes(option)
                        ? "bg-purple-700 text-white"
                        : "bg-gray-100 text-purple-700"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                );
              })}
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
        )}
      </div>
    </>
  );
};

export default DateDropdown;
