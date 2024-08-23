import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  const [shows, setShows] = useState<
    {
      name: string;
      _id: string;
      venue: string;
      category: { name: string };
      seatCategories: [{ price: number }];
      coverImage: { url: string };
    }[]
  >([]);

  useEffect(() => {
    const backendUri: string = import.meta.env.VITE_BACKEND_URI as string;

    fetch(`${backendUri}/api/v1/show`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShows(data.data);
      });
  }, []);
  return (
    <div className=" p-4">
      <div className="max-w-7xl mx-auto">
        {/* <!-- Event Cards Grid --> */}
        <div className="cardBody grid lg:grid-cols-4 lg:gap-5 items-center">
          {shows.map((show) => (
            <Link to={'/showpage'}>
              <div className="cards bg-white rounded-lg shadow-md overflow-hidden h-[100%] cursor-pointer">
                <div className="h-[100]">
                  <img
                    src={show.coverImage.url}
                    alt="Event 1"
                    className=" images w-full h-[100%] object-cover"
                  />
                </div>
                <div className="showDetails p-4 flex flex-col text-left">
                  <p className="eventName text-sm font-semibold mb-1 ">
                    {show.name}
                  </p>
                  <p className="eventDetails text-sm text-gray-700 mb-1">
                    {show.venue}
                  </p>
                  <p className="eventDetails text-sm text-gray-700 mb-1">
                    {show.category.name}
                  </p>
                  <p className="eventDetails text-sm font-semibold">
                    ₹ {show.seatCategories[0].price} onwards
                  </p>
                </div>
              </div>
            </Link>
          ))}
          {/* <!-- Card 1 --> */}
          <Link to={'/showpage'}>
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden h-[100%] cursor-pointer">
              <div className="h-[100]">
                <img
                  src="src\assets\card1.jpg"
                  alt="Event 1"
                  className=" images w-full h-[100%] object-cover"
                />
              </div>
              <div className="showDetails p-4 flex flex-col text-left">
                <p className="eventName text-sm font-semibold mb-1 ">
                  Nothing Makes Sense FT. VARUN GROVER
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Kala Kunj Auditorium:...
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Stand up Comedy
                </p>
                <p className="eventDetails text-sm font-semibold">
                  ₹ 999 onwards
                </p>
              </div>
            </div>
          </Link>
          {/* <!-- Card 1 --> */}
          <Link to={'/showpage'}>
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden h-[100%] cursor-pointer">
              <div className="h-[100]">
                <img
                  src="src\assets\card1.jpg"
                  alt="Event 1"
                  className=" images w-full h-[100%] object-cover"
                />
              </div>
              <div className="showDetails p-4 flex flex-col text-left">
                <p className="eventName text-sm font-semibold mb-1 ">
                  Nothing Makes Sense FT. VARUN GROVER
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Kala Kunj Auditorium:...
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Stand up Comedy
                </p>
                <p className="eventDetails text-sm font-semibold">
                  ₹ 999 onwards
                </p>
              </div>
            </div>
          </Link>
          {/* <!-- Card 1 --> */}
          <Link to={'/showpage'}>
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden h-[100%] cursor-pointer">
              <div className="h-[100]">
                <img
                  src="src\assets\card1.jpg"
                  alt="Event 1"
                  className=" images w-full h-[100%] object-cover"
                />
              </div>
              <div className="showDetails p-4 flex flex-col text-left">
                <p className="eventName text-sm font-semibold mb-1 ">
                  Nothing Makes Sense FT. VARUN GROVER
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Kala Kunj Auditorium:...
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Stand up Comedy
                </p>
                <p className="eventDetails text-sm font-semibold">
                  ₹ 999 onwards
                </p>
              </div>
            </div>
          </Link>
          {/* <!-- Card 1 --> */}
          <Link to={'/showpage'}>
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden h-[100%] cursor-pointer">
              <div className="h-[100]">
                <img
                  src="src\assets\card1.jpg"
                  alt="Event 1"
                  className=" images w-full h-[100%] object-cover"
                />
              </div>
              <div className="showDetails p-4 flex flex-col text-left">
                <p className="eventName text-sm font-semibold mb-1 ">
                  Nothing Makes Sense FT. VARUN GROVER
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Kala Kunj Auditorium:...
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Stand up Comedy
                </p>
                <p className="eventDetails text-sm font-semibold">
                  ₹ 999 onwards
                </p>
              </div>
            </div>
          </Link>
          {/* <!-- Card 1 --> */}
          <Link to={'/showpage'}>
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden h-[100%] cursor-pointer">
              <div className="h-[100]">
                <img
                  src="src\assets\card1.jpg"
                  alt="Event 1"
                  className=" images w-full h-[100%] object-cover"
                />
              </div>
              <div className="showDetails p-4 flex flex-col text-left">
                <p className="eventName text-sm font-semibold mb-1 ">
                  Nothing Makes Sense FT. VARUN GROVER
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Kala Kunj Auditorium:...
                </p>
                <p className="eventDetails text-sm text-gray-700 mb-1">
                  Stand up Comedy
                </p>
                <p className="eventDetails text-sm font-semibold">
                  ₹ 999 onwards
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
