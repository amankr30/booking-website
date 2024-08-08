import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
const SearchYourCity = () => {
  const [cities, setCities] = useState<
    {
      _id: string;
      name: string;
      selectedImage: { url: string };
      normalImage: { url: string };
    }[]
  >([]);

  const [selectedCity, setSelectedCity] = useState<string>(
    "66b4d1163c9cc135a1e9c9ca"
  );

  useEffect(() => {
    const backendUri: string = import.meta.env.VITE_BACKEND_URI as string;

    fetch(`${backendUri}/api/v1/city`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCities(data.data);
      });
  });
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* <!-- Search Bar and Detect My Location --> */}
        <div className="flex flex-col items-center justify-start bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-start flex-grow w-full mb-4 ">
            <Input placeholder="Search Your City..." />
          </div>
        </div>

        {/* <!-- Popular Cities --> */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-center text-lg font-semibold mb-4">
            Popular Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <div className="flex flex-col items-center cursor-pointer" key={city._id}>
                <img
                  src={
                    selectedCity === city._id
                      ? city.selectedImage.url
                      : city.normalImage.url
                  }
                  alt="Mumbai"
                  className="w-16 h-16 mb-2"
                />
                <span>{city.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchYourCity;
