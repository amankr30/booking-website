const Card = () => {
  return (
    <div className="bg-gray-100 p-4">
    <div className="max-w-7xl mx-auto">
        {/* <!-- Event Cards Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* <!-- Card 1 --> */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="dummy-link-here" alt="Event 1" className="w-full h-56 object-cover" />
                <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">Sun, 28 Jul</div>
                    <h3 className="text-lg font-semibold mb-2">Nothing Makes Sense FT. VARUN GROVER</h3>
                    <p className="text-sm text-gray-700 mb-1">Kala Kunj Auditorium:...</p>
                    <p className="text-sm text-gray-700 mb-1">Stand up Comedy</p>
                    <p className="text-sm font-semibold">₹ 999 onwards</p>
                </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="dummy-link-here" alt="Event 2" className="w-full h-56 object-cover" />
                <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">Fri, 27 Sep</div>
                    <h3 className="text-lg font-semibold mb-2">Sunburn Arena Ft. Alan Walker - Kolkata</h3>
                    <p className="text-sm text-gray-700 mb-1">Venue To Be Announced:...</p>
                    <p className="text-sm text-gray-700 mb-1">Concerts</p>
                    <p className="text-sm font-semibold">₹ 1000 onwards</p>
                </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="dummy-link-here" alt="Event 3" className="w-full h-56 object-cover" />
                <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">Fri, 16 Aug</div>
                    <h3 className="text-lg font-semibold mb-2">Samay Raina Unfiltered - India Tour</h3>
                    <p className="text-sm text-gray-700 mb-1">Kala Mandir Auditorium:...</p>
                    <p className="text-sm text-gray-700 mb-1">Stand up Comedy</p>
                    <p className="text-sm font-semibold">₹ 499 onwards</p>
                </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="dummy-link-here" alt="Event 4" className="w-full h-56 object-cover" />
                <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">Mon, 5 Aug</div>
                    <h3 className="text-lg font-semibold mb-2">Megher Pore Megh: A Monsoon Tribute to...</h3>
                    <p className="text-sm text-gray-700 mb-1">Madhusudan Mancha:...</p>
                    <p className="text-sm text-gray-700 mb-1">Concerts</p>
                    <p className="text-sm font-semibold">₹ 100 onwards</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card