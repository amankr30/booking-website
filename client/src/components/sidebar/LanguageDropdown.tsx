import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const LanguageDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options = ["Hindi", "English"];

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleClear = () => {
    setSelectedOptions([]);
  };

  return (
    <div className="bg-white shadow-md rounded-md mb-2 w-[90%]">
      <div className="flex justify-between items-center p-4 cursor-pointer">
        <div
          className="flex w-2/3 items-center gap-2"
          onClick={() => setIsActive(!isActive)}
        >
          <span>
            <RiArrowDropDownLine />
          </span>
          <span>Language</span>
        </div>
        <span
          className="text-sm text-gray-400 cursor-pointer hover:text-purple-700"
          onClick={handleClear}
        >
          Clear
        </span>
      </div>
      {isActive && (
        <div id="languageDropdown" className="p-4 border-t">
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
