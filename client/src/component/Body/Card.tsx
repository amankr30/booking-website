
const Card = () => {
  return (
    <div className=" p-4">
    <div className="max-w-7xl mx-auto">
        {/* <!-- Event Cards Grid --> */}
        <div className="cardBody grid lg:grid-cols-4 lg:gap-5 items-center">
            {/* <!-- Card 1 --> */}
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden h-[100%]">
                <div className="h-[100]">
                <img src="src\assets\card1.jpg" alt="Event 1" className=" images w-full h-[100%] object-cover" />
                </div>                
                <div className="showDetails p-4 flex flex-col text-left">
                    <p className="eventName text-md font-semibold mb-1 ">Nothing Makes Sense FT. VARUN GROVER</p>
                    <p className="eventDetails text-sm text-gray-700 mb-1">Kala Kunj Auditorium:...</p>
                    <p className="eventDetails text-sm text-gray-700 mb-1">Stand up Comedy</p>
                    <p className="eventDetails text-sm font-semibold">₹ 999 onwards</p>
                </div>
            </div>
            {/* <!-- Card 1 --> */}
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden">
                <div>
                <img src="src\assets\card1.jpg" alt="Event 1" className=" images w-full h-full object-cover" />
                </div>                
                <div className="showDetails p-4 flex flex-col text-left">
                    <p className="eventName text-md font-semibold mb-1 ">Nothing Makes Sense FT. VARUN GROVER</p>
                    <p className="details text-sm text-gray-700 mb-1">Kala Kunj Auditorium:...</p>
                    <p className="details text-sm text-gray-700 mb-1">Stand up Comedy</p>
                    <p className="details text-sm font-semibold">₹ 999 onwards</p>
                </div>
            </div>
            {/* <!-- Card 1 --> */}
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden">
                <div>
                <img src="src\assets\card1.jpg" alt="Event 1" className=" images w-full h-full object-cover" />
                </div>                
                <div className="showDetails p-4 flex flex-col text-left">
                    <p className="eventName text-md font-semibold mb-1 ">Nothing Makes Sense FT. VARUN GROVER</p>
                    <p className="details text-sm text-gray-700 mb-1">Kala Kunj Auditorium:...</p>
                    <p className="details text-sm text-gray-700 mb-1">Stand up Comedy</p>
                    <p className="details text-sm font-semibold">₹ 999 onwards</p>
                </div>
            </div>
            {/* <!-- Card 1 --> */}
            <div className="cards bg-white rounded-lg shadow-md overflow-hidden">
                <div>
                <img src="src\assets\card1.jpg" alt="Event 1" className=" images w-full h-full object-cover" />
                </div>                
                <div className="showDetails p-4 flex flex-col text-left">
                    <p className="eventName text-md font-semibold mb-1 ">Nothing Makes Sense FT. VARUN GROVER</p>
                    <p className="details text-sm text-gray-700 mb-1">Kala Kunj Auditorium:...</p>
                    <p className="details text-sm text-gray-700 mb-1">Stand up Comedy</p>
                    <p className="details text-sm font-semibold">₹ 999 onwards</p>
                </div>
            </div>
            
           
        </div>
    </div>
</div>
  )
}

export default Card