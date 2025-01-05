import React from 'react'
import { useNavigate } from 'react-router-dom';

const Pelon = (props) => {

  const chatbot = () => {
    console.log('Chatbot clicked');
  }

  const navigate = useNavigate() ;
  return (
    <div className='mt-[100px]'>

      <div className='relative w-screen h-90vh py-10 '>
      
      <div className='absolute z-[100] top-0 left-0  h-[700px] w-[50px] bg-white'>
       
       </div>
     <iframe className='absolute w-full top-0 h-full'
       src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/10/09/20241110095910-GXWHE3HR.json"  // Replace with the actual URL
       style={{ width: '100%', height: '90vh', border: 'none' }}
       title="Embedded Website"
     ></iframe>

     <div className='absolute top-0 z-[100] right-0 w-[800px] bg-white h-[700px] '>
     
     <div className='flex flex-col px-10'>
     {/* Remaining Trials Section */}
     <div className="text-center mb-8">
       <h2 className="text-3xl font-semibold text-gray-700 mb-4">
         2 Trials Left
       </h2>
       <p className="text-lg text-gray-600">Your free trials are running out!</p>
     </div>

    
      <button
       className="bg-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-blue-700 transition duration-300 ease-in-out"
      
     >
       View Plans
     </button> 

     {/* Plans Details */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {/* Silver Plan */}
       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
         <h3 className="text-2xl font-semibold text-gray-800 mb-2">Silver</h3>
         <p className="text-lg text-gray-600 mb-4">Price: ₹99</p>
         <p className="text-lg text-gray-600 mb-4">Features:</p>
         <ul className="text-left">
           <li className="mb-2">✅ Unlimited Chat</li>
           <li className="mb-2">❌ Speech Input/Output</li>
           <li className="mb-2">❌ User Chats Saved</li>
         </ul>
       </div>

       {/* Platinum Plan */}
       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
         <h3 className="text-2xl font-semibold text-gray-800 mb-2">Gold</h3>
         <p className="text-lg text-gray-600 mb-4">Price: ₹149</p>
         <p className="text-lg text-gray-600 mb-4">Features:</p>
         <ul className="text-left">
           <li className="mb-2">✅ Unlimited Chat</li>
           <li className="mb-2">✅ Speech Input/Output</li>
           <li className="mb-2">❌ User Chats Saved</li>
         </ul>
       </div>

       {/* Gold Plan */}
       <div className="bg-white shadow-lg rounded-lg p-6 text-center">
         <h3 className="text-2xl font-semibold text-gray-800 mb-2">Platinum</h3>
         <p className="text-lg text-gray-600 mb-4">Price: ₹199</p>
         <p className="text-lg text-gray-600 mb-4">Features:</p>
         <ul className="text-left">
           <li className="mb-2">✅ Unlimited Chat</li>
           <li className="mb-2">✅ Speech Input/Output</li>
           <li className="mb-2">✅ User Chats Saved</li>
         </ul>
       </div>
     </div>

     <div>
     <button 
      onClick={() => {
        navigate('/checkout'); // use 'navigate' here
      }}  
      className='text-xl py-3 px-5 border border-black rounded'>
      Checkout
    </button>
     </div>

     </div>
   




     </div>

      </div>
    </div>
  )
}

export default Pelon ;