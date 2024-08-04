
import { useEffect, useState } from "react";


const FilterCapsule = () => {
  const [categories, setCategories] = useState<{ name: string; _id: string }[]>(
    []
  );

  useEffect(() => {
    const backendUri: string = import.meta.env.VITE_BACKEND_URI as string;

    fetch(`${backendUri}/api/v1/category`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.data);
      });
  });
  return (
    <div className="flex justify-center items-center">
      <div className="capsuleFilter flex lg:space-x-3 text-sm">
          components
        <button className="px-2 py-1 rounded-full border border-gray-300 text-red-500 hover:bg-gray-100 transition duration-300">
          Comedy Shows
        </button>
        <button className="px-2 py-1 rounded-full border border-gray-300 text-red-500 hover:bg-gray-100 transition duration-300">
          Music Shows
        </button>
        <button className="px-2 py-1 rounded-full border border-gray-300 text-red-500 hover:bg-gray-100 transition duration-300">
          Workshops
        </button>
        <button className="px-2 py-1 rounded-full border border-gray-300 text-red-500 hover:bg-gray-100 transition duration-300">
          Meetups
        </button>
        <button className="px-2 py-1 rounded-full border border-gray-300 text-red-500 hover:bg-gray-100 transition duration-300">
          Performances
        </button>
        <button className="px-2 py-1 rounded-full border border-gray-300 text-red-500 hover:bg-gray-100 transition duration-300">
          Kids
        </button>
        <button className="px-2 py-1 rounded-full border border-gray-300 text-red-500 hover:bg-gray-100 transition duration-300">
          Award Shows

        {categories.map((category) => (
          <button
            key={category._id}
            className="px-2 py-1 rounded-full border border-gray-300 text-red-500 hover:bg-red-100 transition duration-300"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterCapsule;
