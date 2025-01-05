import React from 'react'
import { useNavigate } from 'react-router-dom';

const Astrological = () => {
    const navigate = useNavigate() ;
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-10">Top Voices </h1>
    <p onClick={() => {
        navigate('/p')
    }}  className=" text-xl m-2 text-gray-600">Bejan Daruwala</p>

<p onClick={() => {
        navigate('/pdhruv')
    }}  className=" text-xl m-2 text-gray-600">K.N.Rao</p>

<p  className=" text-xl m-2 text-gray-600">Pandit Ajai Bhambi</p>


<p  className=" text-xl m-2 text-gray-600"> Susan Miller</p>

<p  className=" text-xl m-2 text-gray-600"> Linda Goodman</p>




  </div>
  )
}

export default Astrological ;