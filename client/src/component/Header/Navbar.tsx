const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        {/* <!-- Logo --> */}
        <div className="flex items-center space-x-2">
            <img src="logo-url-here" alt="Logo" className="h-8" />
            <span className="font-semibold text-xl">book<span className="text-red-500">my</span>show</span>
        </div>
        {/* <!-- Search Bar --> */}
        <div className="flex-1 mx-4 hidden md:block">
            <input type="text" placeholder="Search for Events, Plays, Sports and Activities" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        {/* <!-- Location, Sign In, Menu --> */}
        <div className="flex items-center space-x-4">
            <div className="hidden md:block">
                <select className="border border-gray-300 p-2 rounded-lg">
                    <option>Kolkata</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                </select>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Sign In</button>
            <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar