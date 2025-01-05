import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {

  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate();

  const amount = 500; // Example amount in INR (500)
  const userData = { name: "John Doe", email: "john@example.com", phone: "1234567890" }; // Example user data

  const handleRazorpayPayment = async () => {
    try {
      // Fetch the order details from your backend
      const response = await fetch('http://localhost:5000/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       // Make sure this logs the correct value
        body: JSON.stringify({ amount: 5000, currency: 'INR' }),
        mode: 'cors',  // This enables cross-origin requests
      });

      const orderData = await response.json();

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const options = {
        key: "rzp_test_9JEwuZhaVvyqhU", // Your Razorpay key
        amount: 50000, // Amount is in currency subunits (e.g., INR)
        currency: "INR", // Currency from the order response
        name: "IShop",
        description: "HELLO THIS IS ISHOP RAZORPAY",
        image: "",
        order_id: orderData.id, // Use the order ID from the response
        handler: async function (razorpay_response) {
          console.log('Payment successful:', razorpay_response);

          // Send payment details to your backend for verification
          const paymentResponse = await fetch('http://localhost:5000/paymenthandler', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: razorpay_response.razorpay_order_id,
              razorpay_payment_id: razorpay_response.razorpay_payment_id,
              razorpay_signature: razorpay_response.razorpay_signature,
            }),
          });

          const result = await paymentResponse.json();
          if (paymentResponse.ok) {
            // Payment verification was successful
            navigate('/thankyou'); // Redirect to thank you page
          } else {
            console.error('Payment verification failed:', result);
            // Handle verification failure (e.g., show an error message)
          }
        },
        prefill: {
          name: "userData.name", // Use userData directly
          email: "userData.email",
          contact: "userData.phone",
        },
        theme: {
          color: "#FF4252",
        },
      };
      
      const razorpay = new window.Razorpay(options);
      
      razorpay.open();
      
    } catch (error) {
      console.log("")
      console.error("Error creating order:", error);
    }
  };

  const handlePayment = () => {
    if (selectedPayment === 'razorpay') {
      handleRazorpayPayment();
    } else if (selectedPayment === 'paypal') {
      navigate('/paypal-checkout');
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Choose Payment Option</h1>
        
        <div className="mb-4">
          <input 
            type="radio" 
            id="razorpay" 
            name="payment" 
            value="razorpay" 
            checked={selectedPayment === 'razorpay'}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <label htmlFor="razorpay" className="ml-2">Pay with Razorpay</label>
        </div>
        
        {/* <div className="mb-4">
          <input 
            type="radio" 
            id="paypal" 
            name="payment" 
            value="paypal" 
            checked={selectedPayment np=== 'paypal'}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
         
        </div> */}

        <button
          onClick={handlePayment}
          className="w-full bg-indigo-600 text -white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;