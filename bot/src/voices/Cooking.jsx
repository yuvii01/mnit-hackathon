import React from 'react'
import { useNavigate } from 'react-router-dom';

const Business = () => {
    const navigate = useNavigate() ;
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-10">Top Voices</h1>
    <p className=" text-xl text-gray-600">Godsey Ramson</p>
    <p className=" text-xl text-gray-600">Sanjeev Kappor</p>
    <p className=" text-xl text-gray-600">Vikas Khanna</p>

  </div>
  )
}

export default Business ;