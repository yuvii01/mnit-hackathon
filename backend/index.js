const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto'); // For verifying the payment signature
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Razorpay client
const razorpay = new Razorpay({
    key_id: 'rzp_test_9JEwuZhaVvyqhU',
    key_secret: 'sXqXAI5Cz3PY4vmQEwgUzCxH',
});

// Create Order Endpoint
app.post('/create-order', async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const options = {
            amount: amount * 100, // Convert to paise
            currency: currency,
            receipt: 'receipt#1',
        };

        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating order');
    }
});

// Payment Handler Endpoint
app.post('/paymenthandler', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Create a string to verify the signature
    const generated_signature = crypto.createHmac('sha256', razorpay.key_secret)
        .update(razorpay_order_id + '|' + razorpay_payment_id)
        .digest('hex');

    // Verify the payment signature
    if (generated_signature === razorpay_signature) {
        // Payment is successful
        console.log("Payment verified successfully!");
        // Here, you can save payment details to your database
        res.status(200).json({ message: 'Payment verified successfully' });
    } else {
        // Payment verification failed
        console.log("Payment verification failed!");
        res.status(400).json({ message: 'Payment verification failed' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});