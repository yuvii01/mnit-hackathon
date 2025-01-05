import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div  className="z-[100000] fixed top-0 left-0 w-full bg-gray-800 px-10 p-4 flex justify-between items-center shadow-md z-10">
      <div className="text-2xl font-bold text-white"> Personify </div>
      <ul className="flex gap-10">
        <li><Link to="/" className="text-white hover:bg-gray-600 rounded px-3 py-2 transition duration-300">Home</Link></li>
        <li><Link to="/tt" className="text-white hover:bg-gray-600 rounded px-3 py-2 transition duration-300">Top Voices</Link></li>
        <li><Link to="/about" className="text-white hover:bg-gray-600 rounded px-3 py-2 transition duration-300">About</Link></li>
        <li><Link to="/contact" className="text-white hover:bg-gray-600 rounded px-3 py-2 transition duration-300">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header