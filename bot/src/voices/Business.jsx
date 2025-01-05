import React from 'react'
import { useNavigate } from 'react-router-dom';

const Business = () => {
    const navigate = useNavigate() ;
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-10">Top Voices</h1>
    <p onClick={() => {
        navigate('/pelon')
    }}  className=" text-xl text-gray-600">Elon Musk</p>


<p   className=" text-xl text-gray-600">Bill Gates</p> 
<p   className=" text-xl text-gray-600">Ansheer Grover</p> 
<p   className=" text-xl text-gray-600">Jeff Bezos</p> 
<p   className=" text-xl text-gray-600">Aman Gupta</p> 
<p   className=" text-xl text-gray-600">Namita Thapar</p> 

  </div>
  )
}

export default Business ;