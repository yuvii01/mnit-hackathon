const initRazorpayOrder = (
    order_id, amount, razorpay_order_id, userData) => {

    const options = {
        key: "rzp_test_vNoztmT3ky59rZ", // Enter the Key ID generated from the Dashboard
        amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "IShop",
        description: "HELLO THIS IS ISHOP RAZORPAY ",
        image: "http://localhost:3000/image/logo.svg.svg",
        order_id: razorpay_order_id,
        //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().

        handler: function (razorpay_response) {
            axios.post(API_BASE_URL + CART_ORDER_URL + "/payment-success", { order_id, razorpay_response })
                .then(
                    (success) => {
                        if (success.data.status == 1) {
                            dispatcher(emptyCart())
                            navigator("/thank-you/" + success.data.order_id)
                        } else {

                        }
                    }
                ).catch(
                    (error) => {
                    }
                )
        },
        prefill: {
            name: userData.name,
            email: userData.email,
            contact: userData.phone,
        },

        theme: {
            color: "#FF4252",
        },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {

        const razorpay_response = {
            razorpay_order_id: response.error.metadata.order_id,
            razorpay_payment_id: response.error.metadata.payment_id,
        }

        axios.post(API_BASE_URL + CART_ORDER_URL + "/failed", { order_id, razorpay_response })
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        navigator("/Failed")

                    } else {

                    }
                }
            ).catch(
                (error) => {
                }
            )
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
    });

    rzp1.open();

}