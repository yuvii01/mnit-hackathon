import React from 'react'
import { useNavigate } from 'react-router-dom';

const Movies = () => {
    const navigate = useNavigate() ;
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-10">Top Voices </h1>
    <p onClick={() => {
        navigate('/p')
    }}  className=" text-xl m-2 text-gray-600">Ranbir Kapoor</p>

<p onClick={() => {
        navigate('/pdhruv')
    }}  className=" text-xl m-2 text-gray-600">Anushka Sharma </p>

<p  className=" text-xl m-2 text-gray-600">Shahrukh Khan</p>


<p  className=" text-xl m-2 text-gray-600"> Tom Cruise</p>

<p  className=" text-xl m-2 text-gray-600">Leonardo DiCaprio </p>




  </div>
  )
}

export default Movies ;