
const Dropdown = () => {
  return (
    <div className="bg-gray-100 p-4">
    <div className="max-w-md mx-auto">
        {/* <!-- Date Dropdown --> */}
        <div className="bg-white shadow-md rounded-md mb-4">
            <div className="flex justify-between items-center p-4 cursor-pointer" >
                <span>Date</span>
                <span>&#x25BC;</span>
                <span className="text-sm text-blue-500">Clear</span>
            </div>
            <div id="dateDropdown" className="hidden p-4 border-t">
                <div className="flex flex-wrap gap-2">
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Today</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Tomorrow</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">This Weekend</button>
                </div>
                <div className="mt-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" /><span className="ml-2">Date Range</span>
                    </label>
                </div>
            </div>
        </div>
        
        {/* <!-- Languages Dropdown --> */}
        <div className="bg-white shadow-md rounded-md mb-4">
            <div className="flex justify-between items-center p-4 cursor-pointer">
                <span>Languages</span>
                <span>&#x25BC;</span>
                <span className="text-sm text-blue-500">Clear</span>
            </div>
            <div id="languageDropdown" className="hidden p-4 border-t">
                <div className="flex flex-wrap gap-2">
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Hindi</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">English</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Hinglish</button>
                </div>
            </div>
        </div>
        
        {/* <!-- Categories Dropdown --> */}
        <div className="bg-white shadow-md rounded-md mb-4">
            <div className="flex justify-between items-center p-4 cursor-pointer">
                <span>Categories</span>
                <span>&#x25BC;</span>
                <span className="text-sm text-blue-500">Clear</span>
            </div>
            <div id="categoriesDropdown" className="hidden p-4 border-t">
                <div className="flex flex-wrap gap-2">
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Comedy Shows</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Music Shows</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Workshops</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Meetups</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Kids</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Performances</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Award Shows</button>
                    <button className="bg-gray-200 text-red-500 px-2 py-1 rounded-md">Talks</button>
                </div>
            </div>
        </div>
    </div>    
</div>
  )
}

export default Dropdown