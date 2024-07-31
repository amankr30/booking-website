import React from 'react'

const FilterCapsule = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="flex space-x-4 text-sm">
        <button className="px-4 py-2 rounded-full border border-gray-300 text-red-500 hover:bg-red-100 transition duration-300">Comedy Shows</button>
        <button className="px-4 py-2 rounded-full border border-gray-300 text-red-500 hover:bg-red-100 transition duration-300">Music Shows</button>
        <button className="px-4 py-2 rounded-full border border-gray-300 text-red-500 hover:bg-red-100 transition duration-300">Workshops</button>
        <button className="px-4 py-2 rounded-full border border-gray-300 text-red-500 hover:bg-red-100 transition duration-300">Meetups</button>
        <button className="px-4 py-2 rounded-full border border-gray-300 text-red-500 hover:bg-red-100 transition duration-300">Performances</button>
        <button className="px-4 py-2 rounded-full border border-gray-300 text-red-500 hover:bg-red-100 transition duration-300">Kids</button>
        <button className="px-4 py-2 rounded-full border border-gray-300 text-red-500 hover:bg-red-100 transition duration-300">Award Shows</button>
    </div>
</div>
  )
}

export default FilterCapsule